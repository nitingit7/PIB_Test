/* Daily GA Practice — instructions page (instructions.html) */

const app = document.getElementById('app');
const dateKey = getDateParam();
const test = dateKey && window.MOCK_TESTS ? window.MOCK_TESTS[dateKey] : null;

if (!test) {
  location.href = 'index.html';
}

function renderInstructions() {
  const totalMarks = test.questions.length * MARK_CORRECT;
  const durationMin = totalTimeSeconds(test.questions.length) / 60;

  app.innerHTML = `
    <div class="masthead">
      <a class="brand-link" href="index.html">
        <div class="brand">Practice<span>King</span></div>
        <div class="brand-slogan">Daily Current Affairs</div>
      </a>
      <div class="tagline">Instructions · ${test.label}</div>
    </div>
    <div class="wrap">
      <div class="scorecard">
        <div class="headline serif">${test.label} — General Awareness</div>
        <div class="sub">Read the test structure below before you begin.</div>

        <div class="stat-grid">
          <div class="stat"><div class="num">${test.questions.length}</div><div class="lbl">Questions</div></div>
          <div class="stat"><div class="num">${totalMarks}</div><div class="lbl">Total Marks</div></div>
          <div class="stat"><div class="num">${durationMin}</div><div class="lbl">Minutes</div></div>
          <div class="stat wrong"><div class="num">−${MARK_NEGATIVE}</div><div class="lbl">Per Wrong Answer</div></div>
        </div>

        <div class="instructions-list">
          <div class="instructions-title">Instructions</div>
          <ul>
            <li>Each correct answer awards <strong>+${MARK_CORRECT} mark</strong>. Each wrong answer deducts <strong>${MARK_NEGATIVE} mark</strong>. Unanswered questions score <strong>0</strong>.</li>
            <li>The test is timed at <strong>${durationMin} minutes</strong> and will <strong>auto-submit</strong> when time runs out.</li>
            <li>Use the <strong>Question Palette</strong> (or the ☰ button on mobile) to jump to any question, answered or not, at any time before submitting.</li>
            <li>You can <strong>Mark for Review</strong> questions you're unsure about and revisit them later.</li>
            <li>Use <strong>Clear Response</strong> to unselect an answer you've already chosen.</li>
            <li>Once submitted, answers cannot be changed. You can review the correct answers and explanations afterward.</li>
            <li>You may exit anytime using <strong>Cancel / Exit Test</strong>, but your progress for that attempt will not be saved.</li>
          </ul>
        </div>

        <div class="top-actions">
          <a class="btn" href="test.html?date=${encodeURIComponent(dateKey)}">Start Test</a>
          <a class="btn btn-outline" href="index.html">Back to Test List</a>
        </div>
      </div>
    </div>
  `;
}

renderInstructions();
