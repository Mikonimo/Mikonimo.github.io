const dubaiQuizData = [
    {
        question: "What is the tallest building in the world located in Dubai?",
        a: "Empire State Building",
        b: "Burj Khalifa",
        c: "Eiffel Tower",
        d: "Petronas Towers",
        correct: "b"
    },
    {
        question: "Which famous man-made island is shaped like a palm tree in Dubai?",
        a: "Palm Jumeirah",
        b: "The World Islands",
        c: "Palm Islands",
        d: "Bluewaters Island",
        correct: "a"
    },
    {
        question: "What is the traditional Arabic dress worn by men called?",
        a: "Sari",
        b: "Kandura",
        c: "Kimono",
        d: "Thobe",
        correct: "b"
    },
    {
        question: "Which desert safari activity is popular in Dubai?",
        a: "Skiing",
        b: "Sandboarding",
        c: "Surfing",
        d: "Mountain climbing",
        correct: "b"
    },
    {
        question: "Which shopping mall in Dubai is one of the largest in the world?",
        a: "Mall of America",
        b: "West Edmonton Mall",
        c: "The Dubai Mall",
        d: "Mall of the Emirates",
        correct: "c"
    }
];

const arushaQuizData = [
    {
        question: "What is the name of the largest volcano in Tanzania, located in the Ngorongoro Conservation Area?",
        a: "Mount Meru",
        b: "Mount Kilimanjaro",
        c: "Mount Oldoinyo Lengai",
        d: "Mount Longido",
        correct: "b"
    },
    {
        question: "Which national park in Tanzania is famous for the annual wildebeest migration?",
        a: "Serengeti National Park",
        b: "Tarangire National Park",
        c: "Lake Manyara National Park",
        d: "Arusha National Park",
        correct: "a"
    },
    {
        question: "What is the name of the indigenous tribe known for their distinctive customs and colorful attire in Tanzania?",
        a: "Zulu",
        b: "Masai",
        c: "Himba",
        d: "Hadzabe",
        correct: "b"
    },
    {
        question: "Which famous crater in Tanzania is known as the 'Eighth Wonder of the World'?",
        a: "Mount Kilimanjaro",
        b: "Ngorongoro Crater",
        c: "Mount Meru",
        d: "Olduvai Gorge",
        correct: "b"
    },
    {
        question: "What is the capital city of Tanzania?",
        a: "Nairobi",
        b: "Addis Ababa",
        c: "Dar es Salaam",
        d: "Kampala",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const chooseQuizContainer = document.getElementById("chooseQuizContainer");
const quizContainer = document.getElementById("q-cont");
const chooseDubaiButton = document.getElementById("choose-Dubai");
const chooseArushaButton = document.getElementById("choose-Arusha");

let currentQuiz = 0;
let score = 0;
let selectedQuizData = dubaiQuizData;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = selectedQuizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

const submitQuiz = () => {
    const answer = getSelected();
    if (answer) {
        if (answer === selectedQuizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < selectedQuizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
                <h2 style="color: purple;">You answered ${score}/${selectedQuizData.length} questions correctly</h2>
                <button onclick="location.reload()">Try the second quiz</button>
            `;
        }
    } else {
        alert('Please select an answer.');
    }
};

const startDubaiQuiz = () => {
    chooseQuizContainer.style.display = "none";
    quizContainer.style.display = "block"; // Show the quiz section
    loadQuiz(dubaiQuizData);
};

const startArushaQuiz = () => {
    chooseQuizContainer.style.display = "none";
    quizContainer.style.display = "block"; // Show the quiz section
    selectedQuizData = arushaQuizData;
    loadQuiz(selectedQuizData);
};

chooseDubaiButton.addEventListener("click", startDubaiQuiz);
chooseArushaButton.addEventListener("click", startArushaQuiz);


submitButton.addEventListener("click", submitQuiz);
