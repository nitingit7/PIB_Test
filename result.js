/* Daily GA Practice — result page (result.html) */

const app = document.getElementById('app');
const dateKey = getDateParam();
const test = dateKey && window.MOCK_TESTS ? window.MOCK_TESTS[dateKey] : null;
const record = dateKey ? getStore()[dateKey] : null;

if (!test || !record || !record.lastResult) {
  location.href = 'index.html';
}

function renderResult() {
  const answers = record.lastAnswers;
  const result = record.lastResult;

  const overviewHtml = test.questions.map((q, i) => {
    const st = statusOf(q, answers[i]);
    return `<a href="#rev-${i}" class="palette-cell status-${st}">${i + 1}</a>`;
  }).join('');

  const reviewHtml = test.questions.map((q, i) => {
    const userAns = answers[i];
    const st = statusOf(q, userAns);
    const pillLabel = st === 'skipped' ? 'Skipped' : (st === 'correct' ? 'Correct' : 'Incorrect');
    const optionsHtml = q.options.map((opt, j) => {
      let cls = 'option';
      if (j === q.answer) cls += ' correct-answer';
      else if (j === userAns) cls += ' wrong-answer';
      return `<div class="${cls}"><div class="bubble">${String.fromCharCode(65 + j)}</div><div class="otext">${opt}</div></div>`;
    }).join('');
    return `
      <div class="review-item" id="rev-${i}">
        <div class="q-number-row"><div class="qn">QUESTION ${i + 1}</div>
          <div class="status-pill status-${st}">${pillLabel}</div>
        </div>
        <div class="q-text" style="font-size:16px">${q.q}</div>
        <div class="options">${optionsHtml}</div>
        ${q.explanation ? `<div class="explanation">${q.explanation}</div>` : ''}
      </div>`;
  }).join('');

  app.innerHTML = `
    <div class="masthead">
      <a class="brand-link" href="index.html">
        <div class="brand">Practice<span>King</span></div>
        <div class="brand-slogan">Daily Current Affairs</div>
      </a>
      <div class="tagline">Result · ${test.label}</div>
    </div>
    <div class="wrap">
      <div class="scorecard">
        <div class="headline serif">${result.autoSubmitted ? 'Time up — test auto-submitted' : 'Test submitted'}</div>
        <div class="sub">${test.label} · ${test.questions.length} questions · +${MARK_CORRECT} correct, −${MARK_NEGATIVE} wrong</div>
        <div class="stat-grid">
          <div class="stat score"><div class="num">${result.score.toFixed(2)}</div><div class="lbl">Score</div></div>
          <div class="stat correct"><div class="num">${result.correct}</div><div class="lbl">Correct</div></div>
          <div class="stat wrong"><div class="num">${result.wrong}</div><div class="lbl">Wrong</div></div>
          <div class="stat skipped"><div class="num">${result.skipped}</div><div class="lbl">Skipped</div></div>
        </div>

        <div class="palette-title" style="margin-top:22px">Question-wise Status</div>
        <div class="palette-grid overview-grid">${overviewHtml}</div>
        <div class="legend" style="flex-direction:row;flex-wrap:wrap;gap:16px;margin-top:12px">
          <div class="row"><span class="swatch" style="background:var(--green)"></span> Correct</div>
          <div class="row"><span class="swatch" style="background:var(--red)"></span> Wrong</div>
          <div class="row"><span class="swatch" style="background:var(--mustard)"></span> Skipped</div>
        </div>

        <div class="top-actions">
          <a class="btn" href="test.html?date=${encodeURIComponent(dateKey)}">Retake Test</a>
          <a class="btn btn-outline" href="index.html">Back to Test List</a>
          ${test.resourceLink ? `<a class="btn btn-outline" href="${test.resourceLink}" target="_blank" rel="noopener">See the Notes and Revise</a>` : ''}
        </div>
      </div>
      <div class="section-label">Answer Review</div>
      <div class="review-list">${reviewHtml}</div>
    </div>
  `;
}

renderResult();
