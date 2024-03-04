<script setup>

import { useLanguageStore } from '@/stores/language';
import fr from '@/assets/languages/fr';
import en from '@/assets/languages/en';


const select = useLanguageStore();

const content = () => {
    if (select.language === 'fr') {
        return fr.about;
    } else {
        return en.about;    }

}
</script>

<template>
    <div class="about" id="about">
        <h2><span>#</span> {{ content().title }}</h2>

        <p v-html="content().description"> </p>

    </div>
</template>

<style scoped lang="scss">
.about {
    height: fit-content;


    p{
     padding: 2rem 2rem;
     line-height: 1.5;
     text-align: justify;

     span {
         color: $primary-color;
         font-weight: 600;
         
     }
    }

}

</style>

<style lang="scss">

.highlight {
    color: $primary-color;
    font-size: 1.05em;
}

</style>