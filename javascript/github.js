const questions = [
    {
      question: "Which command is used to create a new Git repository?",
      options: ["git start", 
        "git init", 
        "git new", 
        "git create"],
      answer: 1
    },
    {
      question: "Which command is used to check the status of your repository?",
      options: ["git check", 
        "git status", 
        "git info", 
        "git log"],
      answer: 1
    },
    {
      question: "Which command is used to upload local changes to GitHub?",
      options: ["git upload", 
        "git push", 
        "git send", 
        "git commit"],
      answer: 1
    },
    {
      question: "Which command is used to download a repository from GitHub?",
      options: ["git clone", 
        "git copy", 
        "git fork", 
        "git pull"],
      answer: 0
    },
    {
      question: "Which command is used to see the commit history?",
      options: ["git history", 
        "git log", 
        "git commits", 
        "git show"],
      answer: 1
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
  