

document.addEventListener("DOMContentLoaded", function() {


//Page3 Size bigram sentiment 
// I Saw It First



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
  title: {
    text: 'Size Compare'
  },
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
  const right = document.querySelector('.right');
  const container = document.querySelector('.containerSplit');

  left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
  left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

  right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
  right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
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
      min: 70
    }
  ],
  series: [
    {
      name: 'waist (cm)',
      type: 'bar',
      barWidth: '50%',
      data: [72,73,77,78,76,75,75,74,74]
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
