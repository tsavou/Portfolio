export default {
    nav: {
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        skills: "Compétences",
    },

    home: {
        welcome: "Bonjour, je suis",
        job: "Développeur Web",
        description: " Actuellement à la recherche d'opportunités professionnelles dans le domaine du développement web, je vous invite à explorer mon portfolio pour découvrir mes compétences, mes projets et en savoir plus sur moi.",
        resume: "Consultez mon CV",
        contact: "Contactez moi",
    },

    about: {
        title: "A propos de moi",
        seeBtn: "En savoir plus",
        hideBtn: "Réduire",
        main: `
            <p class=" about-title description-paragraph">
             Bonjour, je m'appelle <strong class="highlight">Théo Savourat</strong>. 
             </p> 
             <p class="about-title description-paragraph"> 
             J'ai 25 ans et je suis un <strong class="highlight">développeur web </strong>fraîchement diplômé, animé par la passion de créer des expériences numériques innovantes.
            </p>     
            `,
        content: `
            <p class="description-paragraph">
            Après cinq années d'études couronnées par l'obtention d'un <strong class="highlight"> master en finance</strong>, j'ai pris la décision en 2023 de me réorienter vers un domaine qui me passionne réellement: le <strong class="highlight"> développement web</strong>.
        </p>
       
        <p class="description-paragraph">
            Ma <strong class="highlight"> reconversion </strong> s'est concrétisée par l'obtention du <strong class="highlight"> titre professionnel de développeur web et web mobile</strong> en janvier 2024.
        </p>
        <p class="description-paragraph">
        Mon parcours antérieur m'a doté de compétences analytiques et d'une pensée stratégique qui se combinent parfaitement avec mes compétences de développeur, permettant d'apporter une perspective unique et une valeur ajoutée à tout projet auquel je contribue.
        </p>
        <p class="description-paragraph">
            Aujourd'hui, je suis particulièrement intéressé par les <strong class="highlight"> opportunités </strong> dans les domaines du <strong class="highlight"> développement front-end, back-end ou full-stack </strong> au sein d'entreprises innovantes et dynamiques où je pourrai contribuer à des projets novateurs tout en continuant à apprendre et à progresser.
        </p>
            `


    },


    projects: {
        title: "Projets",
        github: "Voir sur Github",

        shoten: `Application web développée en Nuxt.js et Laravel pour l'API, avec une approche mobile-first. <br>
        Explorez un catalogue de manga et ajoutez facilement les volumes que vous possédez à votre collection. <br>
        Avec son interface conviviale, Shoten offre une expérience fluide pour gérer votre collection de manga en ligne.`,

        labelcars: `Projet de formation <br>
         Application web developée en Vue.js et conçue pour consommer une API de voitures developpée avec Node.js. <br>
         Consultez les voitures disponibles et leurs informations, ajoutez ou supprimez des voitures à la base de données grâce à cette application polyvalente.`,

        oldbattle: `Projet de formation PHP <br>
          Jeu de combat de cartes qui fait s'affronter des vieux personnages de la pop culture. <br>
          Sélectionnez votre personnage et affrontez un personnage au hasard. <br> Choisissez ensuite les attaques qui vous mèneront à la victoire.`,

        vueflix: `Projet  developpé en formation Vue.js <br>
         Application web de catalogue de films. <br>
         Explorez une grande collection de films avec une interface conviviale. <br>
         Consultez leur description et leur bande-annonce. <br><br>
         Et ajoutez des films à votre panier.`,



    }





}