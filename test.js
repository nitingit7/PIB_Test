/* Daily GA Practice — exam page (test.html) */

const app = document.getElementById('app');
const dateKey = getDateParam();
const test = dateKey && window.MOCK_TESTS ? window.MOCK_TESTS[dateKey] : null;

if (!test) {
  location.href = 'index.html';
}

const FONT_SCALE_KEY = 'ga_practice_font_scale';
const FONT_SCALE_MIN = 0.85;
const FONT_SCALE_MAX = 1.5;
let fontScale = parseFloat(localStorage.getItem(FONT_SCALE_KEY)) || 1;

function applyFontScale() {
  document.documentElement.style.setProperty('--font-scale', fontScale.toFixed(2));
}
applyFontScale();

/* Computed test meta */
const totalQ    = test.questions.length;
const totalTime = totalTimeSeconds(totalQ);           // seconds
const totalMins = totalTime / 60;
const maxMarks  = totalQ * MARK_CORRECT;

let exam = null;   // initialised only after instructions screen
let timerId = null;
let leavingIntentionally = false;

/* ---- beforeunload: only active during the live test, not instructions ---- */
function beforeUnloadHandler(e) {
  if (leavingIntentionally) return;
  e.preventDefault();
  e.returnValue = '';
  return '';
}

function exitToHome() {
  const ok = confirm('Exit this test now? Your answers so far will be lost and this attempt will not be saved.');
  if (ok) {
    leavingIntentionally = true;
    window.removeEventListener('beforeunload', beforeUnloadHandler);
    clearInterval(timerId);
    location.href = 'index.html';
  }
}

/* ============================================================
   INSTRUCTIONS SCREEN
   ============================================================ */

function renderInstructions() {
  const store   = getStore();
  const record  = store[dateKey];
  const bestBadge = record
    ? `<div class="instr-best-badge">Previous Best: <strong>${record.best.toFixed(2)} / ${maxMarks}</strong> &nbsp;·&nbsp; Attempts: <strong>${record.attempts}</strong></div>`
    : '';

  app.innerHTML = `
    <div class="masthead">
      <a class="brand-link" href="index.html">
        <div class="brand">Practice<span>King</span></div>
        <div class="brand-slogan">Daily Current Affairs</div>
      </a>
      <div class="masthead-right">
        <div class="tagline">Test Details</div>
        ${themeToggleBtnHtml()}
      </div>
    </div>

    <div class="wrap instr-wrap">

      <!-- Test title card -->
      <div class="instr-header">
        <div class="instr-source-tag">${test.source || 'PIB'} · General Awareness</div>
        <h1 class="instr-title">${test.label}</h1>
        ${bestBadge}
      </div>

      <!-- Stats grid -->
      <div class="instr-stats">
        <div class="instr-stat-card">
          <div class="instr-stat-val">${totalQ}</div>
          <div class="instr-stat-lbl">Questions</div>
        </div>
        <div class="instr-stat-card">
          <div class="instr-stat-val">${maxMarks}</div>
          <div class="instr-stat-lbl">Total Marks</div>
        </div>
        <div class="instr-stat-card">
          <div class="instr-stat-val">${totalMins}<span class="instr-stat-unit">min</span></div>
          <div class="instr-stat-lbl">Time Limit</div>
        </div>
        <div class="instr-stat-card">
          <div class="instr-stat-val">${MARK_NEGATIVE}<span class="instr-stat-unit">×</span></div>
          <div class="instr-stat-lbl">Neg. Marking</div>
        </div>
      </div>

      <!-- Marking scheme -->
      <div class="instr-section">
        <div class="instr-section-title">Marking Scheme</div>
        <div class="instr-marking-grid">
          <div class="instr-mark-item instr-mark-correct">
            <div class="instr-mark-val">+${MARK_CORRECT}</div>
            <div class="instr-mark-lbl">Correct Answer</div>
          </div>
          <div class="instr-mark-item instr-mark-wrong">
            <div class="instr-mark-val">&minus;${MARK_NEGATIVE}</div>
            <div class="instr-mark-lbl">Wrong Answer</div>
          </div>
          <div class="instr-mark-item instr-mark-skip">
            <div class="instr-mark-val">0</div>
            <div class="instr-mark-lbl">Skipped / Not Attempted</div>
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <div class="instr-section">
        <div class="instr-section-title">Instructions</div>
        <ul class="instr-list">
          <li>This test has <strong>${totalQ} questions</strong> to be completed in <strong>${totalMins} minutes</strong>.</li>
          <li>Each correct answer carries <strong>+${MARK_CORRECT} mark</strong>. Each wrong answer deducts <strong>${MARK_NEGATIVE} mark</strong>. Unattempted questions carry <strong>0 marks</strong>.</li>
          <li>You can navigate between questions freely using the <strong>Question Palette</strong>.</li>
          <li>You can <strong>Mark a question for Review</strong> and return to it later before submitting.</li>
          <li>The timer starts as soon as you click <strong>Begin Test</strong> and cannot be paused.</li>
          <li>The test will be <strong>auto-submitted</strong> when the time runs out.</li>
          <li>Do not close or refresh the browser tab during the test — your attempt may be lost.</li>
          <li>Questions are based on <strong>${test.source || 'PIB'}</strong> news and current affairs.</li>
        </ul>
      </div>

      <!-- Question Palette Legend -->
      <div class="instr-section">
        <div class="instr-section-title">Question Palette Legend</div>
        <div class="instr-legend-grid">
          <div class="instr-legend-item">
            <span class="instr-legend-dot dot-answered"></span>
            <span>Answered</span>
          </div>
          <div class="instr-legend-item">
            <span class="instr-legend-dot dot-review"></span>
            <span>Marked for Review</span>
          </div>
          <div class="instr-legend-item">
            <span class="instr-legend-dot dot-not-answered"></span>
            <span>Visited, Not Answered</span>
          </div>
          <div class="instr-legend-item">
            <span class="instr-legend-dot dot-not-visited"></span>
            <span>Not Yet Visited</span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="instr-cta">
        <button class="instr-begin-btn" id="beginTestBtn">Begin Test</button>
        <a class="btn btn-ghost" href="index.html">Go Back</a>
      </div>

    </div>
  `;

  bindThemeToggle();

  document.getElementById('beginTestBtn').addEventListener('click', () => {
    initExam();
    renderExam();
    startTimer();
    // Only attach the unload warning once the test has started
    window.addEventListener('beforeunload', beforeUnloadHandler);
  });
}

/* ============================================================
   EXAM
   ============================================================ */

function initExam() {
  exam = {
    current: 0,
    answers: new Array(totalQ).fill(null),
    marked:  new Array(totalQ).fill(false),
    visited: new Array(totalQ).fill(false),
    timeLeft: totalTime
  };
  exam.visited[0] = true;
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
  const unanswered = answers.filter(a => a === null).length;

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
          <div class="qn">QUESTION ${current + 1} OF ${totalQ}</div>
          <div class="q-toolbar-right">
            <div class="qn">+${MARK_CORRECT} / −${MARK_NEGATIVE}</div>
            <div class="font-controls">
              <button data-action="font-dec" aria-label="Decrease font size">A−</button>
              <button data-action="font-inc" aria-label="Increase font size">A+</button>
            </div>
          </div>
        </div>
        <div class="q-text">${formatQuestionText(q.q)}</div>
        <div class="options">${optionsHtml}</div>
        <div class="q-footer">
          <button class="clear" data-action="clear">Clear Response</button>
          <button class="review" data-action="mark">${marked[current] ? 'Unmark Review' : 'Mark for Review'}</button>
          <button data-action="prev" ${current === 0 ? 'disabled' : ''}>Previous</button>
          <button class="primary" data-action="next">${current === totalQ - 1 ? 'Save' : 'Save & Next'}</button>
        </div>
      </div>
      <div class="palette-panel">
        <div class="palette-header">
          <div class="palette-title">Question Palette</div>
          <button class="palette-close" data-action="close-palette" aria-label="Close">✕</button>
        </div>
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
          <div class="row"><span class="swatch" style="background:var(--green);border-color:var(--green)"></span> Answered</div>
          <div class="row"><span class="swatch" style="background:var(--amber);border-color:var(--amber)"></span> Marked for review</div>
          <div class="row"><span class="swatch" style="background:var(--red-soft);border-color:var(--red)"></span> Not answered</div>
          <div class="row"><span class="swatch" style="background:var(--surface-alt);border-color:var(--border)"></span> Not visited</div>
        </div>
        <button class="submit-btn" data-action="submit">Submit Test</button>
        <button class="exit-btn" data-action="exit">Cancel / Exit Test</button>
      </div>
    </div>
    <button class="palette-fab" data-action="toggle-palette" aria-label="Open question palette">
      ☰
      ${unanswered > 0 ? `<span class="fab-badge">${unanswered}</span>` : ''}
    </button>
    <div class="palette-backdrop" data-action="close-palette"></div>
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
      document.body.classList.remove('palette-open');
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
    if (current < totalQ - 1) {
      exam.current++;
      exam.visited[exam.current] = true;
      renderExam();
    } else {
      // Last question — show end-of-test modal
      showEndOfTestModal(
        () => submitTest(false),           // Submit
        () => { /* stay on last Q */ }      // Review
      );
    }
  });
  app.querySelector('[data-action="submit"]').addEventListener('click', () => {
    showEndOfTestModal(
      () => submitTest(false),
      () => { /* close modal, stay on current Q */ }
    );
  });
  app.querySelector('[data-action="exit"]').addEventListener('click', exitToHome);

  app.querySelector('[data-action="font-inc"]').addEventListener('click', () => {
    fontScale = Math.min(FONT_SCALE_MAX, +(fontScale + 0.1).toFixed(2));
    localStorage.setItem(FONT_SCALE_KEY, fontScale);
    applyFontScale();
  });
  app.querySelector('[data-action="font-dec"]').addEventListener('click', () => {
    fontScale = Math.max(FONT_SCALE_MIN, +(fontScale - 0.1).toFixed(2));
    localStorage.setItem(FONT_SCALE_KEY, fontScale);
    applyFontScale();
  });

  const fab = app.querySelector('[data-action="toggle-palette"]');
  if (fab) fab.addEventListener('click', () => document.body.classList.toggle('palette-open'));
  app.querySelectorAll('[data-action="close-palette"]').forEach(el => {
    el.addEventListener('click', () => document.body.classList.remove('palette-open'));
  });
}

/* ============================================================
   SUBMIT
   ============================================================ */

function submitTest(autoSubmitted) {
  clearInterval(timerId);
  const { answers } = exam;
  let correct = 0, wrong = 0, skipped = 0;

  answers.forEach((a, i) => {
    if (a === null) skipped++;
    else if (a === test.questions[i].answer) correct++;
    else wrong++;
  });

  const score  = correct * MARK_CORRECT - wrong * MARK_NEGATIVE;
  const result = { correct, wrong, skipped, score, autoSubmitted };

  const store = getStore();
  const prev  = store[dateKey] || { best: -Infinity, attempts: 0 };
  store[dateKey] = {
    best:        Math.max(prev.best, score),
    attempts:    prev.attempts + 1,
    lastAnswers: answers.slice(),
    lastResult:  result
  };
  setStore(store);

  leavingIntentionally = true;
  window.removeEventListener('beforeunload', beforeUnloadHandler);
  location.replace(`result.html?date=${encodeURIComponent(dateKey)}`);
}

/* ---- INIT: show instructions first ---- */
renderInstructions();
