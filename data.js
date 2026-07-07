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
    ],
    "resourceLink": "https://docs.google.com/document/d/1WNMPjHZkCwriy7iN8nrSTXs-K-PeuXwNKgnHlsdIAPI/edit?usp=sharing"
  },
  "2026-07-03": {
    "label": "3 July 2026",
    "source": "PIB",
    "resourceLink": "https://docs.google.com/document/d/1WNMPjHZkCwriy7iN8nrSTXs-K-PeuXwNKgnHlsdIAPI/edit?usp=sharing",
    "questions": [
      {
        "q": "Under the newly signed Memorandum of Cooperation for the India-Japan Cooperative Biogas for Growth (CBG) Initiative, what is the target number of biogas and organic fertilizer plants proposed to be established across India?",
        "options": [
          "500 plants",
          "1,000 plants",
          "2,000 plants",
          "1,500 plants"
        ],
        "answer": 1,
        "explanation": "The India-Japan CBG Initiative targets setting up 1,000 biogas and organic fertilizer plants across India."
      },
      {
        "q": "The year 2027 will mark the 75th anniversary of the establishment of India-Japan diplomatic relations. What is the official name of the commemorative year designated for this milestone?",
        "options": [
          "India-Japan Golden Jubilee Year",
          "India-Japan Special Strategic and Global Partnership Year",
          "India-Japan Year of Shared Horizons",
          "India-Japan Year of Strategic Partnership"
        ],
        "answer": 2,
        "explanation": "2027 has been designated the 'India-Japan Year of Shared Horizons' to mark 75 years of diplomatic relations."
      },
      {
        "q": "The Next Generation Mobility Partnership (NGMP), which was operationalized at the 16th Annual Summit, was originally announced at the 15th Annual Summit in which month and year?",
        "options": [
          "December 2024",
          "August 2025",
          "March 2025",
          "May 2025"
        ],
        "answer": 1,
        "explanation": "NGMP was first announced at the 15th India-Japan Annual Summit in August 2025."
      },
      {
        "q": "An exchange of letters occurred between Japan's Financial Services Agency (JFSA) and which Indian authority to regulate and develop FinTech and RegTech?",
        "options": [
          "Ministry of Finance",
          "International Financial Services Centres Authority (IFSCA)",
          "Reserve Bank of India (RBI)",
          "Securities and Exchange Board of India (SEBI)"
        ],
        "answer": 1,
        "explanation": "The exchange of letters for FinTech and RegTech cooperation was between Japan's JFSA and India's IFSCA."
      },
      {
        "q": "The National Green Hydrogen Mission (NGHM), which was in the news for major clean energy export deals, was approved by the Union Cabinet in January 2023 with what total financial outlay?",
        "options": [
          "₹19,744 crore",
          "₹15,000 crore",
          "₹17,490 crore",
          "₹21,000 crore"
        ],
        "answer": 0,
        "explanation": "The National Green Hydrogen Mission was approved with a total outlay of ₹19,744 crore in January 2023."
      },
      {
        "q": "Which Indian energy developer signed a landmark 10-year offtake deal to supply 100 kTPA of green methanol from its Paradip facility to Japan's Mitsubishi Gas Chemical Company?",
        "options": [
          "ACME Group",
          "ReNew Power",
          "Adani Green Energy",
          "Greenko Group"
        ],
        "answer": 0,
        "explanation": "ACME Group signed the 10-year green methanol offtake deal with Mitsubishi Gas Chemical Company from its Paradip facility."
      },
      {
        "q": "Under the National Green Hydrogen Mission, which organization is responsible for conducting transparent bidding for financial support under the SIGHT Programme?",
        "options": [
          "Indian Renewable Energy Development Agency (IREDA)",
          "Solar Energy Corporation of India (SECI)",
          "NHPC Limited",
          "NTPC Limited"
        ],
        "answer": 1,
        "explanation": "SECI conducts transparent bidding for incentives under the SIGHT Programme of the National Green Hydrogen Mission."
      },
      {
        "q": "Shri Pralhad Joshi, who recently welcomed Japan's CfD subsidy support for Indian clean energy projects, is the current Union Minister for which Ministry?",
        "options": [
          "Ministry of Power",
          "Ministry of Petroleum and Natural Gas",
          "Ministry of Coal",
          "Ministry of New & Renewable Energy"
        ],
        "answer": 3,
        "explanation": "Shri Pralhad Joshi is the Union Minister for New & Renewable Energy (also holding Consumer Affairs, Food and Public Distribution)."
      },
      {
        "q": "Which division under the Ministry of Electronics & IT recently launched the 'Rajasthan Language Model Training Hackathon' to strengthen AI datasets for local dialects?",
        "options": [
          "Digital India BHASHINI Division (DIBD)",
          "Centre for Development of Advanced Computing (C-DAC)",
          "National Informatics Centre (NIC)",
          "Digital India Corporation (DIC)"
        ],
        "answer": 0,
        "explanation": "The Digital India BHASHINI Division (DIBD) launched the Rajasthan Language Model Training Hackathon."
      },
      {
        "q": "What is the name of India's first handheld multilingual edge AI device showcased at the National Conference on e-Governance (NCeG) 2026?",
        "options": [
          "AI Vaani",
          "Suno Sutra",
          "Bhasha Mitra",
          "Bhasha Setu"
        ],
        "answer": 1,
        "explanation": "'Suno Sutra' was showcased as India's first handheld multilingual edge AI device at NCeG 2026."
      },
      {
        "q": "Under the National Hub for Language Technology (NHLT), BHASHINI enables scalable speech and text services. DIBD is a division functioning under which of the following organizations?",
        "options": [
          "Ministry of Electronics and IT (MeitY) directly",
          "Digital India Corporation (DIC)",
          "National Informatics Centre (NIC)",
          "Centre for Development of Advanced Computing (C-DAC)"
        ],
        "answer": 1,
        "explanation": "DIBD functions as a division under the Digital India Corporation (DIC)."
      },
      {
        "q": "What is the name of BHASHINI's national crowdsourcing initiative, where citizens contribute and validate regional language data and receive Digital Participation Certificates?",
        "options": [
          "BhashaMitra",
          "BhashaSangam",
          "BhashaSetu",
          "BhashaDaan"
        ],
        "answer": 3,
        "explanation": "BhashaDaan is BHASHINI's crowdsourcing initiative for citizen contribution and validation of regional language data."
      },
      {
        "q": "The newly launched 'Viksit Bharat – G-RAM G Yojana' has officially replaced which of the following landmark employment acts of India?",
        "options": [
          "National Rural Livelihood Mission (NRLM)",
          "MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act)",
          "Pradhan Mantri Awas Yojana - Gramin",
          "Pradhan Mantri Gram Sadak Yojana"
        ],
        "answer": 1,
        "explanation": "The VB-G RAM G Yojana officially replaces MGNREGA."
      },
      {
        "q": "What is the total financial outlay targeted by the Central Government under the VB-G RAM G Yojana over the next five years?",
        "options": [
          "₹10 lakh crore",
          "₹7.5 lakh crore",
          "₹6 lakh crore",
          "₹5 lakh crore"
        ],
        "answer": 1,
        "explanation": "The VB-G RAM G Yojana targets a total outlay of ₹7.5 lakh crore over the next five years."
      },
      {
        "q": "Under the newly launched VB-G RAM G Yojana, how many days of guaranteed employment will be provided to eligible rural households?",
        "options": [
          "150 days",
          "125 days",
          "90 days",
          "100 days"
        ],
        "answer": 1,
        "explanation": "The VB-G RAM G Yojana guarantees 125 days of wage employment to eligible rural households."
      },
      {
        "q": "From which village in Tirupati district, Andhra Pradesh, did Union Minister Shri Shivraj Singh Chouhan officially launch the nationwide VB-G RAM G Yojana in July 2026?",
        "options": [
          "Yerpedu",
          "Mukkavaripalli",
          "Renigunta",
          "Srikalahasti"
        ],
        "answer": 1,
        "explanation": "The VB-G RAM G Yojana was launched nationwide from Mukkavaripalli village in Tirupati district, Andhra Pradesh."
      },
      {
        "q": "If a local administration fails to provide work to a laborer within 15 days of demanding it under the VB-G RAM G Yojana, what is the legal consequence?",
        "options": [
          "The laborer must be transferred to another block",
          "The laborer must be doubled the wage compensation",
          "The laborer must be given an unemployment allowance",
          "A penalty must be imposed on the contractor"
        ],
        "answer": 2,
        "explanation": "Failure to provide work within 15 days of demand entitles the laborer to an unemployment allowance under the scheme."
      }
    ]
  },
  "2026-07-05": {
    "label": "4-5 July 2026",
    "source": "PIB",
    "resourceLink": "https://docs.google.com/document/d/1WNMPjHZkCwriy7iN8nrSTXs-K-PeuXwNKgnHlsdIAPI/edit?usp=sharing",
    "questions": [
      {
        "q": "Prime Minister Narendra Modi recently inaugurated the CG Semi OSAT facility on July 4, 2026. In which of the following cities is this facility located?",
        "options": [
          "Mundra, Gujarat",
          "Sanand, Gujarat",
          "Ahmedabad, Gujarat",
          "Dholera, Gujarat"
        ],
        "answer": 1,
        "explanation": "The CG Semi OSAT semiconductor packaging facility is located at Sanand, Gujarat."
      },
      {
        "q": "The newly inaugurated CG Semi semiconductor packaging facility represents a robust technological partnership between India and which two other countries?",
        "options": [
          "Japan and South Korea",
          "South Korea and Thailand",
          "Japan and Thailand",
          "Taiwan and Japan"
        ],
        "answer": 2,
        "explanation": "CG Semi is a technological partnership between India, Japan, and Thailand."
      },
      {
        "q": "Consider the following statements regarding India's semiconductor and electronics growth highlights mentioned by the PM:\n1. India is now the world's second-largest producer and exporter in the mobile sector.\n2. Overall electronics exports from India have seen an eleven-fold explosion compared to 2014 levels.\nWhich of the statements given above is/are correct?",
        "options": [
          "Both 1 and 2 are correct",
          "Neither 1 nor 2 is correct",
          "Only 1 is correct",
          "Only 2 is correct"
        ],
        "answer": 0,
        "explanation": "The PM highlighted both India's position as the second-largest mobile producer/exporter and the eleven-fold rise in electronics exports since 2014."
      },
      {
        "q": "The commercial semiconductor facility at Sanand, Gujarat, has commenced production with an initial capacity of 20 crore units annually. What is the ultimate targeted annual production capacity of this facility?",
        "options": [
          "300 crore units",
          "250 crore units",
          "500 crore units",
          "400 crore units"
        ],
        "answer": 2,
        "explanation": "The Sanand facility aims to scale up from its initial 20 crore units to an ultimate capacity of 500 crore units annually."
      },
      {
        "q": "In which year was the 'Nasha Mukt Bharat Abhiyaan' (NMBA) launched by the Ministry of Social Justice & Empowerment?",
        "options": [
          "2019",
          "2020",
          "2018",
          "2021"
        ],
        "answer": 1,
        "explanation": "The Nasha Mukt Bharat Abhiyaan was launched in 2020 by the Ministry of Social Justice & Empowerment."
      },
      {
        "q": "The 'Nasha Mukt Bharat Saptah' was observed from June 17 to June 26, 2026, witnessing the participation of over 1.31 crore citizens. Which university hosted this national event?",
        "options": [
          "HNB Garhwal University, Uttarakhand",
          "IIT Roorkee, Uttarakhand",
          "Gurukul Kangri University, Haridwar",
          "Dev Sanskriti Vishwavidyalaya (DSVV), Haridwar, Uttarakhand"
        ],
        "answer": 3,
        "explanation": "Dev Sanskriti Vishwavidyalaya (DSVV) in Haridwar hosted the national Nasha Mukt Bharat Saptah event."
      },
      {
        "q": "According to the first nationwide survey on the 'Magnitude of Substance Use' in India conducted in 2019, how many individuals were estimated to be affected by substance use disorder?",
        "options": [
          "More than 5 crore individuals",
          "More than 10 crore individuals",
          "More than 3 crore individuals",
          "More than 7 crore individuals (including nearly 1.2 crore children and 58 lakh women)"
        ],
        "answer": 3,
        "explanation": "The 2019 nationwide survey estimated more than 7 crore individuals affected by substance use disorder, including nearly 1.2 crore children and 58 lakh women."
      },
      {
        "q": "Who is the current Secretary of the Department of Social Justice & Empowerment who recently highlighted the 294% growth in de-addiction treatment seekers?",
        "options": [
          "Shri Anil Malik",
          "Shri Sanjay Kumar",
          "Shri Sudhansh Pant",
          "Shri Rajesh Kumar Singh"
        ],
        "answer": 2,
        "explanation": "Shri Sudhansh Pant, Secretary of the Department of Social Justice & Empowerment, highlighted the 294% rise in de-addiction treatment seekers."
      },
      {
        "q": "Which Indian city is hosting the high-level BRICS Heads of Anti-Drug Agencies meeting on 6–7 July 2026?",
        "options": [
          "New Delhi",
          "Guwahati, Assam",
          "Chandigarh",
          "Bhopal, Madhya Pradesh"
        ],
        "answer": 1,
        "explanation": "Guwahati, Assam is hosting the BRICS Heads of Anti-Drug Agencies meeting on 6-7 July 2026."
      },
      {
        "q": "India is holding the BRICS Chairmanship in 2026. What is the overarching theme guiding India's chairmanship?",
        "options": [
          "Partnership for Global Stability and Growth",
          "Innovation, Inclusivity, and Sustainable Growth",
          "Strengthening Multilateralism for a Just World",
          "Building for Resilience, Innovation, Cooperation and Sustainability"
        ],
        "answer": 3,
        "explanation": "India's 2026 BRICS Chairmanship theme is 'Building for Resilience, Innovation, Cooperation and Sustainability'."
      },
      {
        "q": "Which Indian law enforcement agency is hosting the BRICS Heads of Anti-Drug Agencies meeting in July 2026 under the aegis of the Ministry of Home Affairs?",
        "options": [
          "Central Bureau of Investigation (CBI)",
          "National Investigation Agency (NIA)",
          "Central Board of Indirect Taxes and Customs (CBIC)",
          "Narcotics Control Bureau (NCB)"
        ],
        "answer": 3,
        "explanation": "The Narcotics Control Bureau (NCB) is hosting the BRICS Heads of Anti-Drug Agencies meeting."
      },
      {
        "q": "India's fight against drug trafficking is guided by a network-centric approach. To strengthen institutional capacity, the government recently released which policy document?",
        "options": [
          "Strategic Roadmap for Drug-Free India 2030",
          "National Narcotics Policy Framework 2026",
          "Vision Document on Narcotics Control (2026–2029)",
          "National Action Plan on Drug Demand Reduction (2026-2031)"
        ],
        "answer": 2,
        "explanation": "The government released the 'Vision Document on Narcotics Control (2026–2029)' to strengthen institutional capacity against drug trafficking."
      },
      {
        "q": "India successfully achieved its targeted 20% ethanol blending in petrol (E20) in the year 2025-26. This target was accomplished how many years ahead of the original schedule?",
        "options": [
          "Two years ahead of schedule",
          "Five years ahead of schedule",
          "Seven years ahead of schedule",
          "Three years ahead of schedule"
        ],
        "answer": 1,
        "explanation": "India achieved the E20 target five years ahead of the original 2030 schedule."
      },
      {
        "q": "Under the Ethanol Blended Petrol (EBP) Programme, approximately how much foreign exchange has India saved cumulatively since 2014-15 (up to May 2026)?",
        "options": [
          "₹2.10 lakh crore",
          "₹1.90+ lakh crore",
          "₹1.50 lakh crore",
          "₹1.20 lakh crore"
        ],
        "answer": 1,
        "explanation": "India has saved over ₹1.90 lakh crore in foreign exchange cumulatively under the EBP Programme since 2014-15."
      },
      {
        "q": "Pure ethanol is a high-performance fuel with a Research Octane Number (RON) of approximately:",
        "options": [
          "91",
          "100",
          "95",
          "108.5"
        ],
        "answer": 3,
        "explanation": "Pure ethanol has a Research Octane Number (RON) of approximately 108.5, higher than regular petrol grades."
      },
      {
        "q": "Which department of the Government of India is responsible for permitting the diversion of surplus rice for ethanol production after ensuring national food security requirements are met?",
        "options": [
          "Ministry of Petroleum and Natural Gas",
          "Department of Food and Public Distribution (DFPD)",
          "Food Corporation of India (FCI)",
          "Ministry of Agriculture and Farmers Welfare"
        ],
        "answer": 1,
        "explanation": "The Department of Food and Public Distribution (DFPD) permits the diversion of surplus rice for ethanol production."
      },
      {
        "q": "Which country is the global leader in biofuel blending, currently mandating E27 as its standard petrol blend and planning to raise it to 35%?",
        "options": [
          "Argentina",
          "Brazil",
          "United States",
          "Indonesia"
        ],
        "answer": 1,
        "explanation": "Brazil is the global leader in biofuel blending, mandating E27 and planning to raise it further."
      },
      {
        "q": "Which flagship digital initiative of the Indian Council of Medical Research (ICMR) won the Gold Award at the National Awards for e-Governance 2026?",
        "options": [
          "Ayushman Bharat Digital Mission (ABDM)",
          "e-Sanjeevani",
          "ICMR-MINDS",
          "CoWIN"
        ],
        "answer": 2,
        "explanation": "ICMR-MINDS won the Gold Award at the National Awards for e-Governance 2026."
      },
      {
        "q": "The 29th National Conference on e-Governance (NCeG) 2026, where the National e-Governance Awards were presented, was hosted in which of the following cities?",
        "options": [
          "Bhopal, Madhya Pradesh",
          "Lucknow, Uttar Pradesh",
          "Ahmedabad, Gujarat",
          "Jaipur, Rajasthan"
        ],
        "answer": 3,
        "explanation": "The 29th NCeG 2026 was hosted in Jaipur, Rajasthan."
      },
      {
        "q": "Smt. Nivedita Shukla Verma, who was present at the award ceremony, serves as the Secretary of which of the following central departments?",
        "options": [
          "Department of Personnel and Training (DoPT)",
          "Department of Administrative Reforms and Public Grievances (DARPG) and Department of Pension & Pensioners' Welfare",
          "Ministry of Electronics and IT (MeitY)",
          "Department of Expenditure, Ministry of Finance"
        ],
        "answer": 1,
        "explanation": "Smt. Nivedita Shukla Verma serves as Secretary of DARPG and the Department of Pension & Pensioners' Welfare."
      },
      {
        "q": "Under the ICMR-MINDS project, which of the following institutions is the collaborating partner representing the state of Assam?",
        "options": [
          "Regional Institute of Medical Sciences (RIMS), Imphal",
          "NEIGRIHMS, Shillong",
          "AIIMS, Guwahati",
          "Gauhati Medical College"
        ],
        "answer": 2,
        "explanation": "AIIMS, Guwahati is the collaborating partner representing Assam under the ICMR-MINDS project."
      },
      {
        "q": "Who is the current Director General of the Indian Council of Medical Research (ICMR) and Secretary of the Department of Health Research?",
        "options": [
          "Dr. Rajiv Bahl",
          "Dr. Balram Bhargava",
          "Dr. V.K. Paul",
          "Dr. Randeep Guleria"
        ],
        "answer": 0,
        "explanation": "Dr. Rajiv Bahl is the current Director General of ICMR and Secretary of the Department of Health Research."
      },
      {
        "q": "The 'Mera Yuva Bharat' (MY Bharat) digital platform, which recently celebrated its achievements, was officially launched in which year?",
        "options": [
          "August 2022",
          "October 2023",
          "October 2024",
          "January 2024"
        ],
        "answer": 1,
        "explanation": "MY Bharat was officially launched in October 2023."
      },
      {
        "q": "Which Union Ministry administers the MY Bharat platform to facilitate youth volunteerism and leadership development?",
        "options": [
          "Ministry of Education",
          "Ministry of Youth Affairs and Sports",
          "Ministry of Skill Development and Entrepreneurship",
          "Ministry of Social Justice and Empowerment"
        ],
        "answer": 1,
        "explanation": "The Ministry of Youth Affairs and Sports administers the MY Bharat platform."
      },
      {
        "q": "In June 2026, the MY Bharat portal achieved a Guinness World Record for the 'Most Users to Take an Online Quiz in One Week' with how many verified participants?",
        "options": [
          "410,256 participants",
          "320,150 participants",
          "275,430 participants",
          "390,812 participants"
        ],
        "answer": 3,
        "explanation": "MY Bharat set a Guinness World Record with 390,812 verified participants taking an online quiz in one week."
      },
      {
        "q": "The 'Nari Shakti Youth Parliament' initiative was successfully conducted across how many zones under the MY Bharat platform?",
        "options": [
          "12 zones",
          "15 zones",
          "17 zones",
          "20 zones"
        ],
        "answer": 2,
        "explanation": "The Nari Shakti Youth Parliament initiative was conducted across 17 zones under MY Bharat."
      },
      {
        "q": "Consider the following statements regarding the MY Bharat mobile application:\n1. It has recorded over 1 lakh downloads.\n2. The mobile application is available in 22 Indian languages.\nWhich of the statements given above is/are correct as of July 2026?",
        "options": [
          "Neither 1 nor 2 is correct",
          "Only 1 is correct",
          "Only 2 is correct",
          "Both 1 and 2 are correct"
        ],
        "answer": 3,
        "explanation": "As of July 2026, the MY Bharat app has over 1 lakh downloads and is available in 22 Indian languages."
      }
    ]
  },
  "2026-07-06": {
    "label": "6 July 2026",
    "source": "PIB",
    "resourceLink": "https://docs.google.com/document/d/1yCqtdRgGr7gAK0ORmPskoO_nQGuGuEw0WvTxdWp0_cA/edit?usp=sharing",
    "questions": [
      {
        "q": "In July 2026, the Ministry of Law and Justice concluded its two-day 'Reforms Utsav & Chintan Shivir'. In which of the following cities was this event held?",
        "options": [
          "Gandhinagar, Gujarat",
          "Dehradun, Uttarakhand",
          "Mount Abu, Rajasthan",
          "Udaipur, Rajasthan"
        ],
        "answer": 2,
        "explanation": "The 'Reforms Utsav & Chintan Shivir' was held in Mount Abu, Rajasthan."
      },
      {
        "q": "Who is the current Secretary of the Legislative Department & Department of Legal Affairs who officially released the 'Sankalp Patra' in July 2026?",
        "options": [
          "Dr. Reeta Vasishta",
          "Shri Barun Mitra",
          "Dr. Rajiv Mani",
          "Shri Anoop Kumar Mendiratta"
        ],
        "answer": 2,
        "explanation": "Dr. Rajiv Mani, Secretary of the Legislative Department & Department of Legal Affairs, released the 'Sankalp Patra'."
      },
      {
        "q": "Shri Arjun Ram Meghwal, who inaugurated the Reform Utsav & Chintan Shivir, holds which of the following ministerial portfolios?",
        "options": [
          "Cabinet Minister of Law and Justice",
          "Minister of State for Parliamentary Affairs",
          "Minister of State for Culture (Independent Charge)",
          "Minister of State (Independent Charge) for Law and Justice"
        ],
        "answer": 3,
        "explanation": "Shri Arjun Ram Meghwal holds the portfolio of Minister of State (Independent Charge) for Law and Justice."
      },
      {
        "q": "Under the 'Sankalp Patra' released at the Reforms Utsav & Chintan Shivir 2026, the Ministry resolved to utilize which of the following technological domains to build future-ready institutions?",
        "options": [
          "Blockchain and cybersecurity infrastructure",
          "Cloud computing and data analytics",
          "5G and IoT technologies",
          "Artificial Intelligence (AI) and digital tools"
        ],
        "answer": 3,
        "explanation": "The 'Sankalp Patra' resolves to use Artificial Intelligence and digital tools to build future-ready institutions."
      },
      {
        "q": "Under the aegis of which Union Ministry is the 'Navachar Mantra' flagship national innovation platform administered?",
        "options": [
          "Ministry of Commerce and Industry",
          "Ministry of Micro, Small and Medium Enterprises (MSME)",
          "Department for Promotion of Industry and Internal Trade (DPIIT)",
          "Ministry of Skill Development and Entrepreneurship (MSDE)"
        ],
        "answer": 3,
        "explanation": "'Navachar Mantra' is administered under the Ministry of Skill Development and Entrepreneurship (MSDE)."
      },
      {
        "q": "Which national institute is responsible for implementing the newly extended 'Navachar Mantra' entrepreneurship scheme?",
        "options": [
          "National Small Industries Corporation (NSIC)",
          "Khadi and Village Industries Commission (KVIC)",
          "Indian Institute of Entrepreneurship (IIE)",
          "National Institute for Entrepreneurship and Small Business Development (NIESBUD)"
        ],
        "answer": 3,
        "explanation": "NIESBUD is responsible for implementing the extended 'Navachar Mantra' scheme."
      },
      {
        "q": "Which institute's Foundation for Innovation and Technology Transfer (FITT) is serving as the official Knowledge Partner for the 'Navachar Mantra' initiative?",
        "options": [
          "IIT Bombay",
          "IIM Ahmedabad",
          "IIT Delhi (FITT, IIT Delhi)",
          "IIT Madras"
        ],
        "answer": 2,
        "explanation": "FITT, IIT Delhi is serving as the official Knowledge Partner for 'Navachar Mantra'."
      },
      {
        "q": "In which city is the headquarters of the National Institute for Entrepreneurship and Small Business Development (NIESBUD) located?",
        "options": [
          "Noida, Uttar Pradesh",
          "Gurugram, Haryana",
          "Lucknow, Uttar Pradesh",
          "New Delhi"
        ],
        "answer": 0,
        "explanation": "NIESBUD's headquarters is located in Noida, Uttar Pradesh."
      },
      {
        "q": "Under the World's Largest Grain Storage Scheme, how many total grain storage godowns are being addressed (via transfer, inauguration, and foundation stone laying) at the 5th Foundation Day of the Ministry of Cooperation?",
        "options": [
          "232 godowns (135 transferred, 85 inaugurated, and 47 foundation stones laid)",
          "195 godowns",
          "210 godowns",
          "267 godowns"
        ],
        "answer": 0,
        "explanation": "232 godowns in total were addressed: 135 transferred, 85 inaugurated, and 47 foundation stones laid."
      },
      {
        "q": "Which organization is launching 'Sahakar CBS' (a centralized core banking platform) and 'Sahakar Sahyogi' (a conversational AI assistant) to digitally empower Urban Cooperative Banks?",
        "options": [
          "National Bank for Financing Infrastructure and Development (NaBFID)",
          "National Cooperative Development Corporation (NCDC)",
          "National Federation of Urban Cooperative Banks and Credit Societies (NAFCUB)",
          "National Urban Co-operative Finance and Development Corporation (NUCFDC)"
        ],
        "answer": 3,
        "explanation": "NUCFDC is launching 'Sahakar CBS' and 'Sahakar Sahyogi' for Urban Cooperative Banks."
      },
      {
        "q": "'Sahakar Van', a major 64-acre cooperative forestation project, is being launched as a joint venture between which of the following organizations?",
        "options": [
          "Amul and IFFCO",
          "Amul and the National Cooperative Consumers' Federation of India (NCCF)",
          "NCCF and KRIBHCO",
          "IFFCO and KRIBHCO"
        ],
        "answer": 1,
        "explanation": "'Sahakar Van' is a joint venture between Amul and NCCF."
      },
      {
        "q": "BBSSL has recently partnered with ICAR to strengthen seed systems. Under this initiative, BBSSL is establishing new tissue culture facilities in which of the following two states?",
        "options": [
          "Bihar (Patna) and Rajasthan (Jaipur)",
          "Madhya Pradesh (Indore) and Gujarat (Anand)",
          "Uttar Pradesh (Barabanki) and Maharashtra (Jalgaon)",
          "Punjab (Ludhiana) and Haryana (Karnal)"
        ],
        "answer": 2,
        "explanation": "BBSSL is setting up tissue culture facilities in Barabanki (UP) and Jalgaon (Maharashtra) under its ICAR partnership."
      }
    ]
  },
  "2026-07-07": {
    "label": "7 July 2026",
    "source": "PIB",
    "resourceLink": "https://docs.google.com/document/d/1yCqtdRgGr7gAK0ORmPskoO_nQGuGuEw0WvTxdWp0_cA/edit?usp=sharing",
    "questions": [
      {
        "q": "In July 2026, Prime Minister Narendra Modi inaugurated the newly developed terminal building at Jodhpur Airport. What is the total passenger capacity this new terminal is designed to handle annually?",
        "options": [
          "2 million passengers",
          "5 million passengers",
          "1 million passengers",
          "3.5 million passengers"
        ],
        "answer": 0,
        "explanation": "The new Jodhpur Airport terminal is designed to handle 2 million passengers annually."
      },
      {
        "q": "During his visit to Balotra, Rajasthan, PM Modi inaugurated and laid the foundation stones for multiple development projects worth how many lakh crores of rupees?",
        "options": [
          "₹1.25 lakh crore",
          "₹1.06 lakh crore",
          "₹1.50 lakh crore",
          "₹0.85 lakh crore"
        ],
        "answer": 1,
        "explanation": "PM Modi's Balotra visit covered projects worth ₹1.06 lakh crore."
      },
      {
        "q": "India's first greenfield integrated refinery-cum-petrochemical complex, which was dedicated to the nation in Pachpadra, is a Joint Venture (JV) between the Rajasthan Government and which public sector undertaking (PSU)?",
        "options": [
          "Bharat Petroleum Corporation Limited (BPCL)",
          "Oil and Natural Gas Corporation (ONGC)",
          "Indian Oil Corporation Limited (IOCL)",
          "Hindustan Petroleum Corporation Limited (HPCL)"
        ],
        "answer": 3,
        "explanation": "The Pachpadra refinery-cum-petrochemical complex is a JV between the Rajasthan Government and HPCL."
      },
      {
        "q": "What is the estimated financial outlay for the Phase-II of the Jaipur Metro Rail Project, for which the foundation stone was recently laid by the PM?",
        "options": [
          "Over ₹8,000 crore",
          "Over ₹18,000 crore",
          "Over ₹13,000 crore",
          "Over ₹10,000 crore"
        ],
        "answer": 2,
        "explanation": "Jaipur Metro Phase-II is estimated at over ₹13,000 crore."
      },
      {
        "q": "Which civil aviation scheme's modified version was launched by PM Modi in Jodhpur to bolster remote regional connectivity?",
        "options": [
          "Modified Regional Connectivity Scheme (RCS)",
          "Modified PM GatiShakti scheme",
          "Modified NABH Nirman scheme",
          "Modified Ude Desh ka Aam Nagrik (UDAN) scheme"
        ],
        "answer": 3,
        "explanation": "PM Modi launched the modified UDAN scheme in Jodhpur to boost regional connectivity."
      },
      {
        "q": "In which city was the 29th National Conference on e-Governance (NCeG) hosted in July 2026?",
        "options": [
          "Lucknow, Uttar Pradesh",
          "Ahmedabad, Gujarat",
          "Jaipur, Rajasthan (at the Rajasthan International Centre)",
          "Bhopal, Madhya Pradesh"
        ],
        "answer": 2,
        "explanation": "The 29th NCeG 2026 was hosted at the Rajasthan International Centre, Jaipur."
      },
      {
        "q": "Under the National Awards for e-Governance 2026, how many Gold awards were presented, and what was the cash prize associated with each Gold award?",
        "options": [
          "8 Gold awards, with a cash prize of Rs. 5 lakh each",
          "10 Gold awards, with a cash prize of Rs. 5 lakh each",
          "12 Gold awards, with a cash prize of Rs. 8 lakh each",
          "10 Gold awards, with a cash prize of Rs. 10 lakh each"
        ],
        "answer": 3,
        "explanation": "10 Gold awards were given, each carrying a cash prize of Rs. 10 lakh."
      },
      {
        "q": "What was the official theme of the 29th National Conference on e-Governance held in Jaipur?",
        "options": [
          "Viksit Bharat 2047: Innovation and Inclusive Governance",
          "Atmanirbhar Bharat: Building a Self-Reliant Digital Nation",
          "Digital India: Empowering Citizens Through Technology",
          "Viksit Bharat 2047: AI-enabled, Data-driven & Secure Digital Governance"
        ],
        "answer": 3,
        "explanation": "The NCeG 2026 theme was 'Viksit Bharat 2047: AI-enabled, Data-driven & Secure Digital Governance'."
      },
      {
        "q": "The 29th National Conference on e-Governance concluded with the adoption of which landmark declaration to strengthen digital governance across India?",
        "options": [
          "Jaipur Resolution on Digital India 2026",
          "Rajasthan Digital Governance Charter 2026",
          "Jaipur Declaration on e-Governance 2026",
          "National e-Governance Compact 2026"
        ],
        "answer": 2,
        "explanation": "NCeG 2026 concluded with the adoption of the 'Jaipur Declaration on e-Governance 2026'."
      },
      {
        "q": "Which of the following departments collaborated with the Ministry of Electronics and Information Technology (MeitY) and the Government of Rajasthan to organize the NCeG 2026?",
        "options": [
          "Department of Personnel and Training (DoPT)",
          "NITI Aayog",
          "Department of Administrative Reforms and Public Grievances (DARPG)",
          "Department of Expenditure"
        ],
        "answer": 2,
        "explanation": "DARPG collaborated with MeitY and the Rajasthan Government to organize NCeG 2026."
      },
      {
        "q": "In July 2026, the Defence Acquisition Council (DAC) cleared modernization proposals worth approximately ₹52,000 crore. Who serves as the Chairman of this apex council?",
        "options": [
          "Union Minister of Defence (Rajnath Singh)",
          "Defence Secretary",
          "Chief of Defence Staff (CDS)",
          "Union Minister of Home Affairs"
        ],
        "answer": 0,
        "explanation": "The Defence Acquisition Council is chaired by the Union Minister of Defence."
      },
      {
        "q": "What is the name of the advanced Anti-Unmanned Aerial Vehicle (Anti-UAV) Electronic Warfare System cleared for procurement for the Indian Army?",
        "options": [
          "SWATHI System",
          "SAMHO System",
          "AKASH TARANG System",
          "AKASHTEER System"
        ],
        "answer": 2,
        "explanation": "The AKASH TARANG System is the Anti-UAV Electronic Warfare System cleared for the Indian Army."
      },
      {
        "q": "What does the abbreviation 'FW-HAPS' stand for under the procurement clearances granted to the Indian Air Force?",
        "options": [
          "Fixed-Wing Heavy Aerial Payload System",
          "Fixed-Wing High-Altitude Pseudo Satellites",
          "Forward-Wing High-Altitude Precision Strike",
          "Fixed-Wing Hypersonic Aerial Patrol System"
        ],
        "answer": 1,
        "explanation": "FW-HAPS stands for Fixed-Wing High-Altitude Pseudo Satellites."
      },
      {
        "q": "Consider the following list of defense equipment:\n1. Multi Influence Ground Mines (MIGM).\n2. Naval Shipborne Unmanned Aerial Systems (NSUAS).\nThese military procurements were cleared for which of the following branches of the Indian Armed Forces?",
        "options": [
          "Indian Navy",
          "Indian Army",
          "Indian Air Force",
          "Indian Coast Guard"
        ],
        "answer": 0,
        "explanation": "MIGM and NSUAS procurements were cleared for the Indian Navy."
      },
      {
        "q": "The Delhi Government recently announced a massive ₹8,300 crore air pollution control project in July 2026. What is the official title of this project?",
        "options": [
          "Clean Air, Healthy Delhi",
          "Pure Air, Healthy Capital",
          "Swachh Vayu Dilli Abhiyan",
          "Delhi Clean Air Mission"
        ],
        "answer": 0,
        "explanation": "The project is officially titled 'Clean Air, Healthy Delhi'."
      },
      {
        "q": "Which international financial institution is partnering with the Delhi Government and the Department of Economic Affairs to implement the 'Clean Air, Healthy Delhi' program?",
        "options": [
          "New Development Bank (NDB)",
          "Asian Development Bank (ADB)",
          "World Bank (WB)",
          "International Monetary Fund (IMF)"
        ],
        "answer": 2,
        "explanation": "The World Bank is partnering to implement the 'Clean Air, Healthy Delhi' program."
      },
      {
        "q": "The newly launched 'Clean Air, Healthy Delhi' project is aimed at accelerating the objectives of which national-level air pollution mitigation program?",
        "options": [
          "National Clean Air Programme (NCAP)",
          "National Clean Energy Programme",
          "National Air Quality Mission (NAQM)",
          "Swachh Bharat Mission (Urban)"
        ],
        "answer": 0,
        "explanation": "The project accelerates the objectives of the National Clean Air Programme (NCAP)."
      },
      {
        "q": "Which of the following departments of the Central Government is a key coordinating partner with the World Bank for Delhi's ₹8,300 crore environmental project?",
        "options": [
          "Department of Economic Affairs (DEA)",
          "Department of Expenditure",
          "NITI Aayog",
          "Ministry of Environment, Forest and Climate Change"
        ],
        "answer": 0,
        "explanation": "The Department of Economic Affairs (DEA) is a key coordinating partner with the World Bank on this project."
      },
      {
        "q": "In July 2026, Tshering Choden successfully scaled Europe's highest mountain peak, Mount Elbrus. She hails from which of the following Indian states?",
        "options": [
          "Himachal Pradesh",
          "Arunachal Pradesh",
          "Uttarakhand",
          "Sikkim"
        ],
        "answer": 3,
        "explanation": "Tshering Choden, who scaled Mount Elbrus, hails from Sikkim."
      },
      {
        "q": "Mount Elbrus, a dormant stratovolcano featuring twin summits, is located in which mountain range?",
        "options": [
          "Alps mountain range",
          "Ural mountain range",
          "Carpathian mountain range",
          "Caucasus mountain range"
        ],
        "answer": 3,
        "explanation": "Mount Elbrus is located in the Caucasus mountain range."
      },
      {
        "q": "Under the 'Seven Summits' challenge, mountaineer Tshering Choden scaled her first peak, Mount Kilimanjaro, in August 2025. What is the height of Mount Kilimanjaro?",
        "options": [
          "6,961 metres",
          "5,895 metres",
          "5,642 metres",
          "6,190 metres"
        ],
        "answer": 1,
        "explanation": "Mount Kilimanjaro stands at 5,895 metres."
      },
      {
        "q": "Which of the following is incorrectly matched with respect to the highest peaks of the continents?\nEurope - Mount Elbrus\nAntarctica - Mount Vinson\nAustralia - Mount Kosciuszko\nNorth America - Aconcagua",
        "options": [
          "Australia - Mount Kosciuszko (incorrect)",
          "North America - Aconcagua (incorrect; Denali is North America's highest, Aconcagua is South America's)",
          "Antarctica - Mount Vinson (incorrect)",
          "Europe - Mount Elbrus (incorrect)"
        ],
        "answer": 1,
        "explanation": "Denali is North America's highest peak; Aconcagua is actually South America's highest peak, making this pairing incorrect."
      },
      {
        "q": "In July 2026, ISRO successfully conducted the first ground test of which solid motor-based test vehicle to validate the Gaganyaan Crew Module's parachute trials?",
        "options": [
          "PSLV Test Vehicle (TV-D1)",
          "SOLVE (Sub-Orbital Launch Vehicle for Experiments)",
          "Crew Escape System Test Vehicle (CESTV)",
          "SMART (Solid Motor Aerial Recovery Test)"
        ],
        "answer": 1,
        "explanation": "ISRO's SOLVE (Sub-Orbital Launch Vehicle for Experiments) conducted the first ground test for Gaganyaan's parachute trials."
      },
      {
        "q": "The first ground test of the SOLVE vehicle was conducted at the Satish Dhawan Space Centre (SDSC). In which state is SDSC located?",
        "options": [
          "Andhra Pradesh (Sriharikota)",
          "Karnataka (Bengaluru)",
          "Tamil Nadu (Mahendragiri)",
          "Odisha (Chandipur)"
        ],
        "answer": 0,
        "explanation": "SDSC is located at Sriharikota, Andhra Pradesh."
      },
      {
        "q": "The SOLVE test vehicle is engineered to simulate deceleration for Gaganyaan's parachute system at what altitude range?",
        "options": [
          "Between 20 km and 30 km",
          "Between 10 km and 17 km",
          "Between 5 km and 10 km",
          "Between 15 km and 25 km"
        ],
        "answer": 1,
        "explanation": "SOLVE simulates deceleration conditions between 10 km and 17 km altitude for the parachute trials."
      },
      {
        "q": "Consider the following statements regarding ISRO's SOLVE platform:\n1. It is equipped with a modified Polar Satellite Launch Vehicle (PSLV) strap-on motor.\n2. It utilizes a 10-stage parachute deployment system to test the safe recovery of the Crew Module.\nWhich of the statements given above is/are correct?",
        "options": [
          "Only 2 is correct",
          "Both 1 and 2 are correct",
          "Neither 1 nor 2 is correct",
          "Only 1 is correct"
        ],
        "answer": 1,
        "explanation": "SOLVE uses a modified PSLV strap-on motor and a 10-stage parachute deployment system for the Crew Module recovery test."
      },
      {
        "q": "Which country won the 10th edition of the ICC Women's T20 World Cup held in June-July 2026?",
        "options": [
          "South Africa (defeating England in the final)",
          "India (defeating Australia in the final)",
          "England (defeating Australia in the final)",
          "Australia (defeating England in the final)"
        ],
        "answer": 3,
        "explanation": "Australia won the 10th edition of the ICC Women's T20 World Cup, defeating England in the final."
      },
      {
        "q": "Who became the first player in T20 World Cup history to win two 'Player of the Tournament' awards after securing the title in both 2023 and 2026?",
        "options": [
          "Beth Mooney (Australia)",
          "Ashleigh Gardner (Australia)",
          "Alyssa Healy (Australia)",
          "Meg Lanning (Australia)"
        ],
        "answer": 0,
        "explanation": "Beth Mooney became the first player to win 'Player of the Tournament' twice, in 2023 and 2026."
      },
      {
        "q": "Indian bowler Shree Charani set a new national record at the 2026 Women's T20 World Cup by taking how many wickets?",
        "options": [
          "11 wickets",
          "14 wickets",
          "9 wickets",
          "17 wickets"
        ],
        "answer": 1,
        "explanation": "Shree Charani set a new Indian record by taking 14 wickets at the 2026 Women's T20 World Cup."
      },
      {
        "q": "Consider the following statements regarding the 2026 ICC Women's T20 World Cup:\n1. The final of the tournament was played at Lord's Cricket Ground in London.\n2. A total of 12 teams competed in the tournament divided into two groups of six.\nWhich of the statements given above is/are correct?",
        "options": [
          "Only 1 is correct",
          "Only 2 is correct",
          "Both 1 and 2 are correct",
          "Neither 1 nor 2 is correct"
        ],
        "answer": 2,
        "explanation": "The final was held at Lord's, and 12 teams competed divided into two groups of six."
      },
      {
        "q": "Who became India's youngest international cricket debutant in July 2026, debuting at the age of 15 years and 99 days?",
        "options": [
          "Vaibhav Sooryavanshi",
          "Sachin Tendulkar",
          "Prithvi Shaw",
          "Yashasvi Jaiswal"
        ],
        "answer": 0,
        "explanation": "Vaibhav Sooryavanshi became India's youngest international debutant at 15 years and 99 days."
      },
      {
        "q": "Against which country did Vaibhav Sooryavanshi make his senior T20I international debut in July 2026?",
        "options": [
          "Australia (at the MCG)",
          "England (at Old Trafford, Manchester)",
          "New Zealand (at Eden Park)",
          "South Africa (at the Wanderers)"
        ],
        "answer": 1,
        "explanation": "Sooryavanshi debuted against England at Old Trafford, Manchester."
      },
      {
        "q": "Playing for which IPL franchise did Vaibhav Sooryavanshi win the Orange Cap, MVP, and Emerging Player awards in the same season in 2026?",
        "options": [
          "Chennai Super Kings (CSK)",
          "Rajasthan Royals (RR)",
          "Mumbai Indians (MI)",
          "Delhi Capitals (DC)"
        ],
        "answer": 1,
        "explanation": "Vaibhav Sooryavanshi won multiple awards playing for Rajasthan Royals in the 2026 IPL season."
      },
      {
        "q": "Consider the following statements regarding cricketer Vaibhav Sooryavanshi:\n1. He hails from Tajpur, Bihar, and made his first-class debut in the year 2024.\n2. He broke Sachin Tendulkar's 36-year-old record to become India's youngest international debutant.\nWhich of the statements given above is/are correct?",
        "options": [
          "Only 1 is correct",
          "Neither 1 nor 2 is correct",
          "Only 2 is correct",
          "Both 1 and 2 are correct"
        ],
        "answer": 3,
        "explanation": "Both statements about Sooryavanshi's background and record-breaking debut are correct."
      },
      {
        "q": "Which indigenous stealth frigate is set to be commissioned by the Indian Navy at Visakhapatnam on July 11, 2026?",
        "options": [
          "INS Himgiri (F39)",
          "INS Vindhyagiri (F42)",
          "INS Udaygiri (F35)",
          "INS Mahendragiri (F38)"
        ],
        "answer": 3,
        "explanation": "INS Mahendragiri (F38) is set to be commissioned at Visakhapatnam on July 11, 2026."
      },
      {
        "q": "INS Mahendragiri, built by Mazagon Dock Shipbuilders Limited (MDL), is the sixth warship of which prestigious shipbuilding project of the Indian Navy?",
        "options": [
          "Project 28",
          "Project 17A",
          "Project 75I",
          "Project 15B"
        ],
        "answer": 1,
        "explanation": "INS Mahendragiri is the sixth and final warship of Project 17A."
      },
      {
        "q": "What is the approximate percentage of indigenous content incorporated in the newly built stealth frigate INS Mahendragiri to promote the 'Aatmanirbhar Bharat' initiative?",
        "options": [
          "Over 75 percent",
          "Over 90 percent",
          "Over 60 percent",
          "Over 50 percent"
        ],
        "answer": 0,
        "explanation": "INS Mahendragiri incorporates over 75 percent indigenous content."
      },
      {
        "q": "Consider the following statements regarding the stealth frigate INS Mahendragiri:\n1. She is named after a majestic mountain range in the Western Ghats.\n2. She is powered by a modern Combined Diesel or Gas (CODOG) propulsion system.\nWhich of the statements given above is/are correct?",
        "options": [
          "Both 1 and 2 are correct",
          "Neither 1 nor 2 is correct",
          "Only 2 is correct (Mahendragiri is in the Eastern Ghats, not the Western Ghats)",
          "Only 1 is correct"
        ],
        "answer": 2,
        "explanation": "Mahendragiri is actually located in the Eastern Ghats, so statement 1 is incorrect; the CODOG propulsion detail in statement 2 is correct."
      },
      {
        "q": "India is hosting the high-level BRICS Women Ministerial Meeting on 8–9 July 2026 under its BRICS Chairship. Which of the following Indian cities is the venue for this meeting?",
        "options": [
          "Guwahati, Assam",
          "Kochi, Kerala",
          "Bhubaneswar, Odisha",
          "Jaipur, Rajasthan"
        ],
        "answer": 1,
        "explanation": "Kochi, Kerala is hosting the BRICS Women Ministerial Meeting 2026."
      },
      {
        "q": "What is the official theme of the BRICS Women Ministerial Meeting 2026 being hosted under India's BRICS Chairship?",
        "options": [
          "Empowering Women for a Resilient and Inclusive Future",
          "Building for Resilience, Innovation, Cooperation and Sustainability",
          "Women-Led Development for a Sustainable World",
          "Strengthening Multilateralism for Gender Equity"
        ],
        "answer": 1,
        "explanation": "The theme, consistent with India's overall BRICS Chairship, is 'Building for Resilience, Innovation, Cooperation and Sustainability'."
      },
      {
        "q": "The BRICS Women Ministerial Meeting in July 2026 is administered by which nodal Union Ministry of India?",
        "options": [
          "Ministry of External Affairs",
          "Ministry of Women and Child Development",
          "Ministry of Rural Development",
          "Ministry of Social Justice and Empowerment"
        ],
        "answer": 1,
        "explanation": "The Ministry of Women and Child Development is the nodal ministry for this meeting."
      },
      {
        "q": "Which museum has recently been officially notified as India's 21st Designated Repository under the Biological Diversity Act, 2002?",
        "options": [
          "National Museum of Natural History, New Delhi",
          "Assam State Museum, Guwahati",
          "Zoological Survey of India Museum, Kolkata",
          "Mizoram's Natural History Museum"
        ],
        "answer": 3,
        "explanation": "Mizoram's Natural History Museum was notified as India's 21st Designated Repository under the Biological Diversity Act, 2002."
      },
      {
        "q": "Consider the following statements regarding India's BRICS Chairship in 2026:\n1. The Chairship is anchored in four pillars: Resilience, Innovation, Cooperation, and Sustainability.\n2. The BRICS Women Working Group Meeting was held on 6–7 July 2026.\nWhich of the statements given above is/are correct?",
        "options": [
          "Both 1 and 2 are correct",
          "Only 2 is correct",
          "Neither 1 nor 2 is correct",
          "Only 1 is correct"
        ],
        "answer": 0,
        "explanation": "Both the four pillars of India's BRICS Chairship and the dates of the Women Working Group Meeting are correctly stated."
      }
    ]
  }
};
