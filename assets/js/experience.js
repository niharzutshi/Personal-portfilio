AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "UX Designer",
        cardImage: "assets/images/experience-page/GMC.jpg",
        place: "Give My Certificate",
        time: "(Jan, 2021 - Present)",
        desp: "<li>Designed the front-end of the company website www.givemycertificate.com.</li><li> Working on the goal of my company and designing poster, Banners, Certificate templates and more. .</li><li>Managing the official discord server and improving its designs and bot commands.</li><li> Implementing the new ideas for company growth.</li>",
    },
    {
        title: "Gurugram Police Cyber Security Intern 2021",
        cardImage: "assets/images/experience-page/GPCSI2k21.png",
        place: "Haryana",
        time: "(June, 2021 - July, 2021)",
        desp: "",
    },
    {
        title: "Managed Network Expert",
        cardImage: "assets/images/experience-page/chegg.png",
        place: "Chegg",
        time: "(Feb, 2021 - Present)",
        desp: "<li>Getting paid with every question from chegg</li><li>Helping students with there doubts and query in CS.</li>",
    },
];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [{
        title: "Harvard Project for Asian And International Relations",
        cardImage: "assets/images/experience-page/1.jpg",
        description: "Selected as a Gold delegate from a pool of thousands of applicants from all over the world for the virtual (HPAIR) conference 2021",
    },
    {
        title: "HARVARD US-INDIA INITIATIVE",
        cardImage: "assets/images/experience-page/2.jpg",
        description: "",
    },
    {
        title: "NEURAL HACKS 2.O",
        cardImage: "assets/images/experience-page/3.jpg",
        description: "Being a mentor there was a hackathon over 100 signup. With an aim to bring AR amd ML to healthiness and wellness",
    },
    {
        title: "INDIAN INSTITUTE OF TECHNOLOGY, ROORKEE",
        cardImage: "assets/images/experience-page/4.jpg",
        description: "There was many lectures by the professors of IIT as well IMUN, visiting village to help them with the current situation",
    },
];

const showCards = () => {
    let output = "";
    volunteershipcards.forEach(
        ({ title, cardImage, description }) =>
        (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [{
        title: "Summer Intern",
        subtitle: "DELOITTE",
        image: "assets/images/experience-page/Deloitte.png",
        desp: " I provide administrative support to a team of 5 product managers that deliver our product and Developed skills in prioritization through managing multiple reporting lines and meeting competing deadlines. ",
    },
    {
        title: "Virtual Intern",
        subtitle: "Cashkaro Jun, 2021",
        image: "assets/images/experience-page/Cashkaro.png",
        desp: "Obtain a golden opportunity to have 1-1 questioning to, Hon'ble Lieutenant Governor of Jammu and Kashmir, India in front of all delegates..",
    },
    {
        title: "Business Developer Intern",
        subtitle: "INTERNATIONAL MODEL UNITED NATION",
        image: "assets/images/experience-page/imun.png",
        desp: "",
    },
    {
        title: "Conference Chair",
        subtitle: "INTERNATIONAL MODEL UNITED NATION",
        image: "assets/images/experience-page/imun.png",
        desp: " Its is my first ever journey in 2019 to IIT Roorkee to get started, explore and gain knowledge from IIT Professors and Students.",
    },
    {
        title: "Engagement INTERN",
        subtitle: "METVY",
        image: "assets/images/experience-page/metvy.png",
        desp: "",
    },
    {
        title: "Graphic Designer",
        subtitle: "CREAMZO",
        image: "assets/images/experience-page/creamzo.jpg",
        desp: "",
    },
    {
        title: "Ninja Entrepreneur",
        subtitle: "Coding Ninjas",
        image: "assets/images/experience-page/codingninjas.png",
        desp: "",
    },
    {
        title: "Contributing Writer",
        subtitle: "QUORA",
        image: "assets/images/experience-page/quora.png",
        desp: "",
    },
    {
        title: "Contributor & Influencer",
        subtitle: "Google Crowdsource",
        image: "assets/images/experience-page/googlecrowdsource.png",
        desp: "",
    },
    {
        title: "Campus Ambassador",
        subtitle: "Careers360",
        image: "assets/images/experience-page/Careers360.png",
        desp: "",
    },
    {
        title: "BETA TESTER",
        subtitle: "Google",
        image: "assets/images/experience-page/google.png",
        desp: "",
    },
    {
        title: "Local Guide (Level-5)",
        subtitle: "Mentor",
        image: "assets/images/experience-page/Local guide.png",
        desp: "Score a place with ratings, describe your experience with reviews, share photographs and videos, provide insights with answers, respond to questions about a place, update information with place edits, add missing places, or verify information by checking facts.",
    },


];

const showCards3 = () => {
    let output = "";
    mentor.forEach(
        ({ title, image, subtitle, desp }) =>
        (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>   
        </div>
      </div>
      `)
    );
    // <a href="#" class="blog-slider__button">Read More</a> (Line number 199 if you want read more)
    hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);