<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

    <div class="slice first">
      <div class="presentation">
        <h1>Bonjour <br />
          Je m'appelle Valentin.<br />
          Je suis développeur Web.</h1>
      </div>
    </div>

    <div class="slice second">
      <div class="board">

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
    </div>

  <div class="slice third">
    <div class="board">

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
  </div>

  <div class="slice fourth">
    <div class="board">

      <article>

        <header>
          <h2>Mes technologies favorites</h2>
          <p>
            Une liste non exaustive des technologies que j'utilise:
          </p>
        </header>

        <ul>
          <li>WordPress</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>ES6: Javascript / TypeScript</li>
          <li>PHP</li>
          <li>VueJS</li>
          <li>MongoDB</li>
        </ul>

      </article>

    </div>
  </div>

  <div class="slice fith">
    <div class="board">

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
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Rubik:wght@700&display=swap');

h1, h2{
  font-family: 'Rubik';
}

p, li{
  font-family: 'Roboto Mono', monospace;
}

.first {
  background-color: #0A4673;
  padding: 2%;
}

.wave {
  height: 960px;
  background-image: url(./assets/wave-haikei.svg);
  background-size: cover;
}

.second {
  padding: 2%;
}

.third {
  background-color: #115D97;
  padding: 2%;
}

.fourth {
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