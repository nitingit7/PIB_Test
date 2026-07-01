/* Daily GA Practice — exam page (test.html) */

const app = document.getElementById('app');
const dateKey = getDateParam();
const test = dateKey && window.MOCK_TESTS ? window.MOCK_TESTS[dateKey] : null;

if (!test) {
  location.href = 'index.html';
}

let exam = {
  current: 0,
  answers: new Array(test.questions.length).fill(null),
  marked: new Array(test.questions.length).fill(false),
  visited: new Array(test.questions.length).fill(false),
  timeLeft: test.questions.length * SEC_PER_Q
};
exam.visited[0] = true;

let timerId = null;
let leavingIntentionally = false;

/* Warn on browser Back / tab close / refresh while the test is unfinished.
   Browsers show their own built-in wording here — custom text isn't
   permitted by any modern browser, this just triggers that native prompt. */
function beforeUnloadHandler(e) {
  if (leavingIntentionally) return;
  e.preventDefault();
  e.returnValue = '';
  return '';
}
window.addEventListener('beforeunload', beforeUnloadHandler);

function exitToHome() {
  const ok = confirm('Exit this test now? Your answers so far will be lost and this attempt will not be saved.');
  if (ok) {
    leavingIntentionally = true;
    window.removeEventListener('beforeunload', beforeUnloadHandler);
    clearInterval(timerId);
    location.href = 'index.html';
  }
}

function startTimer() {
  timerId = setInterval(() => {
    exam.timeLeft--;
    if (exam.timeLeft <= 0) {
      clearInterval(timerId);
      submitTest(true);
      return;
    }
    const t = document.querySelector('.timer');
    if (t) {
      t.textContent = fmtTime(exam.timeLeft);
      t.classList.toggle('low', exam.timeLeft <= 60);
    }
  }, 1000);
}

function renderExam() {
  const { current, answers, marked } = exam;
  const q = test.questions[current];

  const optionsHtml = q.options.map((opt, i) => `
    <div class="option ${answers[current] === i ? 'selected' : ''}" data-opt="${i}">
      <div class="bubble">${String.fromCharCode(65 + i)}</div>
      <div class="otext">${opt}</div>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="exam-bar">
      <div>
        <div class="label">Test</div>
        ${test.label} · General Awareness
      </div>
      <div style="text-align:right">
        <div class="label">Time Left</div>
        <div class="timer ${exam.timeLeft <= 60 ? 'low' : ''}">${fmtTime(exam.timeLeft)}</div>
      </div>
    </div>
    <div class="exam-layout">
      <div class="q-panel">
        <div class="q-number-row">
          <div class="qn">QUESTION ${current + 1} OF ${test.questions.length}</div>
          <div class="qn">+${MARK_CORRECT} / −${MARK_NEGATIVE}</div>
        </div>
        <div class="q-text">${q.q}</div>
        <div class="options">${optionsHtml}</div>
        <div class="q-footer">
          <button class="clear" data-action="clear">Clear Response</button>
          <button class="review" data-action="mark">${marked[current] ? 'Unmark Review' : 'Mark for Review'}</button>
          <button data-action="prev" ${current === 0 ? 'disabled' : ''}>Previous</button>
          <button class="primary" data-action="next">${current === test.questions.length - 1 ? 'Save' : 'Save & Next'}</button>
        </div>
      </div>
      <div class="palette-panel">
        <div class="palette-title">Question Palette</div>
        <div class="palette-grid">
          ${test.questions.map((_, i) => {
            let cls = 'palette-cell';
            if (i === current) cls += ' current';
            if (marked[i]) cls += ' review';
            else if (answers[i] !== null) cls += ' answered';
            else if (exam.visited[i]) cls += ' not-answered';
            return `<div class="${cls}" data-goto="${i}">${i + 1}</div>`;
          }).join('')}
        </div>
        <div class="legend">
          <div class="row"><span class="swatch" style="background:var(--green)"></span> Answered</div>
          <div class="row"><span class="swatch" style="background:var(--mustard)"></span> Marked for review</div>
          <div class="row"><span class="swatch" style="background:var(--red-soft);border-color:var(--red)"></span> Not answered</div>
          <div class="row"><span class="swatch" style="background:var(--paper);border-color:var(--line)"></span> Not visited</div>
        </div>
        <button class="submit-btn" data-action="submit">Submit Test</button>
        <button class="exit-btn" data-action="exit">Cancel / Exit Test</button>
      </div>
    </div>
  `;

  app.querySelectorAll('.option').forEach(el => {
    el.addEventListener('click', () => {
      exam.answers[current] = parseInt(el.dataset.opt, 10);
      renderExam();
    });
  });
  app.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => {
      exam.current = parseInt(el.dataset.goto, 10);
      exam.visited[exam.current] = true;
      renderExam();
    });
  });
  app.querySelector('[data-action="clear"]').addEventListener('click', () => {
    exam.answers[current] = null;
    renderExam();
  });
  app.querySelector('[data-action="mark"]').addEventListener('click', () => {
    exam.marked[current] = !exam.marked[current];
    renderExam();
  });
  app.querySelector('[data-action="prev"]').addEventListener('click', () => {
    if (current > 0) { exam.current--; exam.visited[exam.current] = true; renderExam(); }
  });
  app.querySelector('[data-action="next"]').addEventListener('click', () => {
    if (current < test.questions.length - 1) { exam.current++; exam.visited[exam.current] = true; renderExam(); }
    else renderExam();
  });
  app.querySelector('[data-action="submit"]').addEventListener('click', () => {
    if (confirm('Submit the test? You cannot change answers after submitting.')) submitTest(false);
  });
  app.querySelector('[data-action="exit"]').addEventListener('click', exitToHome);
}

function submitTest(autoSubmitted) {
  clearInterval(timerId);
  const { answers } = exam;
  let correct = 0, wrong = 0, skipped = 0;

  answers.forEach((a, i) => {
    if (a === null) skipped++;
    else if (a === test.questions[i].answer) correct++;
    else wrong++;
  });

  const score = correct * MARK_CORRECT - wrong * MARK_NEGATIVE;
  const result = { correct, wrong, skipped, score, autoSubmitted };

  const store = getStore();
  const prev = store[dateKey] || { best: -Infinity, attempts: 0 };
  store[dateKey] = {
    best: Math.max(prev.best, score),
    attempts: prev.attempts + 1,
    lastAnswers: answers.slice(),
    lastResult: result
  };
  setStore(store);

  leavingIntentionally = true;
  window.removeEventListener('beforeunload', beforeUnloadHandler);
  location.href = `result.html?date=${encodeURIComponent(dateKey)}`;
}

renderExam();
startTimer();
