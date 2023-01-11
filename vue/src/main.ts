import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

interface textContent {
    intro: string;
    
    presentation_title: string;
    presentation_text: string;

    skills_title: string;
    skills_text: string;
    skills: string[];
    skills_footer: string;

    technos_title: string;
    technos_text: string;

    interests_title: string;
    interests: string[];

    about_title: string;
    about_text: string;
}

const fr: textContent = {
    intro: "Bonjour <br />Je m'appelle Valentin.<br />Je suis développeur Web Freelance.",
    presentation_title: "A propos de moi",
    presentation_text: "Autodidacte mordu de nouvelles technologies, je met mes compétences à votre service pour vous aider à développer votre présence digitale et mener à bien vos projets.",

    skills_title: "Mes compétences",
    skills_text: "J'ai des connaissances générales dans ces différentes étapes du développement de solutions informatiques:",
    skills: [
        "&#128221 Analyse fonctionnelle des systèmes d'information pour répondre au besoin des utilisateurs sur le terrain",
        "&#129504 Problem solving",
        "&#129309 Travail d'équipe en mode agile",
        "&#128376 Architecture et Microservices",
        "&#128396 UX Design et Responsive UI Design -> Design de l'expérience de navigation et de l'interface utilisateur",
        "&#128187 Développement d'applications Web Full Stack en lien avec une Base de données"
        ],
    skills_footer: "Mes spécialités sont la résolution de problèmes (problem solving) et la programmation.",

    technos_title: "Ma boite à outils",
    technos_text: "Une liste non exhaustive des technologies que j'utilise:",

    interests_title: "Mes centres d'intérets",
    interests: [
        "&#128640 WEB 3.0",
        "&#129302 Inteligence artificielle",
        "&#128200 Entrepreneuriat",
        "&#128218 Litérature",
        "&#127807 Jardinage"
        ],

    about_title: "A propos",
    about_text: "Ce site est codé avec le Framework Vue Typescript"
},

en: textContent = {
    intro: "Hello.<br />My name is Valentin<br />I'm a Freelance Web Developper",
    
    presentation_title: "About me",
    presentation_text: "I'm an autodidact who likes new tech. I put my skills to your service to help you build your online presence and your projects.",

    skills_title: "My skills",
    skills_text: "I have general knowledge of an IT project workflow:",
    skills: [
        "&#128221 Functional analysis",
        "&#129504 Problem solving",
        "&#129309 Agile teamwork",
        "&#128376 Architecture and microservices",
        "&#128396 UX Design and Responsive UI Design",
        "&#128187 FullStack WebApp developpment"
        ],
    skills_footer: "My strong points are problem solving and programming.",
    technos_title: "My techno toolbox",
    technos_text: "A non-exhaustiv list of the technos I use:",

    interests_title: "My centers of interest",
    interests: [
        "&#128640 WEB 3.0",
        "&#129302 AI",
        "&#128200 Entrepreneurship",
        "&#128218 Literature",
        "&#127807 Gardening"
        ],

    about_title: "About",
    about_text: "This website is coded with the Vue Typescript framework"
}