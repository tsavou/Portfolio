<script setup>
import About from '@/components/sections/About.vue';
import Header from '../components/Header.vue';
import Socials from '@/components/socials/Socials.vue';
import Welcome from '@/components/sections/Welcome.vue';
import Skills from '@/components/sections/Skills.vue';
import Projects from '@/components/sections/Projects.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
    <Header />
    <Socials />
    <main>

        <Welcome />
        <About />
        <Skills />
        <Projects class="projects" />
        
    </main>
    <Footer />
</template>

<style scoped lang="scss">
main {

    margin-bottom: 5rem;
    > :not(.projects) {
        margin: 0 20rem;


        @media screen and (max-width: $sm-bp) {
            margin: 0 4rem;
        }



        @media screen and (min-width: $sm-bp) and (max-width: $md-bp) {
            margin: 0 3rem;
            ;

        }

        @media screen and (min-width: $md-bp) and (max-width: $lg-bp) {
            margin: 0 8rem;

        }

        @media screen and (min-width: $lg-bp) {
            margin:0 18rem; ;
        }

       

    }


}
</style>