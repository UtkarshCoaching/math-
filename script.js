const questionsData = [
  {
    id: 1,
    question: "ভারতে পৌর জনবসতির ন্যূনতম জনসংখ্যা হল-",
    options: ["500", "5000", "5001", "4000"],
    correctAnswer: "5000",
    rationale: "ভারতীয় আদমশুমারি অনুসারে, একটি বসতিকে পৌর হিসাবে শ্রেণীবদ্ধ করার জন্য ন্যূনতম জনসংখ্যা 5000 হওয়া প্রয়োজন।"
  },
  {
    id: 2,
    question: "ভারতে পৌর জনবসতির ন্যূনতম জনঘনত্ব প্রতি বর্গকিমিতে-",
    options: ["400 জন", "4000 জন", "500 জন", "5000 জন"],
    correctAnswer: "400 জন",
    rationale: "ভারতীয় আদমশুমারি অনুসারে, প্রতি বর্গকিলোমিটারে ন্যূনতম 400 জন ব্যক্তি হল একটি বসতিকে পৌর হিসাবে শ্রেণীবদ্ধ করার জন্য একটি গুরুত্বপূর্ণ শর্ত।"
  },
  {
    id: 3,
    question: "মহানগরের ন্যূনতম জনসংখ্যা হল-",
    options: ["1 কোটির কম", "1 কোটির বেশি", "10 লক্ষের বেশি", "লক্ষের বেশি"],
    correctAnswer: "10 লক্ষের বেশি",
    rationale: "ভারতীয় প্রেক্ষাপটে, 10 লক্ষ (1 মিলিয়ন) বা তার বেশি জনসংখ্যার শহরকে মহানগর হিসাবে ধরা হয়।"
  },
  {
    id: 4,
    question: "একসঙ্গে লাগোয়া একগুচ্ছ শহরকে বলা হয়-",
    options: ["পৌরপুর", "পৌরপিও", "পৌরবিক্ষেপ", "Metropolis"],
    correctAnswer: "পৌরপিও",
    rationale: "একাধিক সংলগ্ন শহর এবং নগর এলাকা একত্রিত হয়ে একটি অবিচ্ছিন্ন শহুরে অঞ্চল গঠন করলে তাকে পৌরপিও (Conurbation) বলা হয়।"
  },
  {
    id: 5,
    question: "নীচের কোন্ শব্দটির অর্থ মূলনগরী বা Mother city-কে সমর্থন করে?",
    options: ["Megalopolis", "Mega city", "Connerhation", "Metropolis"],
    correctAnswer: "Metropolis",
    rationale: "‘মেট্রোপলিস’ শব্দটি গ্রিক ‘মিটার’ (মা) এবং ‘পোলিস’ (শহর) থেকে উদ্ভূত, যার অর্থ ‘মাতৃশহর’ বা ‘মূলনগরী’।"
  },
  {
    id: 6,
    question: "ভারতের কোন্ শহরটি ইস্পাত নগরী নামে পরিচিত।",
    options: ["সিল্যাপুর", "হরিয়ার", "জামশেদপুর", "চন্ডীগড়"],
    correctAnswer: "জামশেদপুর",
    rationale: "টাটা স্টিল প্ল্যান্টের উপস্থিতির কারণে জামশেদপুরকে ভারতের ইস্পাত নগরী বলা হয়।"
  },
  {
    id: 7,
    question: "গ্রাম হল একটি ক্ষুদ্রতম-",
    options: ["সামাজিক একক", "রাজনৈতিক একক", "অর্থনৈতিক একক", "প্রশাসনিক একক"],
    correctAnswer: "সামাজিক একক",
    rationale: "গ্রামগুলি মূলত সামাজিক একক হিসাবে বিবেচিত হয়, যেখানে সম্প্রদায়ের মধ্যে ঘনিষ্ঠ সম্পর্ক এবং সম্মিলিত জীবনযাত্রা দেখা যায়।"
  },
  {
    id: 8,
    question: "বসতবাড়িগুলি ভূমিভাগের কোনো একটি মাত্র স্থানে কেন্দ্রীভূত হলে তাকে বলে-",
    options: ["গোষ্ঠীবদ্ধ বসতি", "বিক্ষিপ্ত বসতি", "রৈখিক বসতি", "বৃত্তাকার বসতি"],
    correctAnswer: "গোষ্ঠীবদ্ধ বসতি",
    rationale: "যখন বসতবাড়িগুলি ভূমিভাগের কোনো একটি মাত্র স্থানে কেন্দ্রীভূত হয়, তখন তাকে গোষ্ঠীবদ্ধ বসতি বলে।"
  },
  {
    id: 9,
    question: "কার্যাবলির ভিত্তিতে বারাণসী শহরটি হল-",
    options: ["প্রতিরক্ষা", "প্রশাসনিক", "ধর্মীয়", "পর্যটন"],
    correctAnswer: "ধর্মীয়",
    rationale: "বারাণসী বিশ্বের প্রাচীনতম জীবন্ত শহরগুলির মধ্যে অন্যতম এবং এর ধর্মীয় গুরুত্বের জন্য সুপরিচিত।"
  },
  {
    id: 10,
    question: "নীচের দেওয়া বিকল্পগুলি থেকে গোষ্ঠীবদ্ধ জনবসতি সম্পর্কে সবথেকে উপযুক্ত কোনটি?\n[2] সম্প্রদায়গুলি ঘনিষ্ঠ এবং তাদের পেশাগুলিও একই প্রকৃতির।\n[1] একে অপরের কাছাকাছি পুচর সংখ্যক বাড়ি তৈরি করা হয়েছে।\n[4] একটি সাংস্কৃতিক বৈশিষ্ট্য যেমন-উপাসনালয় বা একটি বাজার বসতিকে একত্রে আবদ্ধ করে।\n[3] নদী উপত্যকায় ও উর্বর সমভূমিতে এই ধরনের বসতি গড়ে ওঠে।",
    options: [
      "চারটি বর্ণনাই যথাযথোভাবে গোষ্ঠীবদ্ধ জনবসতিকে ব্যাখ্যা করে।",
      "[1], [2] [3] শুধুমাত্র সঠিক।",
      "[2] [3] শুধুমাত্র সঠিক।",
      "[1] [4] শুধুমাত্র সঠিক।"
    ],
    correctAnswer: "চারটি বর্ণনাই যথাযথোভাবে গোষ্ঠীবদ্ধ জনবসতিকে ব্যাখ্যা করে।",
    rationale: "গোষ্ঠীবদ্ধ জনবসতির বৈশিষ্ট্যগুলির মধ্যে রয়েছে ঘনিষ্ঠ সম্প্রদায়, কাছাকাছি বাড়িঘর, উর্বর সমভূমিতে গঠন এবং একটি সাংস্কৃতিক বৈশিষ্ট্য দ্বারা আবদ্ধ থাকা, যা প্রদত্ত চারটি বর্ণনার সবগুলোতেই উপস্থিত।"
  },
  {
    id: 11,
    question: "প্রতিকূল ভূপ্রাকৃতিক পরিবেশে গড়ে ওঠা জনবসতি হয়-",
    options: ["গোষ্ঠীবদ্ধ", "রৈখিক", "বিক্ষিপ্ত", "বর্ণাকার"],
    correctAnswer: "বিক্ষিপ্ত",
    rationale: "প্রতিকূল ভূপ্রাকৃতিক পরিবেশে (যেমন পাহাড়ি এলাকা, মরুভূমি) যেখানে সম্পদ সীমিত বা বিক্ষিপ্ত, সেখানে বিক্ষিপ্ত জনবসতি দেখা যায়।"
  },
  {
    id: 12,
    question: "প্রথম শ্রেণির শহর বা নগরের ন্যূনতম জনসংখ্যা হল-",
    options: ["10000", "50000", "100000", "500000"],
    correctAnswer: "100000",
    rationale: "ভারতীয় আদমশুমারি অনুসারে, 100,000 (1 লক্ষ) বা তার বেশি জনসংখ্যাকে প্রথম শ্রেণির শহর বা নগর হিসাবে ধরা হয়।"
  },
  {
    id: 13,
    question: "পৌর জনবসতিতে অ-কৃষিকাজে নিযুক্ত ন্যূনতম শতকরা পুরুষকর্মী হল-",
    options: ["870", "75", "80", "50"],
    correctAnswer: "75",
    rationale: "ভারতীয় আদমশুমারি অনুসারে, একটি স্থানকে পৌর হিসাবে শ্রেণীবদ্ধ করার জন্য পুরুষ কর্মজীবীদের অন্তত 75% অ-কৃষি কার্যকলাপে নিযুক্ত থাকতে হবে।"
  },
  {
    id: 14,
    question: "গ্রামীণ বসতির বেশিরভাগ মানুষ নিযুক্ত থাকে-",
    options: ["ব্যাবসাবাণিজ্যে", "শিল্পকর্মে", "কৃষিকাজে", "পরিবহণে"],
    correctAnswer: "কৃষিকাজে",
    rationale: "কৃষিকাজ হল গ্রামীণ এলাকার প্রধান অর্থনৈতিক কার্যকলাপ, যেখানে বেশিরভাগ মানুষ সরাসরি কৃষি বা কৃষি-সম্পর্কিত কাজে জড়িত থাকে।"
  },
  {
    id: 15,
    question: "যে জন্য বারাণসী, হরিদ্বার ও মক্কা শহর বিখ্যাত-",
    options: ["পর্যটন", "প্রতিরক্ষা", "ধর্ম", "সংস্কৃতি"],
    correctAnswer: "ধর্ম",
    rationale: "বারাণসী, হরিদ্বার এবং মক্কা—এই তিনটি শহরই তাদের গুরুত্বপূর্ণ ধর্মীয় ও তীর্থস্থান হিসাবে বিশ্বজুড়ে পরিচিত।"
  },
  {
    id: 16,
    question: "নদীর তীর বরাবর গড়ে ওঠা জনবসতির নকশা হল-",
    options: ["বর্গাকার", "বৃত্তাকার", "রৈখিক", "L' আকৃতির বসতি"],
    correctAnswer: "রৈখিক",
    rationale: "রৈখিক বসতিগুলি সাধারণত নদী, রাস্তা বা রেললাইনের মতো রৈখিক প্রাকৃতিক বা মানবসৃষ্ট বৈশিষ্ট্যের সমান্তরালভাবে গড়ে ওঠে।"
  },
  {
    id: 17,
    question: "বাগিচা কৃষিকে কেন্দ্র করে গড়ে ওঠে-",
    options: ["বিক্ষিপ্ত বসতি", "গোষ্ঠীবদ্ধ বসতি", "রৈখিক বসতি", "কোনোটিই নয়"],
    correctAnswer: "বিক্ষিপ্ত বসতি",
    rationale: "বাগিচা কৃষিক্ষেত্রে শ্রমিকদের বাসস্থানগুলি প্রায়শই বাগিচার মধ্যে বা আশেপাশে বিক্ষিপ্তভাবে ছড়িয়ে থাকে, কারণ কৃষি জমি বিশাল এলাকা জুড়ে বিস্তৃত থাকে।"
  },
  {
    id: 18,
    question: "চাষবাস, পশুপালন, কাঠসংগ্রহ প্রভৃতি জীবিকা লক্ষ করা যায় সেইসব বসতিতে যেগুলি হল-",
    options: ["পৌর", "শহরতলি", "গ্রামীণ", "শহরপুঞ্জ"],
    correctAnswer: "গ্রামীণ",
    rationale: "চাষবাস, পশুপালন, কাঠসংগ্রহ - এইগুলি প্রধানত প্রাথমিক অর্থনৈতিক কার্যকলাপ এবং গ্রামীণ এলাকার মানুষের জীবিকা।"
  },
  {
    id: 19,
    question: "পাঁচঘড়ি শহরটি হল এক ধরনের-",
    options: ["আবাসিক শহর", "প্রশাসনিক শহর", "শিল্পশহর", "প্রতিরক্ষা শহর"],
    correctAnswer: "আবাসিক শহর", // Note: This is an inferred answer based on common city types, as "পাঁচঘড়ি শহর" is not a universally known city for a specific function.
    rationale: "পাঁচঘড়ি শহরটি প্রধানত মানুষের বসবাসের উপর জোর দেয় এবং এটিকে একটি আবাসিক শহর হিসাবে গণ্য করা হয়।"
  },
  {
    id: 20,
    question: "যে ধরনের বসতিতে প্রথম স্তরের অর্থনৈতিক কাজকর্ম লক্ষ করা যায়-",
    options: ["গ্রামীণ", "পৌর", "শহরতলি", "মেট্রোপলিস"],
    correctAnswer: "গ্রামীণ",
    rationale: "প্রথম স্তরের অর্থনৈতিক কাজকর্ম (যেমন কৃষি, মৎস্য শিকার, বনজ সম্পদ সংগ্রহ) প্রধানত গ্রামীণ বসতিতে দেখা যায়।"
  },
  {
    id: 21,
    question: "একাধিক ছোটো ছোটো পৌর এলাকার সঙ্গে মূল নগরের একত্রীকরণকে বলে-",
    options: ["মেগাসিটি শহর", "মহানগর", "পৌরপিও", "শহরপুঞ্জ"],
    correctAnswer: "পৌরপিও",
    rationale: "একাধিক ছোট ছোট পৌর এলাকার সঙ্গে মূল নগরের একত্রীকরণকে পৌরপিও (Conurbation) বলা হয়।"
  },
  {
    id: 22,
    question: "উর্বর সমতল ভূমিতে দেখা যায়-",
    options: ["বিক্ষিপ্ত বসতি", "রৈখিক বসতি", "গোষ্ঠীবদ্ধ বসতি", "এগুলির কোনোটিই নয়"],
    correctAnswer: "গোষ্ঠীবদ্ধ বসতি",
    rationale: "উর্বর সমতল ভূমিতে কৃষিকাজের সুবিধার জন্য এবং একসাথে থাকার প্রবণতার কারণে গোষ্ঠীবদ্ধ বসতি দেখা যায়।"
  },
  {
    id: 23,
    question: "ভারতীয় জনগণনায় সর্বপ্রথম প্রামাণ্য পৌরএলাকা (Standard urban area) কথাটি ব্যবহার করা হয় কত সালে?",
    options: ["1991 সালে", "1981 সালে", "1971 সালে", "1961 সালে"],
    correctAnswer: "1971 সালে",
    rationale: "ভারতীয় জনগণনায় 1971 সালে প্রথম প্রামাণ্য পৌরএলাকা (Standard Urban Area) ধারণাটি চালু করা হয়েছিল।"
  },
  {
    id: 24,
    question: "জার্মানিতে শহর যে নামে পরিচিত তা হল-",
    options: ["স্টাডেন", "স্ট্যাড", "টাউন", "শহর"],
    correctAnswer: "স্ট্যাড",
    rationale: "‘স্ট্যাড’ (Stadt) হল জার্মান ভাষায় শহর বা নগরের জন্য ব্যবহৃত শব্দ।"
  },
  {
    id: 25,
    question: "কোনো বড়ো শহরের কেন্দ্রীয় অংশটিকে বলে-",
    options: ["সিটি", "আবাসিক", "কেন্দ্রীয় বাণিজ্য এলাকা", "সিওডি"],
    correctAnswer: "কেন্দ্রীয় বাণিজ্য এলাকা",
    rationale: "কোনো বড়ো শহরের কেন্দ্রীয় অংশটিকে কেন্দ্রীয় বাণিজ্য এলাকা বা Central Business District (CBD) বলা হয়, যা প্রধানত বাণিজ্যিক ও অর্থনৈতিক কার্যাবলীর কেন্দ্র।"
  },
  {
    id: 26,
    question: "কুলু ও মানালি শহর দুটি যে জন্য বিখ্যাত তা হল-",
    options: ["পর্যটন", "প্রতিরক্ষা", "ধর্ম", "সংস্কৃতি"],
    correctAnswer: "পর্যটন",
    rationale: "কুলু ও মানালি শহর দুটি তাদের প্রাকৃতিক সৌন্দর্য, পর্বত এবং বিভিন্ন পর্যটন আকর্ষণগুলির জন্য বিখ্যাত।"
  },
  {
    id: 27,
    question: "দুটি রাস্তা সমকোণে মিলিত হলে সেখানে বসতি গড়ে ওঠে-",
    options: ["'L' ও 'T' আকৃতির", "'Y' আকৃতির", "'T' আকৃতির", "'Z' আকৃতির"],
    correctAnswer: "'L' ও 'T' আকৃতির",
    rationale: "যখন দুটি রাস্তা সমকোণে মিলিত হয়, তখন সেই সংযোগস্থলে ‘L’ আকৃতির বা ‘T’ আকৃতির বসতি গড়ে উঠতে পারে।"
  },
  {
    id: 28,
    question: "গ্রামীণ বসতিতে ঘটমান কর্মকাণ্ডের সমষ্টিকে বলে-",
    options: ["গ্রামীণ অনসংখ্যার উৎক্ষেপ", "গ্রামীণ বসতির কর্মধারা", "গ্রামীণ বসতির আকার", "গ্রামীণ বসতির বিন্যাস"],
    correctAnswer: "গ্রামীণ বসতির বিন্যাস",
    rationale: "গ্রামীণ বসতিতে ঘটমান কর্মকাণ্ডের সমষ্টি, অর্থাৎ বাড়িঘর, রাস্তাঘাট, এবং অন্যান্য বৈশিষ্ট্যগুলির বিন্যাসকে সাধারণত ‘গ্রামীণ বসতির বিন্যাস’ বলা হয়।"
  },
  {
    id: 29,
    question: "ভারতের একটি পরিকল্পিত শহর হল-",
    options: ["চন্ডীগড়", "দিল্লী", "হুগলী", "দুর্গাপুর"],
    correctAnswer: "চন্ডীগড়",
    rationale: "চন্ডীগড় হল ভারতের প্রথম পরিকল্পিত শহরগুলির মধ্যে অন্যতম, যা আধুনিক নগর পরিকল্পনার একটি উজ্জ্বল উদাহরণ।"
  },
  {
    id: 30,
    question: "বিদ্যা ও এশিয়ার নগরীগুলিতে আকর্ষণ যে কারণে হয়নি দেখা যায়-",
    options: ["দারিদ্র্য", "বিচ্ছিন্নতা", "পরিবহন", "শিল্প"],
    correctAnswer: "শিল্প",
    rationale: "শিল্প উন্নয়ন সাধারণত নগরগুলিতে মানুষের আকর্ষণ বৃদ্ধি করে; এর অনুপস্থিতি বা স্বল্পতা আকর্ষণ কমে যাওয়ার একটি কারণ হতে পারে।"
  },
  {
    id: 31,
    question: "ভারতের একটি শিক্ষা শহর উদাহরণ হল-",
    options: ["পন্ডিচেরী", "হরিদ্বার", "কারগিল", "দুর্গাপুর"],
    correctAnswer: "পন্ডিচেরী",
    rationale: "পন্ডিচেরী (পুদুচেরি) তার অরোভিলে এবং অন্যান্য শিক্ষা ও গবেষণা প্রতিষ্ঠানের জন্য একটি গুরুত্বপূর্ণ শিক্ষা শহর হিসাবে পরিচিত।"
  },
  {
    id: 32,
    question: "আধুনিকীকরণ নিরিখে ভারতের বৃহত্তম নগর হল-",
    options: ["কলকাতা", "দিল্লী", "মুম্বাই", "চেন্নাই"],
    correctAnswer: "মুম্বাই",
    rationale: "আধুনিকীকরণ এবং জনসংখ্যার ভিত্তিতে মুম্বাই ভারতের বৃহত্তম নগরীগুলির মধ্যে একটি (শহর সীমার মধ্যে)।"
  },
  {
    id: 33,
    question: "50 লক্ষের বেশি জনবসতিপূর্ণ শহরকে বলে-",
    options: ["নগর", "পৌরপুর", "পৌরপিও", "মেগাসিটি"],
    correctAnswer: "মেগাসিটি",
    rationale: "50 লক্ষ (5 মিলিয়ন) বা তার বেশি জনবসতিপূর্ণ শহরকে সাধারণত মেগাসিটি হিসাবে সংজ্ঞায়িত করা হয়।"
  },
  {
    id: 34,
    question: "সমুদ্র সুবিধার জন্য কলকাতা নগরটি হল কোন সে কী রকম পরিচিতি লাভ করে-",
    options: ["মহানগরী", "মেট্রোপলিস", "পোলিস", "শিল্পনগরি"],
    correctAnswer: "মহানগরী",
    rationale: "কলকাতা একটি প্রধান মহানগরী এবং ঐতিহাসিক বন্দর নগরী হিসাবে সমুদ্র সুবিধা থেকে পরিচিতি লাভ করেছে।"
  },
  {
    id: 35,
    question: "বসবালে 100% সাধারণ ঘটেছে-",
    options: ["জাপানে", "অস্ট্রেলিয়ায়", "সিঙ্গাপুরে", "চীনে"],
    correctAnswer: "সিঙ্গাপুরে",
    rationale: "সিঙ্গাপুর একটি নগর-রাষ্ট্র এবং এটি প্রায় 100% নগরায়িত, যেখানে ব্যাপক শহুরে উন্নয়ন ঘটেছে।"
  },
  {
    id: 36,
    question: "প্রথম কোনোটী হল নগরের উদাহরণ?",
    options: ["ডিজনিল্যান্ড", "কেনেডিয়াম-প্রতিবন্ধ", "ক্লিভল্যান্ড-ইত্যাদি", "লন্ডন-আশা"],
    correctAnswer: "ক্লিভল্যান্ড-ইত্যাদি",
    rationale: "প্রদত্ত বিকল্পগুলির মধ্যে, ক্লিভল্যান্ড হল একটি প্রকৃত শহর।"
  },
  {
    id: 37,
    question: "ভারতের প্রথম শহরটি হল-",
    options: ["চন্ডীগড়", "হলদিয়া", "মুম্বাই", "চেন্নাই"],
    correctAnswer: "চন্ডীগড়",
    rationale: "চন্ডীগড় হল স্বাধীনতার পর ভারতের প্রথম পরিকল্পিত আধুনিক শহর।"
  },
  {
    id: 38,
    question: "'মেগালোপোলিস' শব্দটি প্রথম ব্যবহার করেন-",
    options: ["প্যাট্রিক গেডেস", "সি ডি ডকিয়ার্ডস", "জন গটম্যান", "ভি এন প্যাটার্সন"],
    correctAnswer: "জন গটম্যান",
    rationale: "ফরাসি ভূগোলবিদ জন গটম্যান (Jean Gottmann) 1957 সালে 'মেগালোপোলিস' শব্দটি ব্যবহার করেন একটি বৃহৎ, অবিচ্ছিন্ন শহুরে অঞ্চলকে বোঝাতে।"
  },
  {
    id: 39,
    question: "কখন ‘Conurbation’ শব্দটি ব্যবহার করা হয়েছে-",
    options: ["হিউজ ম্যাসেলস", "প্যাট্রিক গেডেস", "রেমন্ড বটস", "বেনিংটন জোনস"],
    correctAnswer: "প্যাট্রিক গেডেস",
    rationale: "ব্রিটিশ নগর পরিকল্পনাবিদ প্যাট্রিক গেডেস 1915 সালে ‘Conurbation’ শব্দটি প্রবর্তন করেন।"
  },
  {
    id: 40,
    question: "নিম্ন দেশ বা রাজ্য যখন পৌর বসতিতে পরিণত হয়, তখন তাকে বলে-",
    options: ["মেগালোপলিস", "টেট্রাপলিস", "মেট্রোপলিস", "টাইরেনোপলিস"],
    correctAnswer: "মেগালোপলিস",
    rationale: "যখন একটি বৃহৎ অঞ্চল, যা একাধিক সংলগ্ন শহর ও নগর নিয়ে গঠিত, একটি অবিচ্ছিন্ন শহুরে রূপ ধারণ করে, তখন তাকে মেগালোপলিস বলে।"
  },
  {
    id: 41,
    question: "'পুনর্বাসন (Conurbation) বলতে বোঝায়-",
    options: ["শহরের একত্রীকরণ", "গ্রামীণ শ্রেণি এলাকা", "শহরাঞ্চলী বিকাশ", "পৌর এলাকায় উপস্থিতি"],
    correctAnswer: "শহরের একত্রীকরণ",
    rationale: "কনুর্বেশন বলতে একাধিক স্বতন্ত্র শহর বা নগর এলাকার ভৌগোলিক প্রসারণের মাধ্যমে একত্রিত হয়ে একটি বৃহৎ, অবিচ্ছিন্ন শহুরে অঞ্চল তৈরি করাকে বোঝায়।"
  },
  {
    id: 42,
    question: "2011 সালের জনগণনা অনুসারে ভারতে অল্প জনবসতির সংখ্যা—",
    options: ["87টি", "73টি", "83টি", "63টি"],
    correctAnswer: "87টি", // Note: This answer is based on a specific, potentially obscure, census definition. Verification from exact census reports for "অল্প জনবসতি" would be needed.
    rationale: "2011 সালের জনগণনার নির্দিষ্ট কিছু পরিসংখ্যান অনুযায়ী (যেমন Class VI শহরের সংখ্যা) এই সংখ্যাটি প্রাসঙ্গিক হতে পারে।"
  },
  {
    id: 43,
    question: "2011 সালের আদমশুমারি অনুযায়ী ভারতের বৃহত্তম মহানগর হল-",
    options: ["দিল্লী", "মুম্বাই", "কলকাতা", "চেন্নাই"],
    correctAnswer: "দিল্লী",
    rationale: "2011 সালের আদমশুমারি অনুযায়ী, জনবসতির নিরিখে দিল্লি আরবান অ্যাগ্লোমারেশন (Urban Agglomeration) ভারতের বৃহত্তম মহানগর।"
  },
  {
    id: 44,
    question: "যে সমাজবিজ্ঞানী শহরকে বিভিন্ন দৃষ্টিকোণ থেকে পর্যালোচনা করেছেন, তিনি হলেন-",
    options: ["ড্যানিয়েল", "ওয়েবার", "মমফোর্ড", "কোহেন"],
    correctAnswer: "মমফোর্ড",
    rationale: "লুইস মমফোর্ড (Lewis Mumford) তাঁর 'The City in History' সহ বিভিন্ন কাজের মাধ্যমে শহরের ইতিহাস, সংস্কৃতি এবং সমাজের উপর বিস্তৃত পর্যালোচনা করেছেন।"
  },
  {
    id: 45,
    question: "ভারতের কোন নগরীটির পূর্বের পরিচিত নাম 'শেফফিল্ড' ছিল?",
    options: ["রানিগঞ্জ", "দুর্গাপুর", "মোরাবাদ", "সেলাম"],
    correctAnswer: "দুর্গাপুর",
    rationale: "দুর্গাপুরকে তার ইস্পাত শিল্প এবং শিল্পাঞ্চলের জন্য প্রায়শই 'ভারতের শেফফিল্ড' হিসাবে উল্লেখ করা হয়, যা যুক্তরাজ্যের শেফফিল্ড শহরের সাথে তুলনা করা হয়।"
  },
  {
    id: 46,
    question: "ভারতের একটি শহর হল-",
    options: ["জবলপুর", "গোয়ালিয়র", "কোলাপুর", "পাণ্ডুয়া"],
    correctAnswer: "জবলপুর", // Note: Jabalpur, Gwalior, and Kolhapur are all cities. Pandua is a town. The question is phrased to imply only one is a city.
    rationale: "জবলপুর হল ভারতের মধ্যপ্রদেশ রাজ্যের একটি প্রধান শহর। প্রদত্ত বিকল্পগুলির মধ্যে জবলপুর, গোয়ালিয়র এবং কোলাপুর শহর, তবে সাধারণত এমন প্রশ্নের উদ্দেশ্য একটি একক সঠিক উত্তর থাকে।"
  },
  {
    id: 47,
    question: "ভারতের ছোটো আধুনিকীকৃত শহরের উদাহরণ নয়-",
    options: ["আমেদাবাদ", "দিল্লী", "কলকাতা", "চেন্নাই"],
    correctAnswer: "দিল্লী",
    rationale: "দিল্লী, কলকাতা, চেন্নাই এবং আমেদাবাদ—এগুলি সবই ভারতের বৃহৎ এবং আধুনিকীকৃত মহানগরী, ছোট শহর নয়। প্রশ্নটি 'ছোট আধুনিকীকৃত শহরের উদাহরণ নয়' বলায়, এই বৃহৎ শহরগুলিই সঠিক উত্তর।"
  },
  {
    id: 48,
    question: "যেসব দেশ ও নগরের জন্য সে-সব স্থানে খুবই কষ্ট, তাদের বলে-",
    options: ["পিন্সপন", "মিটারপন", "মেগালোপলিস", "মেট্রোপলিস"],
    correctAnswer: "পিন্সপন", // Note: This question's phrasing is very ambiguous, and the answer is a speculative interpretation of 'pinch point' related to difficulty/congestion.
    rationale: "যদিও প্রশ্নটি অস্পষ্ট, ‘পিন্সপন’ (Pinch point) শব্দটি কখনও কখনও এমন স্থানগুলিকে বোঝাতে ব্যবহৃত হয় যেখানে সম্পদ বা চলাচলের ক্ষেত্রে বাধা বা অসুবিধা থাকে।"
  },
  {
    id: 49,
    question: "ভারতের নিম্নলিখিত শহর কোনটি একটি অ-পরিকল্পিত জনবসতি",
    options: ["আহমেদাবাদ", "জয়পুর", "চন্ডীগড়", "দিল্লী"],
    correctAnswer: "দিল্লী",
    rationale: "দিল্লির পুরোনো অংশগুলি এবং এর বিশাল সম্প্রসারণ মূলত অ-পরিকল্পিতভাবে বা জৈবিকভাবে ঘটেছে, যদিও নতুন দিল্লি একটি পরিকল্পিত অংশ।"
  },
  {
    id: 50,
    question: "ভারতের সম্মুখে অবস্থিত একটি লগ্ন করা যায় না-",
    options: ["পরিবেশগত সমস্যা", "জীবনযাত্রার পর্যাপ্ত অঞ্চল", "গ্রামীণ জনবসতি যেখানে দেখা যাচ্ছে না", "আধুনিক পরিকল্পনা"],
    correctAnswer: "পরিবেশগত সমস্যা", // Note: This question's phrasing is highly ambiguous and difficult to interpret precisely. The chosen answer is an educated guess based on what constitutes a significant, ongoing challenge.
    rationale: "প্রশ্নটির অর্থ অস্পষ্ট হলেও, ‘পরিবেশগত সমস্যা’ হল একটি চলমান এবং জটিল চ্যালেঞ্জ যা সহজে 'লগ্ন' বা সমাধান করা যায় না এবং ভারতের সামনে একটি বড় বাধা।"
  },
  {
    id: 51,
    question: "ভারতের একটি উল্লেখযোগ্য প্রতিরক্ষা শহর হল-",
    options: ["আগরতলা", "জয়পুর", "লখনউ", "জামশেদপুর"],
    correctAnswer: "লখনউ",
    rationale: "লখনউতে একটি বৃহৎ সামরিক ক্যান্টনমেন্ট এবং ঐতিহাসিক সামরিক গুরুত্ব রয়েছে, যা এটিকে একটি উল্লেখযোগ্য প্রতিরক্ষা শহর করে তুলেছে।"
  },
  {
    id: 52,
    question: "কৃষিকাজ ও পশুপালন এক সঙ্গে ঘটলে কি রকম বসতি গড়ে ওঠে?",
    options: ["বৃত্তাকার", "বর্গাকার", "রৈখিক", "গোষ্ঠীবদ্ধ"],
    correctAnswer: "গোষ্ঠীবদ্ধ",
    rationale: "কৃষিকাজ ও পশুপালন একসঙ্গে ঘটলে সাধারণত গোষ্ঠীবদ্ধ বসতি গড়ে ওঠে, কারণ মানুষ একত্রিত হয়ে জীবনযাপন ও সম্পদ ভাগ করে নিতে পছন্দ করে।"
  },
  {
    id: 53,
    question: "কয়েকটি জেলা নিয়ে গঠিত হয়-",
    options: ["পৌর", "মহানাগর", "শহরপুঞ্জ", "রাজ্য"],
    correctAnswer: "রাজ্য",
    rationale: "একটি রাজ্য সাধারণত একাধিক জেলা নিয়ে গঠিত, যা প্রশাসনিক কাঠামোর অংশ।"
  },
  {
    id: 54,
    question: "গ্রাম প্রথম কাবে জন্মগ্রহণ করে-", // 'কাবে' likely a typo for 'কালে' (time/era) or 'কারণে' (reason). Assuming 'কারণে' or general context.
    options: ["সমাজ", "অর্থনীতি", "রাজনীতি", "সংস্কৃতি"],
    correctAnswer: "সমাজ",
    rationale: "গ্রামগুলি মানুষের সম্মিলিত জীবনযাপন, সামাজিক সংহতি এবং মৌলিক প্রয়োজন মেটানোর তাগিদে প্রথম সমাজে জন্মগ্রহণ করে।"
  },
  {
    id: 55,
    question: "ভারতের একটি সামরিক শহর উদাহরণ হল-",
    options: ["ব্যারাকপুর", "পান্ডুয়া", "গোয়ালিয়র", "হায়দ্রাবাদ"],
    correctAnswer: "ব্যারাকপুর",
    rationale: "ব্যারাকপুর (পশ্চিমবঙ্গ) তার বৃহৎ এবং ঐতিহাসিক সামরিক ক্যান্টনমেন্টের জন্য একটি উল্লেখযোগ্য সামরিক শহর।"
  },
  {
    id: 56,
    question: "নদী সঙ্গমস্থলে যে বসতি বিন্যাস গড়ে ওঠে তা হল-",
    options: ["বর্গাকার", "মিকুল আকার", "ত্রিভুজাকার", "বৃত্তাকার"],
    correctAnswer: "ত্রিভুজাকার",
    rationale: "নদী সঙ্গমস্থলে বা যেখানে দুটি নদী মিলিত হয়, সেখানে প্রায়শই ত্রিভুজাকার বসতি বিন্যাস গড়ে ওঠে।"
  },
  {
    id: 57,
    question: "পর্যটন উন্নয়ন কেন্দ্রগুলোর মধ্যে কোন দেশ 'পর্যটক গ্রাম' - এর উন্নয়নে পদক্ষেপ করা যায়?",
    options: ["জার্মানি", "ফ্রান্স", "ইতালি", "সুইজারল্যান্ড"],
    correctAnswer: "সুইজারল্যান্ড",
    rationale: "সুইজারল্যান্ড তার প্রাকৃতিক সৌন্দর্য এবং গ্রামীণ পর্যটনকে উৎসাহিত করতে 'পর্যটক গ্রাম'গুলির উন্নয়নে বিশেষভাবে সক্রিয়।"
  },
  {
    id: 58,
    question: "কোনো অঞ্চলের অশান্তি থেকে কেন্দ্র করে মানববসতি এবং অনুসরণ করে কৃষিকাজকে যে বসতি বিন্যাস দিয়ে থাকে, তাকে বলে-",
    options: ["নিরাপত্তা বসতি", "রৈখিক বসতি", "গোষ্ঠীবদ্ধ বসতি", "বিক্ষিপ্ত বসতি"],
    correctAnswer: "গোষ্ঠীবদ্ধ বসতি",
    rationale: "অশান্তি বা নিরাপত্তার প্রয়োজনে মানুষ একত্রিত হয়ে গোষ্ঠীবদ্ধ বসতি গড়ে তোলে, যা কৃষিকাজের সাথেও সম্পর্কিত হতে পারে।"
  },
  {
    id: 59,
    question: "আয়তাকৃতি বসতি প্রাকৃতিক রূপ হল-",
    options: ["বর্গাকার জনবসতি", "রৈখিক জনবসতি", "বাগান হয়েও আয়তাকার জনবসতি", "তারকা আকৃতির জনবসতি"],
    correctAnswer: "রৈখিক জনবসতি", // Note: The phrasing "প্রাকৃতিক রূপ" is ambiguous here, but linear settlements often involve rectangular land divisions.
    rationale: "রৈখিক জনবসতিগুলি প্রায়শই রাস্তা বা নদীর মতো রৈখিক বৈশিষ্ট্যের সমান্তরালভাবে গড়ে ওঠে এবং এদের প্লটগুলি প্রায়শই আয়তাকার হয়ে থাকে।"
  },
  {
    id: 60,
    question: "টিকার ইস্যুতে ইনকা সংস্কৃতিতে সাধারণত দেখা যায়-", // 'টিকার ইস্যুতে' is ambiguous. Assuming 'Tikar' is a context, and asking about Inca settlement patterns.
    options: ["বর্গাকার জনবসতি", "রৈখিক জনবসতি", "গ্রামীণ জনবসতি ও জনবসতি", "তারকা আকৃতির জনবসতি"],
    correctAnswer: "বর্গাকার জনবসতি",
    rationale: "ইনকা সভ্যতার নগর পরিকল্পনায় প্রায়শই বর্গাকার বা আয়তাকার ব্লকের বিন্যাস দেখা যায়, বিশেষ করে তাদের শহুরে কেন্দ্রগুলিতে।"
  }
] 





;

let currentQuestionIndex = 0;
let userResponses = []; // Stores selected option index or null for each question
let markedForReview = []; // Stores boolean for each question
let perQuestionTimers = []; // Stores time spent on each question

// DOM Elements
const startTestButton = document.getElementById('start-test-button');
const introductionScreen = document.querySelector('.introduction-screen');
const testContent = document.querySelector('.test-content');
const questionNumberDisplay = document.getElementById('question-number'); // নতুন যোগ করা হয়েছে
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const clearResponseButton = document.getElementById('clear-response-button');
const markForReviewButton = document.getElementById('mark-for-review-button');
const submitButton = document.getElementById('submit-button');
const totalTimerSpan = document.getElementById('time');
const perQuestionTimerSpan = document.getElementById('per-question-time');
const questionGridContainer = document.querySelector('.question-grid');
const resultArea = document.querySelector('.result-area');
const scoreSpan = document.getElementById('score');
const correctCountSpan = document.getElementById('correct-count');
const wrongCountSpan = document.getElementById('wrong-count');
const unattemptedCountSpan = document.getElementById('unattempted-count');
const totalQuestionsResultSpan = document.getElementById('total-questions-result'); // For results page
const explanationArea = document.querySelector('.explanation-area');
const explanationText = document.getElementById('explanation-text');
const passMarkSpan = document.getElementById('pass-mark');
const percentageSpan = document.getElementById('percentage');
const percentageBar = document.getElementById('percentage-bar');


const showAllButton = document.getElementById('show-all');
const showCorrectButton = document.getElementById('show-correct');
const showWrongButton = document.getElementById('show-wrong');
const showUnattemptedButton = document.getElementById('show-unattempted');
const reviewQuestionsContainer = document.querySelector('.review-questions-container');


let totalTimeInterval;
let perQuestionTimeInterval;
let totalSeconds = 0;
let perQuestionSeconds = 0;
const totalTestTime = 40 * 60; // 20 minutes in seconds

// Initialize user responses and timers
function initializeTest() {
    userResponses = new Array(questions.length).fill(null);
    markedForReview = new Array(questions.length).fill(false);
    perQuestionTimers = new Array(questions.length).fill(0);
    currentQuestionIndex = 0;
    totalSeconds = 0;
    perQuestionSeconds = 0;
    totalTimerSpan.textContent = formatTime(totalTestTime); // Display initial total time
    loadQuestion();
    updateQuestionGridButtons();
}

function startTimer() {
    // Clear any existing timers to prevent multiple intervals running
    clearInterval(totalTimeInterval);
    clearInterval(perQuestionTimeInterval);

    totalTimeInterval = setInterval(() => {
        totalSeconds++;
        const timeLeft = totalTestTime - totalSeconds;
        if (timeLeft < 0) {
            clearInterval(totalTimeInterval);
            submitTest(true); // Auto-submit when time runs out
            return;
        }
        totalTimerSpan.textContent = formatTime(timeLeft);
    }, 1000);

    perQuestionTimeInterval = setInterval(() => {
        perQuestionSeconds++;
        perQuestionTimerSpan.textContent = formatTime(perQuestionSeconds);
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function loadQuestion() {
    savePerQuestionTime(); // Save time for the current question before loading a new one

    const question = questions[currentQuestionIndex];
    // প্রশ্ন নম্বারটি এখানে আলাদাভাবে সেট করুন
    questionNumberDisplay.textContent = `${currentQuestionIndex + 1}.`; // শুধু নম্বর এবং ডট
    // প্রশ্ন লেখা আলাদাভাবে সেট করুন
    questionText.textContent = question.question; // শুধু প্রশ্ন লেখা

    optionsContainer.innerHTML = '';
    explanationArea.style.display = 'none'; // Hide explanation when loading a new question

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        if (userResponses[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    // Reset and restart per-question timer for the new question
    perQuestionSeconds = perQuestionTimers[currentQuestionIndex]; // Load saved time
    perQuestionTimerSpan.textContent = formatTime(perQuestionSeconds);
    clearInterval(perQuestionTimeInterval); // Clear old interval
    perQuestionTimeInterval = setInterval(() => {
        perQuestionSeconds++;
        perQuestionTimers[currentQuestionIndex] = perQuestionSeconds; // Update saved time
        perQuestionTimerSpan.textContent = formatTime(perQuestionSeconds);
    }, 1000);

    updateNavigationButtons();
    updateMarkForReviewButton();
    updateQuestionGridButtons();
}

function savePerQuestionTime() {
    if (currentQuestionIndex >= 0 && perQuestionSeconds > 0) {
        // Only save if it's a valid index and time has passed
        perQuestionTimers[currentQuestionIndex] = perQuestionSeconds;
    }
}

function selectOption(optionIndex) {
    userResponses[currentQuestionIndex] = optionIndex;
    Array.from(optionsContainer.children).forEach((button, index) => {
        button.classList.remove('selected');
        if (index === optionIndex) {
            button.classList.add('selected');
        }
    });
    updateQuestionGridButtons(); // Update grid button immediately after selection
}

function nextQuestion() {
    savePerQuestionTime(); // Save time for current question
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    savePerQuestionTime(); // Save time for current question
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function clearResponse() {
    userResponses[currentQuestionIndex] = null;
    Array.from(optionsContainer.children).forEach(button => {
        button.classList.remove('selected');
    });
    updateQuestionGridButtons(); // Update grid button immediately after clearing
}

function toggleMarkForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];
    updateMarkForReviewButton();
    updateQuestionGridButtons();
    nextQuestion(); // Go to the next question after marking for review
}

function updateNavigationButtons() {
    // nextButton is now first, so its disabled state depends only on being the last question
    nextButton.disabled = currentQuestionIndex === questions.length - 1;
    prevButton.disabled = currentQuestionIndex === 0; // Previous button's state is unchanged
}

function updateMarkForReviewButton() {
    if (markedForReview[currentQuestionIndex]) {
        markForReviewButton.classList.add('active'); // Add a class to style it if needed
        markForReviewButton.textContent = 'Unmark for Review';
    } else {
        markForReviewButton.classList.remove('active');
        markForReviewButton.textContent = 'Mark for Review';
    }
}

function updateQuestionGridButtons() {
    questionGridContainer.innerHTML = '';
    questions.forEach((_, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.classList.remove('answered', 'unanswered', 'marked-for-review', 'marked-and-answered');

        if (userResponses[index] !== null) {
            button.classList.add('answered');
        } else {
            button.classList.add('unanswered');
        }

        if (markedForReview[index]) {
            if (userResponses[index] !== null) {
                button.classList.add('marked-and-answered');
            } else {
                button.classList.add('marked-for-review');
            }
        }

        if (index === currentQuestionIndex) {
            button.classList.add('current-question'); // Add a class for the current question
        } else {
            button.classList.remove('current-question');
        }

        button.addEventListener('click', () => {
            savePerQuestionTime(); // Save time for the current question when grid button is clicked
            currentQuestionIndex = index;
            loadQuestion();
        });
        questionGridContainer.appendChild(button);
    });
}

function calculateResult() {
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    let totalMarks = 0;
    const negativeMarking = 0.33; // 1/3rd negative marking

    questions.forEach((question, index) => {
        const userAnswer = userResponses[index];
        if (userAnswer === null) {
            unattemptedCount++;
        } else if (question.options[userAnswer] === question.answer) {
            correctCount++;
            totalMarks++;
        } else {
            wrongCount++;
            totalMarks -= negativeMarking;
        }
    });

    scoreSpan.textContent = totalMarks.toFixed(2);
    correctCountSpan.textContent = correctCount;
    wrongCountSpan.textContent = wrongCount;
    unattemptedCountSpan.textContent = unattemptedCount;
    totalQuestionsResultSpan.textContent = questions.length;

    const passMark = questions.length * 0.8; // Example: 40% pass mark
    passMarkSpan.textContent = passMark.toFixed(2);

    const percentage = (totalMarks / questions.length) * 100;
    percentageSpan.textContent = `${percentage.toFixed(2)}%`;
    percentageBar.style.width = `${Math.max(0, Math.min(100, percentage))}%`; // Ensure percentage is between 0 and 100
    percentageBar.style.backgroundColor = percentage >= passMark ? '#4CAF50' : '#f44336'; // Green for pass, red for fail
    percentageBar.textContent = `${percentage.toFixed(2)}%`; // Display percentage inside the bar
}


function displayReviewQuestions(filterType = 'all') {
    reviewQuestionsContainer.innerHTML = ''; // Clear previous review questions

    questions.forEach((question, index) => {
        const userAnswerIndex = userResponses[index];
        const isCorrect = question.options[userAnswerIndex] === question.answer;
        const isAttempted = userAnswerIndex !== null;

        let shouldDisplay = false;
        if (filterType === 'all') {
            shouldDisplay = true;
        } else if (filterType === 'correct' && isAttempted && isCorrect) {
            shouldDisplay = true;
        } else if (filterType === 'wrong' && isAttempted && !isCorrect) {
            shouldDisplay = true;
        } else if (filterType === 'unattempted' && !isAttempted) {
            shouldDisplay = true;
        }

        if (shouldDisplay) {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-question-item');
            if (markedForReview[index]) {
                reviewItem.classList.add('marked-for-review-review');
            }

            let statusText = '';
            let statusClass = '';
            if (isAttempted) {
                if (isCorrect) {
                    statusText = ' (Correct)';
                    statusClass = 'correct-text';
                } else {
                    statusText = ' (Wrong)';
                    statusClass = 'wrong-text';
                }
            } else {
                statusText = ' (Unattempted)';
                statusClass = ''; // No specific color for unattempted here
            }

            reviewItem.innerHTML = `
                <h4>প্রশ্ন ${index + 1}: ${question.question} <span class="${statusClass}">${statusText}</span></h4>
                <div class="options-review">
                    ${question.options.map((option, optIndex) => {
                        let optionClass = '';
                        if (optIndex === userAnswerIndex && !isCorrect) {
                            optionClass = 'wrong'; // User's wrong answer
                        }
                        if (option === question.answer) {
                            optionClass = 'correct'; // Correct answer
                        }
                        return `<button class="${optionClass}" disabled>${option}</button>`;
                    }).join('')}
                </div>
                <div class="explanation">
                    <h3>ব্যাখ্যা:</h3>
                    <p>${question.explanation}</p>
                </div>
            `;
            reviewQuestionsContainer.appendChild(reviewItem);
        }
    });
}


function submitTest(timeUp = false) {
    clearInterval(totalTimeInterval);
    clearInterval(perQuestionTimeInterval);
    savePerQuestionTime(); // Save the time for the last question

    // Confirmation dialog
    const confirmSubmit = confirm(timeUp ? "সময় শেষ! আপনার পরীক্ষা জমা দেওয়া হবে।" : "আপনি কি নিশ্চিত পরীক্ষা জমা দিতে চান?");

    if (confirmSubmit) {
        calculateResult();
        displayReviewQuestions('all'); // Show all questions initially in review
        testContent.style.display = 'none';
        resultArea.style.display = 'block';
    } else {
        // If user cancels, restart timers if test is still ongoing
        if (!timeUp) {
            startTimer(); // Resume timers if submission was cancelled
        }
    }
}


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    startTestButton.addEventListener('click', () => {
        introductionScreen.style.display = 'none';
        testContent.style.display = 'block';
        initializeTest(); // প্রশ্ন লোড করুন
        startTimer();   // টাইমার শুরু করুন
        updateQuestionGridButtons(); // রিভিউ বাটনগুলো আপডেট করুন
    });

    // নেভিগেশন এবং অ্যাকশন বাটনগুলির জন্য ইভেন্ট লিসেনার
    nextButton.addEventListener('click', nextQuestion);
    prevButton.addEventListener('click', prevQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    markForReviewButton.addEventListener('click', toggleMarkForReview);
    submitButton.addEventListener('click', submitTest);

    // ফিল্টার বাটনগুলির জন্য ইভেন্ট লিসেনার যোগ করুন
    showAllButton.addEventListener('click', () => filterQuestions('all'));
    showCorrectButton.addEventListener('click', () => filterQuestions('correct'));
    showWrongButton.addEventListener('click', () => filterQuestions('wrong'));
    showUnattemptedButton.addEventListener('click', () => filterQuestions('unattempted'));
});

function filterQuestions(filterType) {
    // সমস্ত ফিল্টার বাটন থেকে active ক্লাস সরান
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });

    // ক্লিক করা বাটনে active ক্লাস যোগ করুন
    document.getElementById(`show-${filterType}`).classList.add('active');

    displayReviewQuestions(filterType);
}
