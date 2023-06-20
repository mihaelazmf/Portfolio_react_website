// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo.png";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import nodejs from "./assets/techstack/nodejs.png";
import express from "./assets/techstack/express.png";
import mongodb from "./assets/techstack/mongodb.png";
// Porject Images
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mihaela Andreea Zamfir",
  tagline: "I build things for web",
  img: profile,
  about: `Experienced Banker Embarking on a Software Engineering Journey | Italian Language Proficiency & Frontend Development Skills | Eager for Exciting Career Pathways`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mihaela-andreea-zamfir/",
  github: "https://github.com/mihaelazmf",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "OSF Academy - Salesforce Commerce Cloud (SFCC) Frontend",
    Company: `OSF Digital`,
    Location: "Bucharest,Romania",
    Type: "Internship",
    Duration: "Sep 2022 - Oct 2022",
  },
  {
    Position: "Financial Specialist ",
    Company: `Unicredit`,
    Location: "Bucharest,Romania",
    Type: "Full-time",
    Duration: "Jul 2015 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor's in Computer Science",
    Company: `National University "Titu Maiorescu`,
    Location: "Bucharest,Romania",
    Duration: "Sept 2020 - Jul 2023",
  },
  {
    Position: "Bachelor's in Law",
    Company: `University of Bucharest`,
    Location: "Bucharest,Romania",
    Duration: "Sept 2011 - Jul 2015",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  nodejs: nodejs,
  express: express,
  mongodb: mongodb,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "ThinkerBee",
    image: projectImage2,
    description: `ThinkerBee is a full-stack web application that combines MongoDB, Express.js, React.js, and Node.js. These technologies enable efficient data storage, server-side development, client-side rendering, and robust scalability.`,
    techstack:
      "MERN stack (MongoDB, ExpressJs, ReactJs, NodeJs, HTML, CSS, Bootstrap)",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mihaelazmf/thinkerbee.git",
  },
  {
    title: "Weather App",
    image: projectImage3,
    description: `The WeatherApp is a JavaScript application that displays real-time weather information using the OpenWeather API. Users can enter a location and view current weather conditions, including temperature, humidity, and wind speed. `,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mihaelazmf/WeatherApp.git",
  },
  {
    title: "Shopping Cart",
    image: projectImage4,
    description: `The Shopping Cart project is a JavaScript-based web application that enables users to browse and add products to their cart. It provides an interactive interface and integrates a currency conversion API for viewing prices in different currencies. `,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mihaelazmf/shopping-cart.git",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "zamfir.mihaela.andreea@gmail.com",
};
