<script setup>
import Header from '../components/Header.vue';   
import Socials from '@/components/socials/Socials.vue';
import Welcome from '@/components/Welcome.vue';

</script>

<template>
    <main>
        <Header/>
        <Socials/>
        <Welcome/>
    </main>
</template>

<style scoped>

main{
    margin: 10rem 20rem ;
}
</style>