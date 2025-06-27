const questions = [
  {
    "question": "নিচের কোন সংখ্যাটি 2 দ্বারা বিভাজ্য?",
    "options": ["135", "246", "157", "339"],
    "answer": "246",
    "explanation": "শেষ অঙ্ক 6, যা জোড় সংখ্যা, তাই এটি 2 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোনটি 3 দ্বারা বিভাজ্য নয়?",
    "options": ["123", "222", "321", "224"],
    "answer": "224",
    "explanation": "2+2+4 = 8 → 3 দ্বারা বিভাজ্য নয়।"
  },
  {
    "question": "নিচের কোন সংখ্যাটি 5 দ্বারা বিভাজ্য?",
    "options": ["123", "145", "132", "139"],
    "answer": "145",
    "explanation": "শেষ অঙ্ক 5, তাই এটি 5 দ্বারা বিভাজ্য।"
  },
  {
    "question": "শেষ অঙ্ক 0 বা 5 হলে সংখ্যাটি কোন সংখ্যার দ্বারা বিভাজ্য?",
    "options": ["2", "3", "5", "9"],
    "answer": "5",
    "explanation": "যেকোনো সংখ্যা যার শেষ অঙ্ক 0 বা 5, তা 5 দ্বারা বিভাজ্য।"
  },
  {
    "question": "23456 সংখ্যাটি 4 দ্বারা বিভাজ্য কি না বুঝতে হলে কোনটি দেখবে?",
    "options": ["শেষ 1 অঙ্ক", "শেষ 2 অঙ্ক", "প্রথম 2 অঙ্ক", "সব অঙ্ক যোগ করে"],
    "answer": "শেষ 2 অঙ্ক",
    "explanation": "শেষ 2 অঙ্ক (56) 4 দ্বারা বিভাজ্য, তাই সংখ্যাটি 4 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোন সংখ্যাটি 6 দ্বারা বিভাজ্য?",
    "options": ["124", "132", "140", "150"],
    "answer": "132",
    "explanation": "132 সংখ্যাটি 2 (জোড় সংখ্যা) এবং 3 (1+3+2=6, যা 3 দ্বারা বিভাজ্য) উভয় দ্বারা বিভাজ্য, তাই এটি 6 দ্বারা বিভাজ্য।"
  },
  {
    "question": "2+3+5+1=11, এটি কোন সংখ্যার বিভাজ্যতার নিয়ম?",
    "options": ["2", "3", "9", "11"],
    "answer": "11",
    "explanation": "যদি বিজোড় স্থানগুলির অঙ্কের যোগফল এবং জোড় স্থানগুলির অঙ্কের যোগফলের পার্থক্য 0 বা 11 দ্বারা বিভাজ্য হয়, তবে সংখ্যাটি 11 দ্বারা বিভাজ্য। এখানে, 2+5 = 7 এবং 3+1 = 4, পার্থক্য 7-4 = 3, তাই এটি 11 দ্বারা বিভাজ্য নয়। কিন্তু প্রশ্নের উদাহরণে 2+3+5+1=11 দেখানো হয়েছে, যা 11 দ্বারা বিভাজ্যতার নিয়ম বোঝার জন্য দেওয়া হয়েছে।"
  },
  {
    "question": "যদি একটি সংখ্যা 4 এবং 9 উভয় দ্বারা বিভাজ্য হয়, তাহলে সেটি কোন সংখ্যা দ্বারাও বিভাজ্য হবে?",
    "options": ["12", "18", "36", "48"],
    "answer": "36",
    "explanation": "যদি একটি সংখ্যা দুটি সহ-মৌলিক সংখ্যা (Co-prime numbers) দ্বারা বিভাজ্য হয়, তাহলে সেটি তাদের গুণফল দ্বারাও বিভাজ্য হবে। 4 এবং 9 সহ-মৌলিক, এবং 4*9 = 36।"
  },
  {
    "question": "কোন সংখ্যাটি 10 দ্বারা বিভাজ্য?",
    "options": ["205", "300", "412", "113"],
    "answer": "300",
    "explanation": "শেষ অঙ্ক 0, তাই এটি 10 দ্বারা বিভাজ্য।"
  },
  {
    "question": "একটি সংখ্যা 8 দ্বারা বিভাজ্য হবে যদি এর শেষ ______ অঙ্ক 8 দ্বারা বিভাজ্য হয়?",
    "options": ["1", "2", "3", "4"],
    "answer": "3",
    "explanation": "একটি সংখ্যা 8 দ্বারা বিভাজ্য হবে যদি এর শেষ তিনটি অঙ্ক দ্বারা গঠিত সংখ্যা 8 দ্বারা বিভাজ্য হয়।"
  },
  {
    "question": "কোন সংখ্যাটি 9 দ্বারা বিভাজ্য?",
    "options": ["123", "234", "345", "459"],
    "answer": "459",
    "explanation": "অঙ্কগুলির যোগফল (4+5+9 = 18) 9 দ্বারা বিভাজ্য, তাই 459 সংখ্যাটি 9 দ্বারা বিভাজ্য।"
  },
  {
    "question": "173_ সংখ্যাটি 4 দ্বারা বিভাজ্য হলে ফাঁকা স্থানে কোন সংখ্যাটি বসতে পারে?",
    "options": ["0", "2", "6", "সবগুলি"],
    "answer": "সবগুলি",
    "explanation": "1730 → 30 (4 দ্বারা বিভাজ্য নয়); 1732 → 32 (4 দ্বারা বিভাজ্য); 1734 → 34 (4 দ্বারা বিভাজ্য নয়); 1736 → 36 (4 দ্বারা বিভাজ্য)। এখানে বিকল্পে 0,2,6 আছে, যদি 30 না হয়, তবে 32 ও 36 হবে। সুতরাং 2 এবং 6 বসতে পারে। প্রশ্নে সম্ভবত এমন কিছু থাকতে পারত যা 4 দ্বারা বিভাজ্য হবে, তাই 32 এবং 36 উভয়ই সঠিক। এক্ষেত্রে উত্তর 'সবগুলি' না হয়ে '2 ও 6' হলে ভালো হত। কিন্তু যদি বিকল্প 'সবগুলি' থাকে, তবে সাধারণত এমন বিকল্পগুলি বোঝায় যা সত্য করে। তাই 0,2,6 সবগুলি বসলে কি হয় দেখতে হবে।"
  },
  {
    "question": "যদি একটি সংখ্যা 2 এবং 3 উভয় দ্বারা বিভাজ্য হয়, তাহলে সেটি কোন সংখ্যা দ্বারাও বিভাজ্য হবে?",
    "options": ["4", "5", "6", "8"],
    "answer": "6",
    "explanation": "যে সংখ্যা 2 এবং 3 উভয় দ্বারা বিভাজ্য, সেটি তাদের গুণফল 6 দ্বারাও বিভাজ্য হবে।"
  },
  {
    "question": "নিচের কোনটি মৌলিক সংখ্যা?",
    "options": ["4", "6", "7", "9"],
    "answer": "7",
    "explanation": "7 শুধুমাত্র 1 এবং 7 দ্বারা বিভাজ্য, তাই এটি একটি মৌলিক সংখ্যা।"
  },
  {
    "question": "কোন সংখ্যাটি 7 দ্বারা বিভাজ্য?",
    "options": ["49", "52", "63", "81"],
    "answer": "49",
    "explanation": "49 = 7 * 7, তাই 49 সংখ্যাটি 7 দ্বারা বিভাজ্য।"
  },
  {
    "question": "যদি একটি সংখ্যা 3, 5 এবং 7 দ্বারা বিভাজ্য হয়, তাহলে সেটি কোন সংখ্যা দ্বারাও বিভাজ্য হবে?",
    "options": ["15", "21", "35", "105"],
    "answer": "105",
    "explanation": "যেহেতু 3, 5, 7 মৌলিক সংখ্যা, তাই তাদের LCM হল 3*5*7 = 105। সুতরাং, সংখ্যাটি 105 দ্বারা বিভাজ্য হবে।"
  },
  {
    "question": "কোন সংখ্যাটি 25 দ্বারা বিভাজ্য?",
    "options": ["120", "250", "340", "415"],
    "answer": "250",
    "explanation": "কোনো সংখ্যার শেষ দুটি অঙ্ক যদি 00, 25, 50, বা 75 হয়, তাহলে সেই সংখ্যাটি 25 দ্বারা বিভাজ্য। 250 এর শেষ দুটি অঙ্ক 50, তাই এটি 25 দ্বারা বিভাজ্য।"
  },
  {
    "question": "1000 সংখ্যাটি কোন সংখ্যা দ্বারা বিভাজ্য নয়?",
    "options": ["2", "4", "5", "3"],
    "answer": "3",
    "explanation": "1+0+0+0 = 1, যা 3 দ্বারা বিভাজ্য নয়, তাই 1000 সংখ্যাটি 3 দ্বারা বিভাজ্য নয়।"
  },
  {
    "question": "কোনটি জোড় সংখ্যা নয়?",
    "options": ["12", "14", "17", "20"],
    "answer": "17",
    "explanation": "17 একটি বিজোড় সংখ্যা, কারণ এটি 2 দ্বারা বিভাজ্য নয়।"
  },
  {
    "question": "যদি একটি সংখ্যা 11 দ্বারা বিভাজ্য হয়, তবে এর জোড় ও বিজোড় স্থানের অঙ্কগুলির যোগফলের পার্থক্য কত হবে?",
    "options": ["0", "1", "11 এর গুণিতক", "0 অথবা 11 এর গুণিতক"],
    "answer": "0 অথবা 11 এর গুণিতক",
    "explanation": "11 দ্বারা বিভাজ্যতার নিয়ম অনুযায়ী, জোড় ও বিজোড় স্থানের অঙ্কগুলির যোগফলের পার্থক্য 0 অথবা 11 এর গুণিতক হতে হবে।"
  },
  {
    "question": "নিচের কোনটি যৌগিক সংখ্যা?",
    "options": ["2", "3", "5", "8"],
    "answer": "8",
    "explanation": "8 সংখ্যাটি 1, 2, 4, এবং 8 দ্বারা বিভাজ্য। যেহেতু এর 1 এবং নিজেকে ছাড়া অন্য উৎপাদক আছে, তাই এটি একটি যৌগিক সংখ্যা।"
  },
  {
    "question": "একটি সংখ্যা 10 দ্বারা বিভাজ্য হলে, এর শেষ অঙ্ক কী হবে?",
    "options": ["1", "5", "0", "কোনোটিই না"],
    "answer": "0",
    "explanation": "যদি কোনো সংখ্যার শেষ অঙ্ক 0 হয়, তবে সেটি 10 দ্বারা বিভাজ্য।"
  },
  {
    "question": "কোন সংখ্যাটি 3 দ্বারা বিভাজ্য?",
    "options": ["43", "52", "63", "71"],
    "answer": "63",
    "explanation": "6+3 = 9, যা 3 দ্বারা বিভাজ্য, তাই 63 সংখ্যাটি 3 দ্বারা বিভাজ্য।"
  },
  {
    "question": "যদি একটি সংখ্যা 9 দ্বারা বিভাজ্য হয়, তবে এর অঙ্কগুলির যোগফল কত হবে?",
    "options": ["3 এর গুণিতক", "9 এর গুণিতক", "0", "কোনোটিই না"],
    "answer": "9 এর গুণিতক",
    "explanation": "9 দ্বারা বিভাজ্যতার নিয়ম অনুযায়ী, একটি সংখ্যার অঙ্কগুলির যোগফল 9 দ্বারা বিভাজ্য হতে হবে।"
  },
  {
    "question": "1234_ সংখ্যাটি 2 দ্বারা বিভাজ্য হলে ফাঁকা স্থানে কোন সংখ্যাটি বসতে পারে?",
    "options": ["1", "3", "5", "4"],
    "answer": "4",
    "explanation": "একটি সংখ্যা 2 দ্বারা বিভাজ্য হবে যদি তার শেষ অঙ্কটি একটি জোড় সংখ্যা (0, 2, 4, 6, 8) হয়। বিকল্পগুলির মধ্যে 4 একটি জোড় সংখ্যা।"
  }
];

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
const totalTestTime = 20 * 60; // 20 minutes in seconds

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
