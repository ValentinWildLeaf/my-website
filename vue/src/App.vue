<script setup lang="ts">
import Technos from './components/Technos.vue'
</script>

<template>


  <div class="presentation">
    <h1>Bonjour <br />
      Je m'appelle Valentin.<br />
      Je suis développeur Web.</h1>
  </div>

  <div class="container">

    <article>

      <header>
        <h2>A propos de moi</h2>
      </header>

      <p>
        Fasciné par les ordinateurs et la technologie depuis toujours, j'ai décidé de faire mon buisness de toute
        ces années d'expérience sur la toile.
      </p>

      <p>
        Je suis quelqu'un d'optimiste qui voit les technologies de l'information comme un outil très puissant
        pouvant aider les gens à communiquer entre eux et partager leur savoir comme jamais auparavant.
      </p>

      <p>
        Mon but est d'utiliser cet outil à votre service pour vous faciliter la vie au maximum (sans tomber dans le
        piège de la surcomplication à outrance ;) )
      </p>

    </article>

  </div>

  <div class="container">

    <article>

      <header>
        <h2>Mes compétences</h2>
        <p>J'ai de très bonnes connaissances générales dans ces différents domaines du développement de solutions
          informatiques. Mais ma spécialité reste la résolution de problème (Problem Solving) en utilisant l'outil
          informatique.</p>
      </header>

      <ul>
        <li>Analyse fonctionnelle des systèmes d'information pour répondre au besoin des utilisateurs</li>
        <li>Architecture Web</li>
        <li>Développement d'applications Web Full Stack en lien avec une Base de données</li>
        <li>UX Design et Responsive UI Design -> Design de l'expérience des utilisateur et de l'interface utilisateur
        </li>
        <li>Problem solving</li>
      </ul>

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
        <li>WEB 3.0</li>
        <li>Inteligence artificielle</li>
        <li>Entreprenariat</li>
        <li>Litérature</li>
        <li>Jardinage</li>
      </ul>

    </article>

  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Rubik:wght@700&display=swap');

h1,
h2 {
  font-family: 'Rubik';
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
  padding: 2%;
  margin: 4% 2%;
}

.second {
  padding: 2%;
}

.third {
  background-color: #115D97;
  padding: 2%;
}

.fith {
  background-color: #115D97;
  padding: 2%;
}
</style>

<!--
  .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
-->