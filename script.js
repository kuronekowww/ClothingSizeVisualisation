

document.addEventListener("DOMContentLoaded", function() {


//Page3 Size bigram sentiment 
// I Saw It First
if (document.getElementById("trivia")){

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
    fullpage_api.moveTo(3,0);
  }
}


}
if (document.getElementById("bmReviews")){
  const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const reviewTitle = document.querySelector('.reviewtitle')
const testimonials = [
  {
    title:"Clothes are decent, but the morals and ethics are horrible.",
    text:
      "I've had no bad experiences with brandy customer service wise and the clothes are at a reasonable price and pretty good quality. There are both trendy and basic pieces although, some can be a little over priced. But once again the quality is good. However, the one size fits all policy is absolute rubbish. Obviously, one size does not fit all and Brandy really needs to change their sizing. And the lack of diversity is so disheartening to see. So morals wise very bad but clothes wise it's decent.",
  },
  {
    title:"One size ... if youre less than a UK size 10/12",
    text:
    "One of the LEAST inclusive brands to exist. I am a very standard Size 12 and I am a healthy weight for my height and very average and yet none of their clothes fit me in any remotely flattering way. I can physically get them on my body (in most cases, but not always). The fact that it’s “one size” is a silly money saving tactic and very much limits customers they can appeal to. It also promotes a negative perception of other HEALTHY body types other than really slim girls with zero curves"
    },
  {
    title:"Brandy Melville= anorexia promotion",
    text:
      "Brandy Melville= anorexia promoting dangerous company!Went into the shop to look for some sweat pants for my daughter only to be greater by judgemental looks of staff when I questioned lack of different sizes! All the clothes were more or less the same size S!Really?! How is that possible in the age of political correctness to allow place like that where young people are being scrutinised for looking healthy!!How can we allow this sort of treatment to be inflicted on our kids already scrutinised by various social media!!!!!This place is a factory for anorexic and bulimic teenagers!!!!If a young person goes into that hellish store they will look around and think that’s it I’m officially fat have to loose weight to fit in… straight route to anorexia, bulimia or other eating psychosomatic disorder!!!!"
  },
  {
    title:"If i could give no stars i would",
    text:
      "If i could give no stars i would. Im am shocked a shop like this exists. It only sells clothes in size small or extra small. Terrible shop terrible ethics and should not be allowed. Encouraging young girls to diet and loose weight to fit into tiny sizes. Shame on you Brandy Melville.",
  },
  {
    title:"Poor Customer Service",
    text:
      "My daughter likes the style but acknowledges that it is not very inclusive with their one size approach which emphasizes only very thin women can wear their clothing. The customer service is poor. Because of COVID19 the fitting rooms. were closed but the returns could only be accepted in-store not mail in. They offer only chat for help and not alternatives to going to I am not enthusiastic about driving over an hour to the store. go in-person to a store during a pandemic and regret we went there in the first place.",
  },
  {
    title:"Overall, would't recommand",
    text:
      'Some of their clothes are nice and some are not that great but all their products only come in one petite size. Customer service is the worst I have seen /: they do not provide return labels, only give you 30 days to return their products, ships super slow (I got a package from Asia before I got my package from Brandy and I ordered both on the same day), and they do not allow you to return online orders in stores.',
  },
  {
    title:"I am a size 6 but the “one size fits all” doesn’t even fit me.",
    text:
      "'I am a size 6. SIZE SIX. brandy's “one size fits all” actually means “one size fits 0,2,4” i would never think of my self as a particularly bigger human and the fact that their product doesn’t fit me makes me feel so horrible about myself and my body imagine. very upset.",
  },
]

let idx = 1

function updateTestimonial() {
  const { title,text } = testimonials[idx]

  testimonial.innerHTML = text
  reviewTitle.innerHTML = title
  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
}

if(document.getElementById("wordSentiment")){

  var chartDom = document.getElementById('chartISF');
  var isfChart = echarts.init(chartDom);
  var option;
  
  option = {
    title: {
      text: 'I Saw It First'
    },
    xAxis: [
      {
        type: 'category',
        data: [
          'wrong',
          'akward',
          'miss',
          'excellent',
          'perfectly',
          'true',
          'perfect'
        ]
      }
    ],
    yAxis: {
      type: 'value',
      name: 'Sentiment value * number of occurrences',
      nameLocation: 'end',
      nameTextStyle: {
        align: 'left'
      },
      boundaryGap: ['10%', '10%']
    },
    series: [
      {
        name: 'typeA',
        data: [
          {
            value: -186,
            symbol:
            'image://' + 'images/Pouting Face.png',
            symbolSize: 40
          },
          {
            value: -2,
            symbol: 'image://' + 'images/Frowning face.png',
            symbolSize: 40
          },
          {
            value: -2,
            symbol: 'image://' + 'images/Frowning Face.png',
            symbolSize: 40
          },
          {
            value: 6,
            symbol: 'image://' + 'images/Neutral Face.png',
            symbolSize: 40
          },
          {
            value: 6,
            symbol: 'image://' + 'images/Neutral Face.png',
            symbolSize: 40
          },
          {
            value: 14,
            symbol: 'image://' + 'images/Slightly Smiling Face.png',
            symbolSize: 40
          },
          {
            value: 78,
            symbol: 'image://' + 'images/Beaming Face With Smiling Eyes.png',
            symbolSize: 40
          }
        ],
        type: 'line',
        smooth: 0.6,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0.5, 0.6, 0, 1, [
            {
              offset: 0,
              color: 'lightblue'
            },
            {
              offset: 1,
              color: 'red'
            }
          ])
        },
        lineStyle: {
          color: '#37b2f6',
          width: 2
        }
      }
    ]
  };
  
  isfChart.setOption(option);
  
}


//Page4 Size bigram sentiment
// Pretty Little Thing

  if (document.getElementById("wordSentiment")) {

    var chartDom = document.getElementById('chartPLT');
    var pltChart = echarts.init(chartDom);
    var option;
    
    option = {
      title: {
        text: 'Pretty Little Thing'
      },
      xAxis: {
        type: 'category',
        data: ['wrong', 'waste', 'top', 'fit', 'true', 'prefect']
      },
      yAxis: {
        type: 'value',
        name: 'Sentiment value * number of occurrences',
        nameLocation: 'end',
        nameTextStyle: {
          align: 'left'
        },
        boundaryGap: ['10%', '10%']
      },
      series: [
        {
          data: [-176, -1, 2, 3, 4, 9],
          data: [
            {
              value: -176,
              symbol: 'image://' + 'images/Pouting Face.png',
              symbolSize: 40
            },
            {
              value: -1,
              symbol: 'image://' + 'images/Frowning Face.png',
              symbolSize: 40
            },
            {
              value: 2,
              symbol: 'image://' + 'images/Neutral Face.png',
              symbolSize: 40
            },
            {
              value: 3,
              symbol: 'image://' + 'images/Neutral Face.png',
              symbolSize: 40
            },
            {
              value: 4,
              symbol: 'image://' + 'images/Slightly Smiling Face.png',
              symbolSize: 40
            },
            {
              value: 9,
              symbol: 'image://' + 'images/Slightly Smiling Face.png',
              symbolSize: 40
            }
          ],
          type: 'line',
          symbol: 'triangle',
          smooth: 0.6,
          symbolSize: 20,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0.7, 0.6, 0, 1, [
              {
                offset: 0,
                color: 'lightblue'
              },
              {
                offset: 1,
                color: 'red'
              }
            ])
          },
          lineStyle: {
            color: '#37b2f6',
            width: 2
          }
        }
      ]
    };
    
    option && pltChart.setOption(option);
  }


//Page BM Key Word
  if (document.getElementById("wordCount")) {
  var chartDom = document.getElementById("bmChart");
  var bmChart = echarts.init(chartDom);
  var option;
  
  option = {
    xAxis: {
      type: 'category',
      data: [
        'Customer',
        'service',
        'clothes',
        'online',
        'company',
        'size',
        'email',
        'items',
        'shipping',
        'christmas'
      ]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          205,
          203,
          150,
          122,
          121,
          {
            value: 101,
            itemStyle: {
              color: '#a90000'
            }
          },
          100,
          98,
          98,
          92
        ],
        type: 'bar'
      }
    ]
  };

  bmChart.setOption(option);
}

//Page5 size Compare

if (document.getElementById("sizeCompare")) {
var chartDom = document.getElementById('sizeLineChart');
var compareChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Brandy Melville', 'Prettylittlething','Brandy Melville oversized', 'Isawitfirst']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Size 2', 'Size 4', 'Size 6', 'Size 8', 'Size 10', 'Size 12','Size 14', 'Size 16', 'Size 18'],
    boundaryGap: true,
    splitArea: {
      show: true,
      interval: 1
    }
  },
  yAxis: {
    type: 'value',
    scale:true
  },
  series: [
    {
      name: 'Brandy Melville',
      type: 'line',
      endLabel:{
        show: true
      },
      data: [60, 62, 64, 66, 70, 72, 76, 82, 86],
    markArea: {
        itemStyle: {
          opacity: 0
        },
        data: [
          [
            {
              name: 'XS',
              xAxis: 'Size 2'
            },
            {
              xAxis: 'Size 4'
            }
          ],
          [
            {
              name: 'S',
              xAxis: 'Size 6'
            },
            {
              xAxis: 'Size 8'
            }
          ],
          [
            {
              name: 'M',
              xAxis: 'Size 10'
            },
            {
              xAxis: 'Size 12'
            }
          ],
          [
            {
              name: 'L',
              xAxis: 'Size 14'
            },
            {
              xAxis: 'Size 16'
            }
          ],
          [
            {
              name: 'XL',
              xAxis: 'Size 18'
            },
            {
              xAxis: 'Size 18'
            }
          ]
        ]
      }
    },
    {
      name: 'Prettylittlething',
      type: 'line',
      endLabel:{
        show: true
      },
      data: [76, 78.5, 81, 86, 91, 96, 101, 106, 112]
    },
    {
      name: 'Brandy Melville oversized',
      type: 'line',
      endLabel:{
        show: true
      },
      data: [106,106,106,106,106,106,106,106,106]
    },
    {
      name: 'Isawitfirst',
      type: 'line',
      endLabel:{
        show: true
      },
      data: ['-' , 79.5,82,86,90,95,100,105,110]
    }
  ]
};


compareChart.setOption(option);
}



//Page5? who can fit in

if (document.getElementById("whoFit")){

  const left = document.querySelector('.left');
  const container = document.querySelector('.bmContainer');
  
  left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
  left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
}


  //Page 4 vanity size

if (document.getElementById("vanityChart")){
  var chartDom = document.getElementById('vanity-container');
  var vanityChart = echarts.init(chartDom);
  var option;

  option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: [
        'COS',
        'NEW LOOK',
        'I SAW IT FIRST',
        'PRETTY LITTLE THING',
        'ZARA',
        'ASOS',
        'M&S',
        'NEXT',
        'H&M'
      ],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        show: true,
        hideOverlap: false,
        interval: 0
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 60
    }
  ],
  series: [
    {
      name: 'waist (cm)',
      type: 'bar',
      barWidth: '30%',
      data: [64,66,68,68,70,65,65,67.5,68]
    },
    {
      name: 'bust (cm)',
      type: 'bar',
      barWidth: '30%',
      data: [80,85,86,86,84,84,82,84,84]
    }
  ]
  };

  vanityChart.setOption(option);
}

if(document.getElementById('bodyFit')){

  const bodies = document.querySelectorAll('.bodyImg')


bodies.forEach(body => {
    body.addEventListener('click', () => {
        body.classList.add('active')
    })
})
}

new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true
});

});
