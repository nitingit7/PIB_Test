/* Daily GA Practice — app logic (app.js — single-page version) */

const SEC_PER_Q    = 45;
const MARK_CORRECT = 1;
const MARK_NEGATIVE = 0.5;

const app = document.getElementById('app');
const STORAGE_KEY = 'ga_practice_attempts';

let state   = null;
let timerId = null;

function getStore() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (e) { return {}; }
}
function setStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function fmtTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

/* ---- Routing ---- */

function goHome() {
  history.pushState({ view: 'home' }, '', '');
  renderHome();
}

function goExam(dateKey) {
  history.pushState({ view: 'exam', dateKey }, '', '');
  startTest(dateKey);
}

function goResult() {
  history.pushState({ view: 'result', dateKey: state.dateKey }, '', '');
  renderResult();
}

window.addEventListener('popstate', () => {
  renderHome();
});

/* ============================================================
   HOME
   ============================================================ */

function renderHome() {
  clearInterval(timerId);
  const dates = Object.keys(window.MOCK_TESTS || {}).sort((a, b) => b.localeCompare(a));
  const store = getStore();

  const cards = dates.length
    ? dates.map(dateKey => {
        const test    = window.MOCK_TESTS[dateKey];
        const record  = store[dateKey];
        const attempted = record && record.lastResult;
        const bestLine  = record
          ? `<span class="best">Best: ${record.best.toFixed(2)} / ${test.questions.length}</span> · Attempts: ${record.attempts}`
          : 'Not attempted yet';
        const actionBtn = attempted
          ? `<button class="btn" data-view-result="${dateKey}">View Result</button>
             <button class="btn btn-outline" data-start="${dateKey}">Retake</button>`
          : `<button class="btn" data-start="${dateKey}">Start Test</button>`;
        return `
          <div class="test-card">
            <div class="info">
              <div class="date serif">${test.label}</div>
              <div class="meta">${test.questions.length} questions · Source: ${test.source || 'PIB'} · ${bestLine}</div>
            </div>
            <div class="card-actions">${actionBtn}</div>
          </div>`;
      }).join('')
    : `<div class="empty-state">No mock tests yet. Add a dated question set in <span class="mono">data.js</span> to see it here.</div>`;

  app.innerHTML = `
    <div class="masthead">
      <div class="brand-link" style="cursor:default">
        <div class="brand">Practice<span>King</span></div>
        <div class="brand-slogan">Daily Current Affairs</div>
      </div>
      <div class="masthead-right">
        <div class="tagline">General Awareness · Mock Test Series</div>
        ${themeToggleBtnHtml()}
      </div>
    </div>
    <div class="wrap">
      <div class="section-label">Available Mock Tests</div>
      ${cards}
    </div>
  `;

  bindThemeToggle();

  app.querySelectorAll('[data-start]').forEach(btn => {
    btn.addEventListener('click', () => goExam(btn.dataset.start));
  });
  app.querySelectorAll('[data-view-result]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dateKey = btn.dataset.viewResult;
      const record  = getStore()[dateKey];
      if (!record || !record.lastResult) return;
      state = {
        dateKey,
        test:    window.MOCK_TESTS[dateKey],
        answers: record.lastAnswers,
        result:  record.lastResult
      };
      goResult();
    });
  });
}

/* ============================================================
   EXAM
   ============================================================ */

function startTest(dateKey) {
  const test = window.MOCK_TESTS[dateKey];
  state = {
    dateKey,
    test,
    current:   0,
    answers:   new Array(test.questions.length).fill(null),
    marked:    new Array(test.questions.length).fill(false),
    visited:   new Array(test.questions.length).fill(false),
    timeLeft:  test.questions.length * SEC_PER_Q,
    submitted: false
  };
  state.visited[0] = true;
  renderExam();
  timerId = setInterval(() => {
    state.timeLeft--;
    if (state.timeLeft <= 0) {
      clearInterval(timerId);
      submitTest(true);
      return;
    }
    const t = document.querySelector('.timer');
    if (t) {
      t.textContent = fmtTime(state.timeLeft);
      t.classList.toggle('low', state.timeLeft <= 60);
    }
  }, 1000);
}

function renderExam() {
  const { test, current, answers, marked } = state;
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
        <div class="timer ${state.timeLeft <= 60 ? 'low' : ''}">${fmtTime(state.timeLeft)}</div>
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
            else if (state.visited[i]) cls += ' not-answered';
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
      </div>
    </div>
  `;

  app.querySelectorAll('.option').forEach(el => {
    el.addEventListener('click', () => {
      state.answers[current] = parseInt(el.dataset.opt, 10);
      renderExam();
    });
  });
  app.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => {
      state.current = parseInt(el.dataset.goto, 10);
      state.visited[state.current] = true;
      renderExam();
    });
  });
  app.querySelector('[data-action="clear"]').addEventListener('click', () => {
    state.answers[current] = null;
    renderExam();
  });
  app.querySelector('[data-action="mark"]').addEventListener('click', () => {
    state.marked[current] = !state.marked[current];
    renderExam();
  });
  app.querySelector('[data-action="prev"]').addEventListener('click', () => {
    if (current > 0) { state.current--; state.visited[state.current] = true; renderExam(); }
  });
  app.querySelector('[data-action="next"]').addEventListener('click', () => {
    if (current < test.questions.length - 1) { state.current++; state.visited[state.current] = true; renderExam(); }
    else renderExam();
  });
  app.querySelector('[data-action="submit"]').addEventListener('click', () => {
    if (confirm('Submit the test? You cannot change answers after submitting.')) submitTest(false);
  });
}

/* ============================================================
   SUBMIT / RESULT
   ============================================================ */

function submitTest(autoSubmitted) {
  clearInterval(timerId);
  const { test, answers } = state;
  let correct = 0, wrong = 0, skipped = 0;

  answers.forEach((a, i) => {
    if (a === null) skipped++;
    else if (a === test.questions[i].answer) correct++;
    else wrong++;
  });

  const score  = correct * MARK_CORRECT - wrong * MARK_NEGATIVE;
  const result = { correct, wrong, skipped, score, autoSubmitted };

  const store = getStore();
  const prev  = store[state.dateKey] || { best: -Infinity, attempts: 0 };
  store[state.dateKey] = {
    best:        Math.max(prev.best, score),
    attempts:    prev.attempts + 1,
    lastAnswers: answers.slice(),
    lastResult:  result
  };
  setStore(store);

  state.submitted = true;
  state.result    = result;
  goResult();
}

function statusOf(q, userAns) {
  if (userAns === null || userAns === undefined) return 'skipped';
  return userAns === q.answer ? 'correct' : 'wrong';
}

function renderResult() {
  const { test, answers, result, dateKey } = state;

  const totalQ   = test.questions.length;
  const maxScore = totalQ * MARK_CORRECT;
  const accuracy = totalQ > 0
    ? Math.round((result.correct / (result.correct + result.wrong || 1)) * 100)
    : 0;
  const attempted = result.correct + result.wrong;
  const store     = getStore();
  const best      = (store[dateKey] && store[dateKey].best) || result.score;

  const CIRC = 289;
  const ringPct    = maxScore > 0 ? Math.max(0, Math.min(1, result.score / maxScore)) : 0;
  const ringOffset = CIRC - ringPct * CIRC;

  const overviewHtml = test.questions.map((q, i) => {
    const st = statusOf(q, answers[i]);
    return `<a href="#rev-${i}" class="palette-cell status-${st}" title="Q${i+1}: ${st}">${i + 1}</a>`;
  }).join('');

  const reviewHtml = test.questions.map((q, i) => {
    const userAns   = answers[i];
    const st        = statusOf(q, userAns);
    const pillLabel = st === 'skipped' ? 'Skipped' : (st === 'correct' ? '✓ Correct' : '✗ Incorrect');
    const optionsHtml = q.options.map((opt, j) => {
      let cls = 'option';
      if (j === q.answer)     cls += ' correct-answer';
      else if (j === userAns) cls += ' wrong-answer';
      return `<div class="${cls}"><div class="bubble">${String.fromCharCode(65 + j)}</div><div class="otext">${opt}</div></div>`;
    }).join('');
    return `
      <div class="review-item ri-${st}" id="rev-${i}">
        <div class="review-item-header">
          <span class="review-item-qnum">QUESTION ${i + 1} OF ${totalQ}</span>
          <span class="status-pill status-${st}">${pillLabel}</span>
        </div>
        <div class="review-item-body">
          <div class="q-text" style="font-size:14.5px">${q.q}</div>
          <div class="options">${optionsHtml}</div>
          ${q.explanation ? `<div class="explanation">${q.explanation}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  const notesBannerHtml = test.resourceLink
    ? `<a class="notes-banner" href="${test.resourceLink}" target="_blank" rel="noopener noreferrer">
        <span class="notes-banner-icon">📒</span>
        <div class="notes-banner-content">
          <div class="notes-banner-title">Study Notes & Revision</div>
          <div class="notes-banner-sub">Open the source notes to reinforce what you just practised.</div>
        </div>
        <span class="notes-banner-arrow">→</span>
      </a>`
    : '';

  app.innerHTML = `
    <div class="masthead">
      <div class="brand-link" style="cursor:default">
        <div class="brand">Practice<span>King</span></div>
        <div class="brand-slogan">Daily Current Affairs</div>
      </div>
      <div class="masthead-right">
        <div class="tagline">Result · ${test.label}</div>
        ${themeToggleBtnHtml()}
      </div>
    </div>

    <div class="wrap">

      <!-- ① HERO SCORE BANNER -->
      <div class="result-hero">
        <div class="result-hero-label">${result.autoSubmitted ? '⏱ Time Up — Auto Submitted' : '✓ Test Submitted'}</div>
        <div class="result-hero-title">${test.label}</div>
        <div class="result-hero-test">${totalQ} questions · +${MARK_CORRECT} correct  −${MARK_NEGATIVE} wrong</div>

        <div class="score-ring-wrap">
          <div class="score-ring">
            <svg viewBox="0 0 100 100">
              <circle class="ring-bg"   cx="50" cy="50" r="46"/>
              <circle class="ring-fill" cx="50" cy="50" r="46"
                style="stroke-dashoffset:${CIRC}px"
                data-offset="${ringOffset}"/>
            </svg>
            <div class="score-ring-inner">
              <div class="score-ring-num">${result.score.toFixed(1)}</div>
              <div class="score-ring-total">/ ${maxScore}</div>
            </div>
          </div>
        </div>

        <div class="hero-stats">
          <div class="hero-stat-item hs-correct">
            <div class="hero-stat-num">${result.correct}</div>
            <div class="hero-stat-lbl">Correct</div>
          </div>
          <div class="hero-stat-item hs-wrong">
            <div class="hero-stat-num">${result.wrong}</div>
            <div class="hero-stat-lbl">Wrong</div>
          </div>
          <div class="hero-stat-item hs-skipped">
            <div class="hero-stat-num">${result.skipped}</div>
            <div class="hero-stat-lbl">Skipped</div>
          </div>
        </div>
      </div>

      <!-- ② META CARDS -->
      <div class="result-meta-cards">
        <div class="result-meta-card">
          <span class="rmc-icon">🎯</span>
          <div class="rmc-val">${accuracy}%</div>
          <div class="rmc-lbl">Accuracy</div>
        </div>
        <div class="result-meta-card">
          <span class="rmc-icon">✏️</span>
          <div class="rmc-val">${attempted}</div>
          <div class="rmc-lbl">Attempted</div>
        </div>
        <div class="result-meta-card">
          <span class="rmc-icon">🏆</span>
          <div class="rmc-val">${best.toFixed(1)}</div>
          <div class="rmc-lbl">Best Score</div>
        </div>
      </div>

      <!-- ③ ACTION BUTTONS -->
      <div class="result-actions">
        <button class="btn" data-action="retry">🔁 Retake Test</button>
        <button class="btn btn-outline" data-action="home">← Test List</button>
      </div>

      <!-- ④ QUESTION-WISE STATUS -->
      <div class="result-section">
        <div class="result-section-title">
          <span class="section-icon">🗂</span>
          Question-wise Status
        </div>
        <div class="palette-grid overview-grid">${overviewHtml}</div>
        <div class="legend" style="flex-direction:row;flex-wrap:wrap;gap:14px;margin-top:10px;margin-bottom:0">
          <div class="row"><span class="swatch" style="background:var(--green);border-color:var(--green)"></span>Correct</div>
          <div class="row"><span class="swatch" style="background:var(--red);border-color:var(--red)"></span>Wrong</div>
          <div class="row"><span class="swatch" style="background:var(--amber);border-color:var(--amber)"></span>Skipped</div>
        </div>
      </div>

      <!-- ⑤ ANSWER REVIEW LIST -->
      <div class="result-section-title" style="margin-bottom:12px;margin-top:4px">
        <span class="section-icon" style="width:28px;height:28px;border-radius:8px;background:var(--brand-soft);display:inline-flex;align-items:center;justify-content:center;font-size:15px;margin-right:8px">📝</span>
        Answer Review
      </div>
      <div class="review-list">${reviewHtml}</div>

      <!-- ⑥ NOTES BANNER -->
      ${notesBannerHtml ? `<div style="margin-top:24px">${notesBannerHtml}</div>` : ''}

    </div>
  `;

  bindThemeToggle();

  app.querySelector('[data-action="retry"]').addEventListener('click', () => goExam(dateKey));
  app.querySelector('[data-action="home"]').addEventListener('click', goHome);

  // Animate score ring
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const ring = app.querySelector('.ring-fill');
      if (ring) ring.style.strokeDashoffset = parseFloat(ring.dataset.offset) + 'px';
    });
  });
}

/* ---- INIT ---- */
history.replaceState({ view: 'home' }, '', '');
renderHome();
