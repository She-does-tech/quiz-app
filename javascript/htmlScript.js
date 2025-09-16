const questions = [
    {
      question: "What is full meaning of HTML?",
      options: [
        "Hyper Transfer Markup Language",
        "Hyper Text Markdown Language",
        "Hyper Text Markup Language",
        "High Text Machine Language"
      ],
      answer: 2
    },
  
    {
      question:
        "Which HTML element is used to declare metadata that cannot be displayed directly on the web page?",
      options: ["meta", "link", "script", "span"],
      answer: 0
    },
  
    {
      question:
        "What is the purpose of the sandbox attribute in the <iframe> element?",
      options: [
        "It sets a background for the iframe",
        "It allows external styling of iframe content",
        "It restricts the iframe's ability to run scripts and access content",
        "It improves iframe loading speed"
      ],
      answer: 2
    },
  
    {
      question:
        "What is the function of the contenteditable attribute in HTML?",
      options: [
        "Makes the element hidden from screen readers",
        "Allows the element's content to be edited by the user",
        "Adds a custom tooltip to the element",
        "Links the element to a CSS stylesheet"
      ],
      answer: 1
    },
  
    {
      question: "Which doctype declaration is used for HTML5 documents?",
      options: [
        "<!DOCTYPE html>",
        '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">',
        "<!DOCTYPE XHTML>",
        "<!DOCTYPE HTML5 PUBLIC>"
      ],
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
  