export default {
    nav: {
        home: "Home",
        about: "About-me",
        projects: "Projects",
        skills: "Skills",
    },

    home: {
        welcome: "Hello, I'm",
        job: "Web Developer",
        description: "Currently seeking professional opportunities in the field of web development, I invite you to explore my portfolio to discover my skills, projects, and learn more about me.",
        resume: "Check out my resume",
        contact: "Contact me",
    },

    about: {
        title: "About me",
        seeBtn: "Read more",
        hideBtn: "Show less",
        main: `
        <p class=" about-title description-paragraph">
       Hi there, I'm <strong class="highlight">Théo Savourat</strong> </p> 
       <p class="about-title description-paragraph"> I'm 25 and just recently graduated as a web developer. I'm passionate about crafting cutting-edge digital experiences.</p> `,

        content: `
       <p class="description-paragraph">
       Following five years of academic pursuits leading to a <strong class="highlight">master's degree in finance</strong>, I made a bold choice in 2023 to shift gears towards a domain that truly ignites my passion: <strong class="highlight">web development</strong>.
        </p>        

        <p class="description-paragraph">

        My <strong class="highlight">career transition</strong> materialized with the achievement of the <strong class="highlight"> professional certificate in web and mobile development </strong> in January 2024.
        </p>

        <p class="description-paragraph">
        My previous journey has equipped me with analytical skills and strategic thinking that blend seamlessly with my developer skills, enabling me to bring a unique perspective and added value to any project I contribute to. </p>

    <p class="description-paragraph">
    Currently, I am particularly drawn to opportunities in the realms of <strong class="highlight">front-end, back-end, or full-stack development</strong>  within innovative and dynamic companies where I can contribute to groundbreaking projects while continuing to learn and grow.
    </p>
        `
    },

    projects: {
        title: "Projects",
        github: "Check on Github",

        shoten: `Web application developed in Nuxt.js and Laravel for the API, with a mobile-first approach. <br>
        Explore a manga catalog and easily add volumes you own to your collection. <br>
        With its user-friendly interface, Shoten offers a seamless experience for managing your manga collection online.`,

        labelcars: `Training project <br>
        Web application developed in Vue.js and designed to consume a cars API developed with Node.js. <br>
        Browse available cars and their information, add or remove cars from the database with this versatile application.`,

        oldbattle: `PHP training project <br>
        Card battle game that pits old pop culture characters against each other. <br>
        Select your character and battle a random character. <br> Then choose the attacks that will lead you to victory.`,

        vueflix: `Project developed during Vue.js training <br>
        Web application for a movie catalog. <br>
        Explore a large collection of movies with a user-friendly interface. <br>
        View their description and trailer. <br><br>
        And add movies to your cart.`,

    }
}

