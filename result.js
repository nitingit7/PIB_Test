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
          ${test.resourceLink ? `<button class="btn btn-outline" data-action="notes" data-link="${test.resourceLink}">See the Notes and Revise</button>` : ''}
        </div>
      </div>
      <div class="section-label">Answer Review</div>
      <div class="review-list">${reviewHtml}</div>
    </div>
  `;

  const notesBtn = app.querySelector('[data-action="notes"]');
  if (notesBtn) notesBtn.addEventListener('click', () => showNotesGate(notesBtn.dataset.link));
}

/* ---------------- NOTES ACCESS GATE ----------------
   Collects Name / State / Mobile before opening the notes doc, and logs it
   to a Google Form response sheet (see setup instructions in the README
   note below) so there's a record of who accessed the notes.

   SETUP REQUIRED — replace the placeholders below with your own Google
   Form's response URL and field entry IDs:
   1. Create a Google Form with three short-answer questions: Name, State, Mobile Number.
   2. Click the three-dot menu → "Get pre-filled link", fill dummy values, click "Get link".
   3. The pre-filled URL will look like:
      https://docs.google.com/forms/d/e/FORM_ID/viewform?entry.111=X&entry.222=Y&entry.333=Z
      Copy the FORM_ID, and note which entry.NNN number belongs to which field.
   4. Set NOTES_FORM_CONFIG.actionUrl to:
      https://docs.google.com/forms/d/e/FORM_ID/formResponse
      and fill in nameField / stateField / mobileField below with the matching entry.NNN.
   Until this is configured, the modal still lets users through — it just
   won't have anywhere to log the submission. */

const NOTES_FORM_CONFIG = {
  actionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSegkOgVHi7J3LSnDQG5IDjhhcfZHd1gxnqxe7gw92pAZUT-xw/formResponse',
  nameField: 'entry.363822048',
  stateField: 'entry.648388663',
  mobileField: 'entry.1868111279'
};

const VISITOR_KEY = 'ga_practice_visitor';

function showNotesGate(link) {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(VISITOR_KEY)) || {}; } catch (e) {}

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-title serif">Before you head to the notes</div>
      <div class="modal-sub">Just a quick detail so we know who's using these notes — takes 5 seconds.</div>
      <label class="modal-label" for="mf-name">Name *</label>
      <input class="modal-input" id="mf-name" type="text" value="${saved.name ? saved.name.replace(/"/g, '&quot;') : ''}" placeholder="Your full name">
      <label class="modal-label" for="mf-state">State *</label>
      <input class="modal-input" id="mf-state" type="text" value="${saved.state ? saved.state.replace(/"/g, '&quot;') : ''}" placeholder="e.g. Uttar Pradesh">
      <label class="modal-label" for="mf-mobile">Mobile Number (optional)</label>
      <input class="modal-input" id="mf-mobile" type="tel" inputmode="numeric" maxlength="10" value="${saved.mobile ? saved.mobile.replace(/"/g, '&quot;') : ''}" placeholder="10-digit number">
      <div class="modal-error" id="mf-error"></div>
      <div class="modal-actions">
        <button class="btn btn-outline" id="mf-cancel" type="button">Cancel</button>
        <button class="btn" id="mf-submit" type="button">Continue to Notes</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById('mf-name').focus();

  const close = () => overlay.remove();
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.getElementById('mf-cancel').addEventListener('click', close);

  document.getElementById('mf-submit').addEventListener('click', () => {
    const name = document.getElementById('mf-name').value.trim();
    const state = document.getElementById('mf-state').value.trim();
    const mobile = document.getElementById('mf-mobile').value.trim();
    const errorEl = document.getElementById('mf-error');

    if (!name || !state) {
      errorEl.textContent = 'Please enter your name and state to continue.';
      return;
    }

    if (mobile && !/^\d{10}$/.test(mobile)) {
      errorEl.textContent = 'Mobile number must be exactly 10 digits.';
      return;
    }

    localStorage.setItem(VISITOR_KEY, JSON.stringify({ name, state, mobile }));
    logNotesAccess(name, state, mobile);
    close();
    window.open(link, '_blank', 'noopener');
  });
}

function logNotesAccess(name, state, mobile) {
  if (NOTES_FORM_CONFIG.actionUrl.includes('FORM_ID')) return; // not configured yet
  const body = new FormData();
  body.append(NOTES_FORM_CONFIG.nameField, name);
  body.append(NOTES_FORM_CONFIG.stateField, state);
  if (mobile) body.append(NOTES_FORM_CONFIG.mobileField, mobile);
  fetch(NOTES_FORM_CONFIG.actionUrl, { method: 'POST', mode: 'no-cors', body }).catch(() => {});
}

renderResult();
