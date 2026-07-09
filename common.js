/* Daily GA Practice — shared helpers (loaded on every page) */

const MARK_CORRECT  = 1;
const MARK_NEGATIVE = 0.5; // deducted per wrong attempt
const STORAGE_KEY   = 'ga_practice_attempts';
const THEME_KEY     = 'ga_practice_theme';
const VISITOR_KEY   = 'ga_visitor_info';

/* ============================================================
   STORE HELPERS
   ============================================================ */

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

function statusOf(q, userAns) {
  if (userAns === null || userAns === undefined) return 'skipped';
  return userAns === q.answer ? 'correct' : 'wrong';
}

// Total test time: 3/5 of a minute per question, rounded to the nearest minute.
function totalTimeSeconds(numQuestions) {
  const minutes = Math.round(numQuestions * 3 / 5);
  return minutes * 60;
}

function getDateParam() {
  return new URLSearchParams(location.search).get('date');
}

/* ============================================================
   QUESTION TEXT FORMATTER
   Converts \n to <br> so statement-based questions display
   each statement on its own line. Add \n in data.js before
   each statement line to activate this formatting.
   ============================================================ */

function formatQuestionText(text) {
  if (!text) return text;
  if (!text.includes('\n')) return text;
  // Split on newlines, trim each, render non-empty lines
  return text.split('\n').map(line => line.trim()).filter(Boolean).join('<br>');
}

/* ============================================================
   THEME MANAGEMENT
   ============================================================ */

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'light';
}

function toggleTheme() {
  const current = getTheme();
  applyTheme(current === 'dark' ? 'light' : 'dark');
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = getTheme() === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('title', getTheme() === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

// Apply saved theme immediately on every page load
(function () { applyTheme(getTheme()); })();

function themeToggleBtnHtml() {
  const isDark = getTheme() === 'dark';
  return `<button class="theme-toggle" id="themeToggle" title="${isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}">${isDark ? '☀️' : '🌙'}</button>`;
}

function bindThemeToggle() {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

/* ============================================================
   NOTES ACCESS GATE MODAL
   First visit: collects Name, State, Mobile then opens link.
   Return visit: opens link directly (info already in localStorage).
   ============================================================ */

// Google Doc IDs that require the lead-capture gate before opening.
// Add more IDs here as new gated notes are published.
const GATED_DOC_IDS = [
  '1yCqtdRgGr7gAK0ORmPskoO_nQGuGuEw0WvTxdWp0_cA'  // Week 2 (6–12 July 2026)
];

const INDIAN_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh',
  'Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
  'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram',
  'Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu',
  'Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Andaman & Nicobar Islands','Chandigarh',
  'Dadra & Nagar Haveli and Daman & Diu','Delhi (NCT)',
  'Jammu & Kashmir','Ladakh','Lakshadweep','Puducherry'
];

function _isGatedUrl(url) {
  if (!url) return false;
  return GATED_DOC_IDS.some(id => url.includes(id));
}

function openNotesWithGate(url) {
  // Non-gated notes (e.g. first-week / older docs) open directly
  if (!_isGatedUrl(url)) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }
  // Gated notes: skip form if visitor already registered
  const existing = localStorage.getItem(VISITOR_KEY);
  if (existing) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }
  _showNotesGateModal(url);
}

function _showNotesGateModal(url) {
  // Remove any stale overlay
  const old = document.getElementById('notes-gate-overlay');
  if (old) old.remove();

  const stateOptions = INDIAN_STATES.map(s =>
    `<option value="${s}">${s}</option>`
  ).join('');

  const overlay = document.createElement('div');
  overlay.id = 'notes-gate-overlay';
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <div class="modal-title">Access Study Notes</div>
        <div class="modal-sub">Please share a few details to unlock the notes</div>
      </div>
      <div class="modal-body">
        <div class="modal-field">
          <label class="modal-label" for="gateNameInput">
            Full Name <span class="modal-required">*</span>
          </label>
          <input
            id="gateNameInput"
            class="modal-input"
            type="text"
            placeholder="Enter your full name"
            maxlength="80"
            autocomplete="name"
          >
        </div>
        <div class="modal-field">
          <label class="modal-label" for="gateStateInput">
            State / UT <span class="modal-required">*</span>
          </label>
          <select id="gateStateInput" class="modal-input modal-select">
            <option value="">— Select your state —</option>
            ${stateOptions}
          </select>
        </div>
        <div class="modal-field">
          <label class="modal-label" for="gateMobileInput">
            Mobile Number
            <span class="modal-optional">(optional)</span>
          </label>
          <input
            id="gateMobileInput"
            class="modal-input"
            type="tel"
            placeholder="10-digit mobile number"
            maxlength="10"
            inputmode="numeric"
            pattern="[0-9]*"
          >
        </div>
        <div id="gateError" class="modal-error" hidden></div>
      </div>
      <div class="modal-footer">
        <button id="gateCancelBtn" class="btn btn-ghost" type="button">Cancel</button>
        <button id="gateSubmitBtn" class="btn" type="button">Open Notes</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  // Animate in
  requestAnimationFrame(() => overlay.classList.add('modal-visible'));

  const nameInput   = document.getElementById('gateNameInput');
  const stateInput  = document.getElementById('gateStateInput');
  const mobileInput = document.getElementById('gateMobileInput');
  const errorDiv    = document.getElementById('gateError');

  function showError(msg) {
    errorDiv.textContent = msg;
    errorDiv.hidden = false;
  }
  function clearError() { errorDiv.hidden = true; }

  function closeGate() {
    overlay.classList.remove('modal-visible');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 220);
  }

  document.getElementById('gateCancelBtn').addEventListener('click', closeGate);

  // Close on backdrop click
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeGate();
  });

  // Escape key
  function onEsc(e) {
    if (e.key === 'Escape') { closeGate(); document.removeEventListener('keydown', onEsc); }
  }
  document.addEventListener('keydown', onEsc);

  document.getElementById('gateSubmitBtn').addEventListener('click', () => {
    clearError();
    const name   = nameInput.value.trim();
    const state  = stateInput.value;
    const mobile = mobileInput.value.trim();

    if (!name) {
      showError('Please enter your name.');
      nameInput.focus();
      return;
    }
    if (!state) {
      showError('Please select your state / UT.');
      stateInput.focus();
      return;
    }
    if (mobile && !/^\d{10}$/.test(mobile)) {
      showError('Mobile number must be exactly 10 digits.');
      mobileInput.focus();
      return;
    }

    const info = {
      name,
      state,
      mobile: mobile || null,
      ts: new Date().toISOString()
    };
    localStorage.setItem(VISITOR_KEY, JSON.stringify(info));
    closeGate();
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  // Auto-focus first field
  setTimeout(() => nameInput.focus(), 80);
}

/* ============================================================
   END-OF-TEST MODAL
   Shown when user clicks Save & Next on the last question.
   ============================================================ */

function showEndOfTestModal(onSubmit, onReview) {
  const old = document.getElementById('end-test-overlay');
  if (old) old.remove();

  const overlay = document.createElement('div');
  overlay.id = 'end-test-overlay';
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="modal-box modal-box--narrow">
      <div class="modal-eot-icon">&#10003;</div>
      <div class="modal-header modal-header--center">
        <div class="modal-title">Last Question Reached</div>
        <div class="modal-sub">
          You have answered or skipped all questions.<br>
          What would you like to do next?
        </div>
      </div>
      <div class="modal-footer modal-footer--col">
        <button id="eotSubmitBtn" class="instr-begin-btn" type="button">Submit Test</button>
        <button id="eotReviewBtn" class="btn btn-ghost" type="button">Review Answers</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => overlay.classList.add('modal-visible'));

  function closeEot() {
    overlay.classList.remove('modal-visible');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 220);
  }

  document.getElementById('eotSubmitBtn').addEventListener('click', () => {
    closeEot();
    onSubmit();
  });
  document.getElementById('eotReviewBtn').addEventListener('click', () => {
    closeEot();
    if (onReview) onReview();
  });

  // Escape closes and stays on last question
  function onEsc(e) {
    if (e.key === 'Escape') {
      closeEot();
      if (onReview) onReview();
      document.removeEventListener('keydown', onEsc);
    }
  }
  document.addEventListener('keydown', onEsc);
}
