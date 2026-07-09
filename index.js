/* Daily GA Practice — home page (index.html) */

const app = document.getElementById('app');

function renderHome() {
  const dates = Object.keys(window.MOCK_TESTS || {}).sort((a, b) => b.localeCompare(a));
  const store = getStore();

  const cards = dates.length
    ? dates.map(dateKey => {
        const test = window.MOCK_TESTS[dateKey];
        const record = store[dateKey];
        const attempted = record && record.lastResult;
        const bestLine = record
          ? `<span class="best">Best: ${record.best.toFixed(2)} / ${test.questions.length}</span> · Attempts: ${record.attempts}`
          : 'Not attempted yet';
        const actionBtn = attempted
          ? `<a class="btn" href="result.html?date=${encodeURIComponent(dateKey)}">View Result</a>
             <a class="btn btn-outline" href="test.html?date=${encodeURIComponent(dateKey)}">Retake</a>`
          : `<a class="btn" href="test.html?date=${encodeURIComponent(dateKey)}">Start Test</a>`;
        const durationMin = totalTimeSeconds(test.questions.length) / 60;
        return `
          <div class="test-card">
            <div class="info">
              <div class="date serif">${test.label}</div>
              <div class="meta">${test.questions.length} questions · ~${durationMin} min · Source: ${test.source || 'PIB'} · ${bestLine}</div>
            </div>
            <div class="card-actions">${actionBtn}</div>
          </div>`;
      }).join('')
    : `<div class="empty-state">No mock tests yet. Add a dated question set in <span class="mono">data.js</span> to see it here.</div>`;

  app.innerHTML = `
    <div class="masthead">
      <a class="brand-link" href="index.html">
        <div class="brand">Practice<span>King</span></div>
        <div class="brand-slogan">Daily Current Affairs</div>
      </a>
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
}

renderHome();
