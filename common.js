/* Daily GA Practice — shared helpers (loaded on every page) */

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

// Total test time: 3/5 of a minute per question, rounded to the nearest minute.
// e.g. 17 questions -> round(17 * 3/5) = round(10.2) = 10 minutes.
function totalTimeSeconds(numQuestions) {
  const minutes = Math.round(numQuestions * 3 / 5);
  return minutes * 60;
}

function getDateParam() {
  return new URLSearchParams(location.search).get('date');
}
