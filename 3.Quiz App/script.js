
const questions = [
  {
    question: "What is the correct syntax to create a new array in JavaScript?",
    answers: [
      { text: "var array = [];", correct: true },
      { text: "var array = {}", correct: false },
      { text: "var array = Array;", correct: false },
      { text: "var array = new Array[];", correct: false },
    ],
  },
  {
    question:
      "Which method is used to add one or more elements to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "What will the following code output? console.log(typeof null);",
    answers: [
      { text: "'null'", correct: false },
      { text: "'object'", correct: true },
      { text: "'undefined'", correct: false },
      { text: "'number'", correct: false },
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Laravel", correct: false },
      { text: "Django", correct: false },
      { text: "Spring", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/*", correct: false },
      { text: "#", correct: false },
      { text: "<!--", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "create myFunction()", correct: false },
      { text: "def myFunction()", correct: false },
    ],
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: [
      { text: "call myFunction()", correct: false },
      { text: "myFunction()", correct: true },
      { text: "call function myFunction()", correct: false },
      { text: "execute myFunction()", correct: false },
    ],
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onmouseover", correct: false },
      { text: "onchange", correct: false },
      { text: "onmouseclick", correct: false },
      { text: "onclick", correct: true },
    ],
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      { text: "v carName;", correct: false },
      { text: "variable carName;", correct: false },
      { text: "var carName;", correct: true },
      { text: "String carName;", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "*", correct: false },
      { text: "=", correct: true },
      { text: "-", correct: false },
      { text: "x", correct: false },
    ],
  },
];


const questionEle = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.textContent ='Next';
    showQuestion();
}


function showQuestion(){
    resetState();
    let currQues = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionEle.textContent = questionNo +". "+currQues.question ;

    currQues.answers.forEach(ans=>{
        const button = document.createElement("button");
        button.textContent = ans.text;
        button.classList.add("btn"); //add btn className to the button created
        answerBtns.appendChild(button);
        if(ans.correct){
            button.dataset.correct=ans.correct;
        }
        button.addEventListener('click',selectAns);
    })
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAns(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from
    (answerBtns.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display ="block";
}

function showScore(){
    resetState();
    questionEle.textContent = `You scored ${score} out of ${questions.length}!!`
    nextBtn.textContent = 'Play Again';
    nextBtn.style.display = "block";
}

function handleButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) showQuestion();

    else showScore();
}

nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length) handleButton();
    
    else startQuiz();
})

startQuiz();

