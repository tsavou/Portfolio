<script setup>

import { useLanguageStore } from '@/stores/language';
import fr from '@/assets/languages/fr';
import en from '@/assets/languages/en';


const select = useLanguageStore();

const content = () => {
    if (select.language === 'fr') {
        return fr.about;
    } else {
        return en.about;
    }

}
</script>

<template>
    <div class="about" id="about">
        <h2><span>#</span> {{ content().title }}</h2>

        <div class="description" v-html="content().description"> </div>

    </div>
</template>

<style scoped lang="scss">
.about {
    height: fit-content;


    .description {
        padding: 2rem 0;
        line-height: 1.5;
        text-align: justify;

        p{
            margin-bottom: 2rem;
        }

        @media screen and (max-width: $lg-bp) {
            text-align: left;
        }

    }

}
</style>

<style lang="scss">

.description-paragraph {
    margin-bottom: 2rem;
    
}

.highlight {
    color: $primary-color;
    font-size: 1.05em;
}
</style>