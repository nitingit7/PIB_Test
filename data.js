/*
  GA ARENA — Question Bank
  =========================
  Add one entry per date. Key = "YYYY-MM-DD" (this also controls sort order,
  newest first, on the home screen).

  Each question:
    q            - question text
    options      - exactly 4 strings
    answer       - index (0-3) of the correct option
    explanation  - optional, one line, shown on the review screen

  HOW TO ADD A NEW DAY:
  Just paste your raw PIB questions + correct answers to Claude in chat and
  ask it to add them here — Claude will write the 3 close distractor options
  for each question in SSC style and append a new dated block below.
*/

window.MOCK_TESTS = {
  "2026-06-30": {
    label: "30 June 2026",
    source: "PIB",
    questions: [
      {
        q: "The 'PM SHRI' scheme, aimed at upgrading government schools as model institutions, is implemented under the aegis of which ministry?",
        options: [
          "Ministry of Education",
          "Ministry of Skill Development and Entrepreneurship",
          "Ministry of Women and Child Development",
          "Ministry of Social Justice and Empowerment"
        ],
        answer: 0,
        explanation: "PM SHRI (PM Schools for Rising India) is run by the Ministry of Education to upgrade over 14,500 schools as exemplar institutions."
      },
      {
        q: "Which institute recently developed 'Kavach', an indigenous train collision avoidance system mentioned frequently in PIB railway safety releases?",
        options: [
          "Research Designs and Standards Organisation (RDSO)",
          "Indian Institute of Technology, Kanpur",
          "Centre for Railway Information Systems (CRIS)",
          "Bharat Electronics Limited (BEL)"
        ],
        answer: 0,
        explanation: "Kavach was developed by RDSO along with three Indian vendors under the Ministry of Railways."
      },
      {
        q: "The 'Ayushman Bhav' campaign, aimed at saturating health scheme coverage in every village and town, was launched by which ministry?",
        options: [
          "Ministry of Health and Family Welfare",
          "Ministry of Rural Development",
          "Ministry of Panchayati Raj",
          "Ministry of AYUSH"
        ],
        answer: 0,
        explanation: "Ayushman Bhav is a Ministry of Health and Family Welfare campaign to ensure health scheme saturation at the grassroots."
      },
      {
        q: "India's first 'Green Hydrogen Hub' under the National Green Hydrogen Mission is being developed at which location?",
        options: [
          "Kandla, Gujarat",
          "Vishakhapatnam, Andhra Pradesh",
          "Paradip, Odisha",
          "Tuticorin, Tamil Nadu"
        ],
        answer: 0,
        explanation: "Kandla in Gujarat has been identified as India's first Green Hydrogen Hub under the National Green Hydrogen Mission."
      },
      {
        q: "The 'Vibrant Villages Programme', focused on developing border villages, primarily covers villages along which border?",
        options: [
          "India-China border",
          "India-Pakistan border",
          "India-Bangladesh border",
          "India-Myanmar border"
        ],
        answer: 0,
        explanation: "The Vibrant Villages Programme covers villages along the northern border (India-China) across states like Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh and Ladakh."
      }
    ]
  }
};
