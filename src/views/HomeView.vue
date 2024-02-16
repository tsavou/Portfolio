<script setup>
import About from '@/components/sections/About.vue';
import Header from '../components/Header.vue';   
import Socials from '@/components/socials/Socials.vue';
import Welcome from '@/components/sections/Welcome.vue';
import Skills from '@/components/sections/Skills.vue';
import Projects from '@/components/sections/Projects.vue';

</script>

<template>
<Header/>
    <main>        
        <Socials/>
        <Welcome/>
        <About/>
        <Skills/>
        <Projects/>
    </main>
</template>

<style scoped>

main{
    margin: 0 20rem ;
}
</style>