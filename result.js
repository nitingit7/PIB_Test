/* Daily GA Practice — result page (result.html) */

const app = document.getElementById('app');
const dateKey = getDateParam();
const test   = dateKey && window.MOCK_TESTS ? window.MOCK_TESTS[dateKey] : null;
const record = dateKey ? getStore()[dateKey] : null;

if (!test || !record || !record.lastResult) {
  location.href = 'index.html';
}

function renderResult() {
  const answers = record.lastAnswers;
  const result  = record.lastResult;

  const totalQ   = test.questions.length;
  const maxScore = totalQ * MARK_CORRECT;
  const accuracy = totalQ > 0
    ? Math.round(((result.correct) / (result.correct + result.wrong || 1)) * 100)
    : 0;
  const attempted = result.correct + result.wrong;
  // SVG ring: circumference of r=46 circle = 2π×46 ≈ 289
  const CIRC = 289;
  const ringPct    = maxScore > 0 ? Math.max(0, Math.min(1, result.score / maxScore)) : 0;
  const ringOffset = CIRC - ringPct * CIRC;

  // ---- Question-wise overview grid ----
  const overviewHtml = test.questions.map((q, i) => {
    const st = statusOf(q, answers[i]);
    return `<a href="#rev-${i}" class="palette-cell status-${st}" title="Q${i+1}: ${st}">${i + 1}</a>`;
  }).join('');

  // ---- Review list ----
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
          <div class="q-text">${formatQuestionText(q.q)}</div>
          <div class="options">${optionsHtml}</div>
          ${q.explanation ? `<div class="explanation">${q.explanation}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  // ---- Notes banner: uses gate modal instead of direct href ----
  const notesBannerHtml = test.resourceLink
    ? `<div class="notes-banner" role="button" tabindex="0" data-notes-url="${test.resourceLink}">
        <span class="notes-banner-icon">N</span>
        <div class="notes-banner-content">
          <div class="notes-banner-title">Study Notes &amp; Revision</div>
          <div class="notes-banner-sub">Open the source notes to reinforce what you just practised.</div>
        </div>
        <span class="notes-banner-arrow">&rarr;</span>
      </div>`
    : '';

  app.innerHTML = `
    <div class="masthead">
      <a class="brand-link" href="index.html">
        <div class="brand">Practice<span>King</span></div>
        <div class="brand-slogan">Daily Current Affairs</div>
      </a>
      <div class="masthead-right">
        <div class="tagline">Result · ${test.label}</div>
        ${themeToggleBtnHtml()}
      </div>
    </div>

    <div class="wrap">

      <!-- ① HERO SCORE BANNER -->
      <div class="result-hero">
        <div class="result-hero-label">${result.autoSubmitted ? 'Time Up — Auto Submitted' : 'Test Submitted'}</div>
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
          <span class="rmc-icon rmc-accuracy">%</span>
          <div class="rmc-val">${accuracy}%</div>
          <div class="rmc-lbl">Accuracy</div>
        </div>
        <div class="result-meta-card">
          <span class="rmc-icon rmc-attempted">A</span>
          <div class="rmc-val">${attempted}</div>
          <div class="rmc-lbl">Attempted</div>
        </div>
        <div class="result-meta-card">
          <span class="rmc-icon rmc-best">B</span>
          <div class="rmc-val">${record.best.toFixed(1)}</div>
          <div class="rmc-lbl">Best Score</div>
        </div>
      </div>

      <!-- ③ ACTION BUTTONS -->
      <div class="result-actions">
        <a class="btn" href="test.html?date=${encodeURIComponent(dateKey)}">Retake Test</a>
        <a class="btn btn-outline" href="index.html">Test List</a>
        ${test.resourceLink ? `<button class="btn btn-notes" id="viewNotesBtn" type="button">View Notes</button>` : ''}
      </div>

      <!-- ④ QUESTION-WISE STATUS -->
      <div class="result-section">
        <div class="result-section-title">
          <span class="section-icon">Q</span>
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
        <span class="section-icon" style="width:28px;height:28px;border-radius:8px;background:var(--brand-soft);display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;margin-right:8px">A</span>
        Answer Review
      </div>
      <div class="review-list">${reviewHtml}</div>

      <!-- ⑥ NOTES BANNER (at the very end) -->
      ${notesBannerHtml ? `<div style="margin-top:24px">${notesBannerHtml}</div>` : ''}

    </div>
  `;

  bindThemeToggle();

  // Bind notes gate to the View Notes button (top)
  const viewNotesBtn = app.querySelector('#viewNotesBtn');
  if (viewNotesBtn) {
    viewNotesBtn.addEventListener('click', () => openNotesWithGate(test.resourceLink));
  }

  // Bind notes gate to the notes banner (bottom)
  const notesBanner = app.querySelector('[data-notes-url]');
  if (notesBanner) {
    notesBanner.addEventListener('click', () => openNotesWithGate(test.resourceLink));
    notesBanner.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openNotesWithGate(test.resourceLink);
    });
  }

  // Animate the score ring after DOM paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const ring = app.querySelector('.ring-fill');
      if (ring) {
        ring.style.strokeDashoffset = parseFloat(ring.dataset.offset) + 'px';
      }
    });
  });
}

renderResult();
