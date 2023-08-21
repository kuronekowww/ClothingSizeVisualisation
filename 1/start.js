
const questions= [
  {
  question:"What size does female purchase most in uk?",
  answers:[
    {text:"Size 6",correct:false},
    {text:"Size 8", correct:true},
    {text:"Size 10", cottect:true},
    {text:"Size 12", cottect:true},
  ],
  info:" According to the review data collected from Pretty Little Thing and I Saw It First, female in UK purchase mostly size 8 clothes"
},
{
  question:"If someone fits size 16 in cos, what size may fit her in Pretty Little Thing?",
  answers:[
    {text:"10",correct:false},
    {text:"12", correct:true},
    {text:"14",correct:false},
    {text:"16",correct:false},
  ],
  info:"In cos, size 16 have 96 chest and 80 waist, while in Pretty Little Thing size 12 have 96 chest and 78 waist (measurement in cm)"
},
{
  question:"Which fashion brand have a largest waist in size 8?",
  answers:[
    {text:"ZARA",correct:true},
    {text:"NEW LOOK", correct:false},
    {text:"PRETTY LITTLE THING",correct:false},
    {text:"HM",correct:false},
  ],
  info:"ZARA: 70cm NEW LOOK: 66cm PRETTY LITTLE THING: 68cm HM: 68cm "
}
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("optionButtons");
const nextButton = document.getElementById("nextButton");
const quizTitle = document.getElementById("quizTitle");
const quizInfo = document.getElementById("info");

let currentQuestionIndex= 0;
let score = 0;

function startQuestion(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML ="Next";
  showQuestion();
}

function showQuestion(){
  resetQuestion();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + "." +currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button =document.createElement("button");
    button.innerHTML =answer.text;
    button.classList.add("answer");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;

    }
    button.addEventListener("click",selectAnswer);
  });
}


function resetQuestion(){
  nextButton.style.display ="none";
  quizInfo.style.display ="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(n){
  const selected = n.target;
  const isCorrect = selected.dataset.correct == "true";
  if(isCorrect){
    selected.classList.add("correct");
  }
  else{
    selected.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct == "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  let currentQuestion = questions[currentQuestionIndex];
  quizInfo.innerHTML = currentQuestion.info;
  quizInfo.style.display = "block"
  nextButton.style.display = "block";
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    nextQuestion();
  }
  else{
    startQuestion();
  }
})
startQuestion()

function nextQuestion(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showResult();
  }
}

function showResult(){
  resetQuestion();
  questionElement.innerHTML = " ";
  quizTitle.innerHTML = "Scroll down to discover more about clothing size";
}