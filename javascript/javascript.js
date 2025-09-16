
// ================= JAVASCRIPT QUESTIONS =================
const questions = [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: [
        "var", 
        "let", 
        "const", 
        "All of the above"],
      answer: 3
    },
    {
      question: "What will typeof null return in JavaScript?",
      options: [
        "null", 
        "object", 
        "undefined", 
        "string"],
      answer: 1
    },
    {
      question: "Which method converts a JSON string into a JavaScript object?",
      options: ["JSON.parse()", 
        "JSON.stringify()", 
        "JSON.object()", 
        "JSON.convert()"],
      answer: 0
    },
    {
      question: "Which symbol is used for strict equality in JavaScript?",
      options: ["==", 
        "===", 
        "!=", 
        "!=="],
      answer: 1
    },
    {
      question: "Which function is used to print something to the console in JavaScript?",
      options: ["console.write()", 
        "log.console()", 
        "console.log()", 
        "print()"],
      answer: 2
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
  