// ================= BOOTSTRAP QUESTIONS =================
const questions = [
    {
      question: "Which class in Bootstrap is used to make an image responsive?",
      options: ["img-fluid", 
        "responsive-img", 
        "img-responsive", 
        "image-fluid"],
      answer: 0
    },
    {
      question: "Which Bootstrap class is used to create a navigation bar?",
      options: ["nav", 
        "navbar", 
        "navigation", 
        "menu"],
      answer: 1
    },
    {
      question: "What is the default grid system in Bootstrap based on?",
      options: ["8 columns", 
        "10 columns", 
        "12 columns", 
        "16 columns"],
      answer: 2
    },
    {
      question: "Which Bootstrap class is used for primary buttons?",
      options: ["btn-main", 
        "btn-primary", 
        "button-primary", 
        "btn-main-primary"],
      answer: 1
    },
    {
      question: "Which Bootstrap utility class is used for margin spacing?",
      options: ["m-", 
        "p-", 
        "margin-", 
        "space-"],
      answer: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("nextButton");
  const scoreElement = document.getElementById("result");
  
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";
      
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("option");
      button.addEventListener("click", () => selectAnswer(index));
      optionsElement.appendChild(button);
    });
  
    nextButton.style.display = "none";
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");
    if (selectedIndex === currentQuestion.answer) {
      options[selectedIndex].classList.add("correct");
      score++;
    } else {
      options[selectedIndex].classList.add("wrong");
      options[currentQuestion.answer].classList.add("correct");
    }
    disableOptions();
  }
  
  function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => (option.disabled = true));
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.getElementById("quiz").classList.add("result");
    scoreElement.classList.remove("result");
    scoreElement.innerHTML =  `
      <h2>Result</h2>
      <p id="score">Your score: ${score}</p>
      <button onclick="quizReload()">Restart Quiz</button>
    `;
  }
  
  function quizReload () {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.classList.add("result");
    document.getElementById("quiz").classList.remove("result");
    loadQuestion();
  }
  
  loadQuestion();
  