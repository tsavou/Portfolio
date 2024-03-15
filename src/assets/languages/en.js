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
        <p class="description-paragraph">
       Hi there, I'm <strong class="highlight">Théo Savourat</strong>, 25 years old, and I'm a <strong class="highlight">web developer</strong> and I am a recent graduate in web development, driven by the passion to create innovative digital experiences. </p> `,

       content: `
       <p class="description-paragraph">
        After five years of studies in the fields of management and finance, culminating in a <strong class="highlight">master's degree in finance</strong>, I made the decision in 2023 to reorient myself towards web development. Although my previous studies didn't inspire me, I persevered to obtain my master's degree. However, I quickly felt the need to turn to a field that truly excites me.</p>

        <p class="description-paragraph">
        My interest in digital technology, the web, and logic naturally led me to web development. This choice was driven by my belief that development is a constantly evolving field, offering perpetual learning and continuous intellectual stimulation. The logical aspect and the opportunity to constantly learn intrigued and motivated me to undertake this career change.</p>

        <p class="description-paragraph">
        My <strong class="highlight"> transition </strong> into the field of web development took shape through an intensive six-month training program aimed at obtaining the <strong class="highlight"> professional certificate in web and mobile development </strong>, which I successfully completed in January 2024. Equipped with the skills acquired during this training, I am determined to further my professional development in the field of web development. </p>

        <p class="description-paragraph">
        Currently, I am particularly interested in <strong class="highlight">opportunities</strong> in the fields of <strong class="highlight">front-end, back-end, or full-stack development</strong> within innovative and dynamic companies where I can contribute to innovative projects while continuing to learn and grow.</p>

        <p class="description-paragraph">
        My previous experience has equipped me with analytical skills and strategic thinking that complement the technical skills acquired during my web development training. I am confident that my successful transition to web development, combined with these skills, will enable me to bring a unique perspective and added value to any project I contribute to.</p>

        
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

