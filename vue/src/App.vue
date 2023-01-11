<script setup lang="ts">
import Technos from './components/Technos.vue'
</script>

<template>


  <div class="presentation">
    <h1>Bonjour <br />
      Je m'appelle Valentin.<br />
      Je suis développeur Web Freelance.</h1>
  </div>

  <div class="container">

    <article>

      <header>
        <h2>A propos de moi</h2>
      </header>

      <p>
        Autodidacte mordu de nouvelles technologies depuis toujours, je met mes compétences à votre service pour vous aider à développer votre présence digitale et mener à bien vos projets.
      </p>

    </article>

  </div>

  <div class="container">

    <article>

      <header>
        <h2>Mes compétences</h2>
        <p>J'ai des connaissances générales dans ces différentes étapes du développement de solutions
          informatiques:</p>
      </header>

      <ul>
        <li>&#128221 Analyse fonctionnelle des systèmes d'information pour répondre au besoin des utilisateurs sur le terrain</li>
        <li>&#129504 Problem solving</li>
        <li>&#129309 Travail d'équipe en mode agile</li>
        <li>&#128376 Architecture Web</li>
        <li>&#128396 UX Design et Responsive UI Design -> Design de l'expérience de navigation et de l'interface utilisateur
        </li>
        <li>&#128187 Développement d'applications Web Full Stack en lien avec une Base de données</li>
      </ul>

      <footer>
        <p>Mes spécialités restent la résolution de problèmes (problem solving) et la programmation.</p>
      </footer>

    </article>

  </div>

  <div class="container">
    <Technos></Technos>
  </div>

  <div class="container">

    <article>

      <header>
        <h2>Mes centres d'intérets</h2>
        <p></p>
      </header>

      <ul>
        <li>&#128640 WEB 3.0</li>
        <li>&#129302 Inteligence artificielle</li>
        <li>&#128200 Entrepreneuriat</li>
        <li>&#128218 Litérature</li>
        <li>&#127807 Jardinage</li>
      </ul>

    </article>

  </div>

  <div class="container">
    <article>
      <header>
        <h2>Contact</h2>
      </header>
      <ul>
        <li>&#128231 Email : monmail@contact.com</li>
        <li id="github-line">
          <img src="./assets/github-logo.png" alt="GitHub logo" :height="50"/>
          <p>GitHub: <a href="https://github.com/ValentinWildLeaf">ValentinWildLeaf</a></p> 
        </li>
      </ul>
    </article>
  </div>

  <div class="container">
    <article>
      <header>
        <h2>A propos</h2>
      </header>
      <p>Ce site est codé en HTML5 + CSS3 avec le Framework Vue Typescript</p>
    </article>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Rubik:wght@700&display=swap');

h1,
h2 {
  font-family: 'Rubik';
  text-shadow: 2px 2px black;
}

p,
li {
  font-family: 'Roboto Mono', monospace;
}

.presentation {
  padding: 2%;
}

.container {
  background-color: rgba(17, 93, 151, 0.7);
  border-radius: 21px;
  box-shadow: 0 10px 20px rgba(117, 181, 255, 0.5);
  padding: 2%;
  margin: 4% 2%;
}

#github-line{
  display: flex;
  padding: 1% 1% 1% 2%;
}
/*
  &#128190 -> emoji disquette
  &#128200 -> emoji graphique
  &#128187 -> emoji PC
  &#128193 -> emoji document
  &#128195 -> emoji liste
  &#128203 -> emoji notes
  &#128214 -> emoji livre
  &#128218 -> emoji pile de livres
  &#128221 -> prise de notes
  &#128231 -> emails
 */
</style>