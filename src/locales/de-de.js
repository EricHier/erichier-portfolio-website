const dayjs = require("dayjs");

module.exports = {
  header : {
    left: ["Zu jeder Problemstellung bedarf es einer Lösung.", "Und diese zu entwickeln ist meine Passion. "],
    right: "Hi!\nEricHier"
  },
  projects: {
    title: "Meine Projekte",
    projects: [{
      title: "vehikeling",
      href: "https://vehikeling.de",
      img: "vehikeling.png",
      role: "Entwickler · Urheber",
      description: "Eine **Web-Plattform um dein(e) Fahrzeuge zu verwalten**. Du kannst ganz komfortabel deine Services eintragen und Benachrichtigungen zu anstehenden Wartungen bekommen - und all dies jederzeit auf der Webseite oder in der App."
    }, {
      title: "Dr.What?",
      href: "https://drwhat.de",
      img: "drwhat.png",
      role: "Entwickler · Mit-Urheber",
      description: "**Was habe ich denn überhaupt?** Hast du deinen Arztbrief oder einen medizinischen Fachbegriff nicht verstanden? Bei **Dr.What? deinen Arztbrief hochladen und kostenlos übersetzen lassen**."
    }]
  },
  "about-me": {
    title: "Das bin ich",
    "contact-question": ["Du möchtest mit mir zusammenarbeiten? ", "Schreib mir! "],
    cards: [{
      title: "Alter?",
      answer: dayjs().diff('2001-03-19', "y"),
    }, {
      title: "Unversität?",
      answer: "RWTH Aachen"
    }, {
      title: "Studiengang?",
      answer: "Informatik Bachelor"
    }]
  },
  "what-i-offer": {
    title: "Was ich anbiete",
    "contact-me": "Bei Interesse oder Fragen kontaktieren Sie mich bitte unter",
    offers: [
      {icon: ['fab', 'vuejs'], text: "Frontend Entwicklung mit Frameworks wie Vue oder TailwindCSS und allem was dazugehört"},
      {icon: ['fab', 'node-js'], text: "Backend Entwicklung unter Node.js mit (GraphQL) APIs, Datenbanken und Frameworks aller Art"},
      {icon: ['fab', 'wordpress-simple'], text: "Wordpress Seiten in einem Gesamtpaket mit Design und technischer Betreuung zum Beispiel für den Einzelhandel"},
      {icon: ['fas', 'file-code'], text: "Entwicklung (z.B. auf Android und mit Python) und Projektmanagement in allen Bereichen"}
    ]
  }
}