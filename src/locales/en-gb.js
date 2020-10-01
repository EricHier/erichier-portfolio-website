const dayjs = require("dayjs");

module.exports = {
  header : {
    left: ["A solution is required for every problem.", "And developing this is my passion."],
    right: "Hi!\nEricHier"
  },
  projects: {
    title: "My Projects",
    projects: [{
      title: "vehikeling",
      href: "https://vehikeling.de",
      img: "vehikeling.png",
      role: "Developer · Founder",
      description: "A **web platform to manage your vehicle(s)**. You can conveniently enter your services and receive notifications about upcoming maintenance - all of this at any time on the website or in the app."
    }, {
      title: "Dr.What?",
      href: "https://drwhat.de",
      img: "drwhat.png",
      role: "Developer · Co-Founder",
      description: "**What do I have anyway?** Did you not understand your doctor's letter or a medical term? At **Dr.What? Upload your doctor's letter and have it translated for free**."
    }]
  },
  "about-me": {
    title: "About me",
    "contact-question": ["Any further questions? ", "Contact me! "],
    cards: [{
      title: "Age?",
      answer: dayjs().diff('2001-03-19', "y"),
    }, {
      title: "University?",
      answer: "RWTH Aachen"
    }, {
      title: "Course of study?",
      answer: "Computer Science Bachelor"
    }]
  },
  "what-i-offer": {
    title: "What I offer",
    "contact-me": "Feel free to contact me at",
    offers: [
      {icon: ['fab', 'vuejs'], text: "Frontend development with frameworks like Vue or TailwindCSS and everything that goes with it"},
      {icon: ['fab', 'node-js'], text: "Backend development under Node.js with (GraphQL) APIs, databases and frameworks of all kinds"},
      {icon: ['fab', 'wordpress-simple'], text: "Wordpress pages in a complete package with design and technical support, for example for retail"},
      {icon: ['fas', 'file-code'], text: "Development (e.g. on Android and with Python) and project management in all areas"}
    ]
  }
}