<script setup>

import { useLanguageStore } from '@/stores/language';
import fr from '@/assets/languages/fr';
import en from '@/assets/languages/en';
import Button from '../Button.vue';
import { ref } from 'vue';


const select = useLanguageStore();

const content = () => {
    if (select.language === 'fr') {
        return fr.about;
    } else {
        return en.about;
    }

}

const seeMore = ref(false)



</script>

<template>
    <div class="about" id="about">
        <h2><span>#</span> {{ content().title }}</h2>
        <div class="flex">


            <div class="main">

                <p v-html="content().main"></p>

                <div class="img-wrapper">
                    <img src="@/assets/images/dev.jpg" alt="">
                    <div class="overlay"></div>
                </div>
            </div>

            <div  class="content" :class="{ 'see-more': seeMore } " v-html="content().content">
            </div>

        </div>

        <Button v-show="!seeMore" class="btn" @click="seeMore = !seeMore" v-html="content().seeBtn"></Button>
        <Button v-show="seeMore" class="btn" @click="seeMore = !seeMore" v-html="content().hideBtn"></Button>
    </div>
</template>

<style scoped lang="scss">
.about {

    .flex {
        gap: 2rem;
        line-height: 1.5;
        padding-top: 2rem;

        @media screen and (max-width: $md-bp) {
            flex-direction: column;
        }

        .main {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            @media screen and (max-width: $md-bp) {
                width: 100%;
            }

            .img-wrapper {
                position: relative;
                border-radius: 5rem;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: left;
                    display: block;
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: $primary-color;
                    opacity: 0.3;
                    z-index: 1;
                }

                @media screen and (max-width: $md-bp) {
                    display: none;
                    
                }
            }

        }

        .content {

            @media screen and (min-width: $md-bp) {
                width: 50%;
            }

        }
    }

    .btn {
        display: none;
    }

    @media screen and (max-width: $md-bp) {

        

        .btn {
            display: block;
        }

        .content {
            display: none;
        }

        .see-more {
            display: block;
        }



    }

    // .description {
    //     padding: 2rem 0;
    //     line-height: 1.5;
    //     text-align: justify;

    //     p {
    //         margin-bottom: 2rem;
    //     }

    //     @media screen and (max-width: $lg-bp) {
    //         text-align: left;
    //     }

    // }

}
</style>

<style lang="scss">
.about-title {
    font-size: 2rem;
    font-weight: 700;

    @media screen and (max-width: $md-bp) {
        font-size: 1.5rem;
        
    }
}

.description-paragraph {
    margin-bottom: 2rem;

}

.highlight {
    color: $primary-color;
    font-size: 1.05em;
}
</style>