/*
  Daily GA Practice — Question Bank
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
  },
  "2026-07-02": {
    "label": "2 July 2026",
    "source": "PIB",
    "questions": [
      {
        "q": "Which flagship higher education funding scheme's implementation in West Bengal was recently reviewed in New Delhi by Union Minister Dharmendra Pradhan?",
        "options": [
          "PM-USHA (Pradhan Mantri Uchchatar Shiksha Abhiyan)",
          "RUSA (Rashtriya Uchchatar Shiksha Abhiyan)",
          "Sarva Shiksha Abhiyan",
          "PM SHRI Yojana"
        ],
        "answer": 0,
        "explanation": "PM-USHA (Pradhan Mantri Uchchatar Shiksha Abhiyan), the Ministry of Education's flagship higher education funding scheme, was reviewed for West Bengal by Union Minister Dharmendra Pradhan."
      },
      {
        "q": "Under the Ministry of Education's digital and adult literacy initiatives, what does the acronym 'ULLAS' stand for?",
        "options": [
          "United Literacy and Lifelong Learning for All Society",
          "Understanding Lifelong Learning for All in Society",
          "Understanding of Lifelong Learning and Adult Studies",
          "Universal Learning for Life and Adult Skills"
        ],
        "answer": 1,
        "explanation": "ULLAS stands for Understanding Lifelong Learning for All in Society, the Ministry of Education's adult literacy scheme."
      },
      {
        "q": "Who is the current Secretary of the Departments of Higher Education and School Education and Literacy who recently attended the bilateral educational review meeting with West Bengal's ministers?",
        "options": [
          "Smt. Anita Karwal",
          "Dr. Vineet Joshi",
          "Shri K. Sanjay Murthy",
          "Shri Rajesh Kumar Chaturvedi"
        ],
        "answer": 1,
        "explanation": "Dr. Vineet Joshi, Secretary of Higher Education and School Education and Literacy, attended the review meeting on West Bengal's education initiatives."
      },
      {
        "q": "It was recently decided to expand the network of PM SHRI Schools to which specific administrative regions in West Bengal?",
        "options": [
          "Tribal blocks and rural panchayats",
          "Minority-concentrated districts",
          "Aspirational districts only",
          "Uncovered blocks and urban local bodies"
        ],
        "answer": 3,
        "explanation": "The PM SHRI network in West Bengal is being expanded to cover blocks and urban local bodies that were not yet included."
      },
      {
        "q": "India's first Private Point-in-Space (PinS) Instrument Approach Procedure for helicopter operations has been approved for which of the following heliports?",
        "options": [
          "Jaisalmer Heliport, Rajasthan",
          "Undavalli Heliport, Andhra Pradesh",
          "Shirdi Heliport, Maharashtra",
          "Nashik Heliport, Maharashtra"
        ],
        "answer": 1,
        "explanation": "Undavalli Heliport in Andhra Pradesh became the first private heliport to get a PinS Instrument Approach Procedure."
      },
      {
        "q": "Who is the current Union Minister for Civil Aviation who has been closely monitoring the implementation of the PinS procedure and the GAGAN satellite-based system?",
        "options": [
          "Shri Ram Mohan Naidu",
          "Shri Jyotiraditya Scindia",
          "Shri Hardeep Singh Puri",
          "Shri Ashwini Vaishnaw"
        ],
        "answer": 0,
        "explanation": "Union Minister for Civil Aviation Ram Mohan Naidu has been monitoring the rollout of PinS procedures and the GAGAN system."
      },
      {
        "q": "In civil aviation terminology, what does the acronym 'PinS' stand for?",
        "options": [
          "Point-in-Sector",
          "Point-in-Space",
          "Precision-in-Space",
          "Path-in-Sky"
        ],
        "answer": 1,
        "explanation": "PinS stands for Point-in-Space, a type of satellite-based instrument approach procedure used mainly for helicopter operations."
      },
      {
        "q": "Pandit Rupak Kulkarni, who was recently in the news for his recital at the inauguration of Akashvani's 'Swar Prerna Veethika', is an acclaimed exponent of which Hindustani classical music school (Gharana)?",
        "options": [
          "Patiala Gharana",
          "Maihar Gharana",
          "Gwalior Gharana",
          "Kirana Gharana"
        ],
        "answer": 1,
        "explanation": "Pandit Rupak Kulkarni, a noted bansuri (flute) player, belongs to the Maihar Gharana."
      },
      {
        "q": "'Raagam' and 'Aaradhana' are dedicated round-the-clock digital channels of Akashvani. Which of the following streams is broadcasted on the 'Raagam' channel?",
        "options": [
          "Bollywood Film Music",
          "Hindustani Classical Music",
          "Devotional Music",
          "Carnatic Classical Music"
        ],
        "answer": 1,
        "explanation": "Akashvani's 'Raagam' channel is dedicated to Hindustani Classical Music, while 'Aaradhana' focuses on devotional content."
      },
      {
        "q": "In July 2026, which legendary Padma Vibhushan recipient inaugurated the 'Swar Prerna Veethika' photo gallery at the Akashvani Rang Bhavan Auditorium in New Delhi?",
        "options": [
          "Ustad Amjad Ali Khan",
          "Pt. Vishwa Mohan Bhatt",
          "Pt. Hariprasad Chaurasia",
          "Pt. Ajoy Chakrabarty"
        ],
        "answer": 2,
        "explanation": "Flute maestro Pt. Hariprasad Chaurasia, a Padma Vibhushan recipient, inaugurated the 'Swar Prerna Veethika' photo gallery."
      },
      {
        "q": "Organized radio broadcasting in India will complete its centenary (100 years) in which of the following upcoming years?",
        "options": [
          "2026",
          "2027",
          "2025",
          "2028"
        ],
        "answer": 1,
        "explanation": "Organized radio broadcasting in India began in 1927, so it completes 100 years in 2027."
      },
      {
        "q": "Which regulatory body recently approved the acquisition of 100% shareholding of Royal Challengers Sports Private Limited by a business consortium?",
        "options": [
          "Competition Commission of India (CCI)",
          "Reserve Bank of India (RBI)",
          "Securities and Exchange Board of India (SEBI)",
          "Board of Control for Cricket in India (BCCI)"
        ],
        "answer": 0,
        "explanation": "The Competition Commission of India (CCI) approved the 100% shareholding acquisition of Royal Challengers Sports Private Limited."
      },
      {
        "q": "The Competition Commission of India (CCI), is a statutory body functioning under which Union Ministry?",
        "options": [
          "Ministry of Corporate Affairs",
          "Ministry of Law and Justice",
          "Ministry of Finance",
          "Ministry of Commerce and Industry"
        ],
        "answer": 0,
        "explanation": "CCI functions as a statutory body under the Ministry of Corporate Affairs."
      },
      {
        "q": "The Competition Commission of India (CCI) was established to replace the Monopolies and Restrictive Trade Practices Commission (MRTPC) under which legislative Act?",
        "options": [
          "The Companies Act, 2013",
          "The MRTP Act, 1969",
          "The Competition Act, 2002",
          "The SEBI Act, 1992"
        ],
        "answer": 2,
        "explanation": "CCI was established under the Competition Act, 2002, replacing the earlier MRTPC."
      },
      {
        "q": "Who recently assumed charge as the Chairman and Managing Director (CMD) of the public sector enterprise Hindustan Copper Limited (HCL) in July 2026?",
        "options": [
          "Shri Sandeep Kumar",
          "Shri Rajesh Sharma",
          "Shri Anupam Misra",
          "Shri Arun Kumar Singh"
        ],
        "answer": 2,
        "explanation": "Shri Anupam Misra assumed charge as CMD of Hindustan Copper Limited in July 2026."
      },
      {
        "q": "Prior to taking over as the CMD of Hindustan Copper Limited, Shri Anupam Misra served as the Director (Marketing) and additional CMD of which of the following companies?",
        "options": [
          "National Fertilizers Limited (NFL)",
          "Rashtriya Chemicals and Fertilizers (RCF)",
          "Madras Fertilizers Limited (MFL)",
          "Fertilisers and Chemicals Travancore Limited (FACT)"
        ],
        "answer": 3,
        "explanation": "Before HCL, Shri Anupam Misra served as Director (Marketing) and additional CMD of FACT."
      },
      {
        "q": "Hindustan Copper Limited (HCL), which recently appointed a new CMD, is a public sector company functioning under the administrative control of which Union Ministry?",
        "options": [
          "Ministry of Steel",
          "Ministry of Coal",
          "Ministry of Heavy Industries",
          "Ministry of Mines"
        ],
        "answer": 3,
        "explanation": "Hindustan Copper Limited functions under the administrative control of the Ministry of Mines."
      },
      {
        "q": "According to the latest UNCTAD estimates, what is India's current global market share in worldwide ship recycling as of 2025?",
        "options": [
          "30.1% (up from 25.6% in 2024)",
          "25.6% (up from 20.1% in 2024)",
          "35.4% (up from 30.1% in 2024)",
          "40.2% (up from 35.4% in 2024)"
        ],
        "answer": 2,
        "explanation": "UNCTAD estimates place India's global ship recycling market share at 35.4% in 2025, up from 30.1% in 2024."
      },
      {
        "q": "The Government of India has announced a financial commitment of how many billion dollars to strengthen the shipbuilding and ship recycling sectors over the next decade?",
        "options": [
          "USD 5 Billion",
          "USD 10 Billion",
          "USD 12 Billion",
          "USD 8 Billion"
        ],
        "answer": 3,
        "explanation": "The Government of India committed USD 8 billion to strengthen shipbuilding and ship recycling over the next decade."
      },
      {
        "q": "How many Indian ship recycling facilities have successfully completed compliance procedures and become eligible to apply for inclusion under the EU Ship Recycling Regulation (EUSRR) framework?",
        "options": [
          "Three",
          "Five",
          "Two",
          "Seven"
        ],
        "answer": 0,
        "explanation": "Three Indian ship recycling facilities have completed compliance procedures under the EUSRR framework."
      },
      {
        "q": "The latest estimates on India's ship recycling growth were published by UNCTAD. Where is the headquarters of UNCTAD located?",
        "options": [
          "Vienna, Austria",
          "The Hague, Netherlands",
          "New York, USA",
          "Geneva, Switzerland"
        ],
        "answer": 3,
        "explanation": "UNCTAD (United Nations Conference on Trade and Development) is headquartered in Geneva, Switzerland."
      }
    ]
  }
};
