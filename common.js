/* Daily GA Practice — shared helpers (loaded on every page) */

const SEC_PER_Q = 45;      // exam time budget per question
const MARK_CORRECT = 1;
const MARK_NEGATIVE = 0.5; // deducted per wrong attempt
const STORAGE_KEY = 'ga_practice_attempts';

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

function getDateParam() {
  return new URLSearchParams(location.search).get('date');
}
