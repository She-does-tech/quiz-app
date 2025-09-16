// ================= CSS QUESTIONS =================
const questions = [
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["font-style", 
        "text-color", 
        "color", 
        "font-color"],
      answer: 2
    },
    {
      question: "What does the z-index property in CSS control?",
      options: [
        "The transparency of an element",
        "The stack order of elements",
        "The font size of text",
        "The position of an element"
      ],
      answer: 1
    },
    {
      question: "Which CSS property makes text bold?",
      options: ["font-weight", 
        "font-style", 
        "text-decoration", 
        "font-bold"],
      answer: 0
    },
    {
      question: "Which unit in CSS is relative to the size of the root element?",
      options: ["em", 
        "rem", 
        "px", 
        "%"],
      answer: 1
    },
    {
      question: "Which CSS property is used to create space between elements?",
      options: ["padding", 
        "margin", 
        "spacing", 
        "border"],
      answer: 1
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
  