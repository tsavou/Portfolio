
<script setup>

import Github from './icons/Github.vue';
import Linkedin from './icons/Linkedin.vue';
import Email from './icons/Email.vue';


</script>

<template>
<div class="socials">

    <span></span>

    <Github />
    <Linkedin/>
    <Email/>

    

</div>
</template>

<style scoped lang="scss">

.socials{

    z-index: 100;
    position: fixed;
    top:5rem;
    left: 2vw;
    height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    

    span{
        height: 30vh;
        width: 0.1rem;
        background-color: white;
        margin: 1rem 0;
    }


    
   
}
</style>