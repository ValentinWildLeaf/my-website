<template>
            <article>

                <header>
                    <h2>Ma boite à outils</h2>
                    <p>
                        Une liste non exhaustive des technologies que j'utilise:
                    </p>
                </header>

                <ul class="flex-container">
                    <li>
                        <img src="../assets/html5-logo.png" class="techno-logo" alt="HTML5 logo" />
                        <h3>HTML5</h3>
                    </li>
                    <li>
                        <img src="../assets/css3-logo.png" class="techno-logo" alt="CSS3 logo" />
                        <h3>CSS3</h3>
                    </li>
                    <li>
                        <img src="../assets/javascript-logo.png" class="techno-logo" alt="Javascript logo" />
                        <h3>ES6: Javascript</h3>
                        
                    </li>
                    <li>
                        <img src="../assets/typescript-logo.png" class="techno-logo" alt="Typescript logo" />
                        <h3>Typescript</h3>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/wordpress-logo.png" class="techno-logo" alt="WordPress logo" />
                            <h3>WordPress</h3>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/php-logo.png" class="techno-logo" alt="PHP logo" />
                        <h3>PHP</h3>
                    </li>
                    <li>
                        <img src="../assets/react-logo.png" class="techno-logo" alt="ReactJS logo" />
                        <h3>React</h3>
                    </li>
                    <li>
                        <img src="../assets/vuejs-logo.png" class="techno-logo" alt="VueJS logo" />
                        <h3>VueJS</h3>
                    </li>
                    <li>
                        <img src="../assets/mongodb-logo.png" class="techno-logo" alt="MongoDB logo" />
                        <h3>MongoDB</h3>
                    </li>
                </ul>

            </article>
</template>

<style>
    h2{
        font-family: 'Rubik';
        text-shadow: 2px 2px black;
    }
    p{
        font-family: 'Roboto Mono', monospace;
    }
    .flex-container{
        display: flex;
        flex-wrap: wrap;
    }
    ul > li{
        list-style-type: none;
        padding: 3%;
    }
    .techno-logo{
        height: 200px;
        padding: 1%;
        will-change: filter height;
    }

    .techno-logo:hover {
        height: 210px;
        filter: drop-shadow(0 0 5em #ffffff);
    }

    h3{
        text-align: center;
    }
</style>