/*
  GA ARENA — Question Bank
  =========================
  Add one entry per date. Key = "YYYY-MM-DD" (this also controls sort order,
  newest first, on the home screen).

  Each question:
    q            - question text
    options      - exactly 4 strings (order does not matter, just point 'answer' correctly)
    answer       - index (0-3) of the correct option
    explanation  - optional, one line, shown on the review screen

  Each dated test can also have:
    resourceLink - optional URL (e.g. a Google Doc) shown as a 'Revise' link
                   on the result screen after the test is submitted.

  HOW TO ADD A NEW DAY:
  Just paste your raw PIB questions + correct answers to Claude in chat and
  ask it to add them here — Claude will write the 3 close distractor options
  for each question in SSC style, shuffle option order, and append a new
  dated block below.
*/

window.MOCK_TESTS = {
  "2026-07-01": {
    "label": "1 July 2026",
    "source": "PIB",
    "resourceLink": "https://docs.google.com/document/d/1WNMPjHZkCwriy7iN8nrSTXs-K-PeuXwNKgnHlsdIAPI/edit?usp=sharing",
    "questions": [
      {
        "q": "According to the recent data released by the Zoological Survey of India (ZSI) for 2025, which Indian state recorded the highest number of newly discovered fauna (animal) species?",
        "options": [
          "Kerala",
          "Karnataka",
          "Tamil Nadu",
          "Odisha"
        ],
        "answer": 0,
        "explanation": "ZSI's 2025 discoveries data placed Kerala at the top among states for newly discovered animal species."
      },
      {
        "q": "Recently, Myotis himalaicus was discovered in India and added to the fauna database. What type of animal is it?",
        "options": [
          "A bat (Himalayan bat)",
          "A gecko",
          "A rodent (vole)",
          "A shrew"
        ],
        "answer": 0,
        "explanation": "Myotis himalaicus is a newly recorded species of Himalayan bat."
      },
      {
        "q": "The details of new plant discoveries titled 'Plant Discoveries, 2025' were recently released by the Botanical Survey of India (BSI). Which state emerged as the leading contributor to new plant discoveries?",
        "options": [
          "Arunachal Pradesh",
          "Kerala",
          "Tamil Nadu",
          "Sikkim"
        ],
        "answer": 0,
        "explanation": "Arunachal Pradesh led all states in new plant discoveries as per BSI's 'Plant Discoveries, 2025' report."
      },
      {
        "q": "Which Union Minister recently visited Athens and witnessed the live demonstration of UPI services launching in Greece?",
        "options": [
          "Dr. S. Jaishankar, Minister of External Affairs",
          "Shri Piyush Goyal, Minister of Commerce and Industry",
          "Smt. Nirmala Sitharaman, Minister of Finance",
          "Shri Ashwini Vaishnaw, Minister of Railways and IT"
        ],
        "answer": 1,
        "explanation": "Union Minister Piyush Goyal witnessed the UPI live demonstration during his visit to Athens, Greece."
      },
      {
        "q": "During the recent high-level Indian delegation visit to Greece, the India-Greece Business Council Meeting was hosted by ACCI. What does ACCI stand for?",
        "options": [
          "Athens Council of Commerce and Investment",
          "Association of Chambers of Commerce and Industry",
          "Athens Chamber of Commerce and Industry",
          "Athens Confederation of Commerce and Industry"
        ],
        "answer": 2,
        "explanation": "ACCI refers to the Athens Chamber of Commerce and Industry, which hosted the India-Greece Business Council Meeting."
      },
      {
        "q": "Which organization recently collaborated with the Ministry of Tourism to launch the report titled 'Unlocking Growth in Tourism and Hospitality Sector'?",
        "options": [
          "Confederation of Indian Industry (CII)",
          "World Travel & Tourism Council (WTTC)",
          "NITI Aayog",
          "FICCI"
        ],
        "answer": 2,
        "explanation": "NITI Aayog partnered with the Ministry of Tourism to launch the report on unlocking growth in tourism and hospitality."
      },
      {
        "q": "Who is the current Union Minister for Tourism and Culture who recently launched the roadmap for tourism-led economic growth in New Delhi?",
        "options": [
          "Shri Piyush Goyal",
          "Shri G. Kishan Reddy",
          "Shri Gajendra Singh Shekhawat",
          "Shri Jyotiraditya Scindia"
        ],
        "answer": 2,
        "explanation": "Union Minister for Tourism and Culture, Gajendra Singh Shekhawat, launched the roadmap in New Delhi."
      },
      {
        "q": "The recent report by the Ministry of Tourism on unlocking growth in the hospitality sector aligns with which major long-term vision of the Government of India?",
        "options": [
          "Make in India",
          "Viksit Bharat 2047",
          "Atmanirbhar Bharat",
          "Digital India"
        ],
        "answer": 1,
        "explanation": "The tourism growth roadmap is positioned as a contributor to the Viksit Bharat 2047 vision."
      },
      {
        "q": "Which group of Indian Naval Ships recently visited Sattahip, Thailand to strengthen bilateral maritime ties as part of the Eastern Fleet deployment?",
        "options": [
          "INS Kavaratti, INS Kiltan, and INS Jyoti",
          "INS Udaygiri, INS Kavaratti, and INS Shakti",
          "INS Sahyadri, INS Kolkata, and INS Shakti",
          "INS Delhi, INS Trikand, and INS Deepak"
        ],
        "answer": 1,
        "explanation": "INS Udaygiri, INS Kavaratti, and INS Shakti made the recent port call at Sattahip, Thailand under the Eastern Fleet deployment."
      },
      {
        "q": "The recent deployment of Indian naval ships to South East Asia advances the vision of MAHASAGAR. What does the 'M' stand for in MAHASAGAR?",
        "options": [
          "Maritime",
          "Multilateral",
          "Modern",
          "Mutual (Mutual and Holistic Advancement for Security and Growth Across Regions)"
        ],
        "answer": 3,
        "explanation": "MAHASAGAR stands for Mutual and Holistic Advancement for Security and Growth Across Regions."
      },
      {
        "q": "Who was the Flag Officer Commanding the Eastern Fleet during the recent port call of Indian Navy ships in Thailand?",
        "options": [
          "RAdm Alok Ananda",
          "RAdm Sanjay Bhalla",
          "RAdm Vineet Chopra",
          "RAdm Rajesh Dhankhar"
        ],
        "answer": 0,
        "explanation": "RAdm Alok Ananda was the Flag Officer Commanding the Eastern Fleet during the port call in Thailand."
      },
      {
        "q": "Under the newly notified VB-G RAM G Act, 2025, what is the new interim base wage rate below which no rural worker will be paid?",
        "options": [
          "₹400 per day",
          "₹250 per day",
          "₹350 per day",
          "₹300 per day"
        ],
        "answer": 3,
        "explanation": "The VB-G RAM G Act, 2025 sets an interim base wage floor of ₹300 per day for rural workers."
      },
      {
        "q": "The VB-G RAM G Act, 2025, which replaces the older wage structures of MGNREGA, guarantees how many days of wage employment to eligible rural households?",
        "options": [
          "100 days",
          "150 days",
          "125 days",
          "90 days"
        ],
        "answer": 2,
        "explanation": "The Act raises the guarantee from MGNREGA's earlier 100 days to 125 days of wage employment per household."
      },
      {
        "q": "According to the June 2026 Ministry of Rural Development notification, which Indian state/region has the highest notified rural wage rate at ₹450 per day?",
        "options": [
          "Arunachal Pradesh",
          "Ladakh",
          "Sikkim (High Altitude Gram Panchayats)",
          "Himachal Pradesh"
        ],
        "answer": 2,
        "explanation": "Sikkim's High Altitude Gram Panchayats were notified with the highest rural wage rate of ₹450 per day."
      },
      {
        "q": "In June 2026, the ESIC extended the Atal Beemit Vyakti Kalyan Yojana (ABVKY) for one more year. This scheme primarily provides what kind of benefit to insured persons?",
        "options": [
          "Medical insurance cover",
          "Unemployment allowance",
          "Pension benefit",
          "Maternity benefit"
        ],
        "answer": 1,
        "explanation": "ABVKY provides an unemployment allowance to insured persons under ESIC, and was extended by one more year in June 2026."
      },
      {
        "q": "Under the chairmanship of Union Minister Dr. Mansukh Mandaviya, the ESIC recently approved the setting up of a new ESIC Medical College in which city?",
        "options": [
          "Dehradun, Uttarakhand",
          "Haridwar, Uttarakhand",
          "Roorkee, Uttarakhand",
          "Rishikesh, Uttarakhand"
        ],
        "answer": 1,
        "explanation": "The ESIC board approved a new ESIC Medical College at Haridwar, Uttarakhand."
      },
      {
        "q": "To address lifestyle and occupational health challenges through holistic care, the ESIC recently approved a Memorandum of Understanding (MoU) with which Union Ministry?",
        "options": [
          "Ministry of Skill Development and Entrepreneurship",
          "Ministry of Social Justice and Empowerment",
          "Ministry of Ayush",
          "Ministry of Health and Family Welfare"
        ],
        "answer": 2,
        "explanation": "ESIC signed an MoU with the Ministry of Ayush to bring holistic, lifestyle-focused care to insured persons."
      }
    ]
  }
};
