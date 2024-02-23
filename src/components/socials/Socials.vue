
<script setup>

import Github from './icons/Github.vue';
import Linkedin from './icons/Linkedin.vue';
import Email from './icons/Email.vue';


</script>

<template>
<div class="socials">

    <span class="line"></span>

    <Github />
    <Linkedin/>
    <Email/>

    

</div>
</template>

<style scoped lang="scss">

.socials{

    z-index: 99;
    position: fixed;
    top:0;
    left: 2vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    

    .line {
        height: 35vh;
        width: 0.1rem;
        background-color: white;
        margin: 1rem 0;
    }

    a{
        color: $secondary-color;

        &:hover {
        filter: drop-shadow(0 0 0.75rem #ADF0DD);
        color: $primary-color;
        transition: 0.2s;
        scale: 1.2;
    }
    }


    
   
}

.light-mode{

    .line{
        background-color: $light-secondary-color;
    }

    a{
        color: $light-secondary-color;

        &:hover {
        filter: drop-shadow(0 0 0.75rem #ADF0DD);
        color: $light-primary-color;
        transition: 0.2s;
        scale: 1.2;
    }
    }
    
}
</style>