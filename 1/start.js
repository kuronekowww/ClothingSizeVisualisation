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