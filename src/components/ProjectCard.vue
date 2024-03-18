<script setup>

import Button from './Button.vue';

const props = defineProps(['image', 'github', 'link']);

import fr from '@/assets/languages/fr';
import en from '@/assets/languages/en';
import { useLanguageStore } from '@/stores/language';


const select = useLanguageStore();

const content = () => {
    if (select.language === 'fr') {
        return fr.projects;
    } else {
        return en.projects;
    }

}

</script>

<template>
    <div class="project-card">

        <div class="img-wrapper">
            <!-- <img :src="'src/assets/images/projects/' + image" :alt="github + ' preview'"> -->
            <slot name="image"></slot>
        </div>

        <div class="flex content-header">
            <h3>
                <slot name="title"></slot>
            </h3>

            <p class="techno">
                <!-- <span>Tech : </span> -->
                <slot name="techno" class="techno-list"> </slot>
            </p>

        </div>

        <p class="description">
            <slot name="description"></slot>
        </p>


        <div class="project-btn flex">
            <Button  :link="`https://github.com/tsavou/${github}`">
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z"
                        fill="#ADF0DD" />
                </svg>

                <span>{{ content().github }}</span>
            </Button>

            <Button v-if="link" :link="link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 13C10.4295 13.5742 10.9774 14.0492 11.6066 14.393C12.2357 14.7367 12.9315 14.9411 13.6467 14.9924C14.3618 15.0436 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59702 21.9548 8.334 21.9434 7.02302C21.932 5.71204 21.4061 4.45797 20.4791 3.53093C19.5521 2.60389 18.298 2.07805 16.987 2.06666C15.676 2.05526 14.413 2.55924 13.47 3.47003L11.75 5.18003M14.0002 11C13.5707 10.4259 13.0228 9.9508 12.3936 9.60704C11.7645 9.26328 11.0687 9.05886 10.3535 9.00765C9.63841 8.95643 8.92061 9.05961 8.24885 9.3102C7.5771 9.56079 6.96709 9.95291 6.4602 10.46L3.4602 13.46C2.54941 14.403 2.04544 15.666 2.05683 16.977C2.06822 18.288 2.59407 19.542 3.52111 20.4691C4.44815 21.3961 5.70221 21.922 7.01319 21.9334C8.32418 21.9447 9.58719 21.4408 10.5302 20.53L12.2402 18.82"
                        stroke="#ADF0DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <span>{{ content().demo }}</span>


            </Button>
        </div>





    </div>
</template>

<style scoped lang="scss">
.project-card {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 0.8rem;
    background-color: $background-btn;
    color: $secondary-color;
    border-radius: 1rem;
    width: 30rem;
    min-height: 58rem;
    transition: 0.5s ease-in-out;

    &:hover {

        .img-wrapper {
            filter: brightness(1);
        }
    }


    &:hover {
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }

    .img-wrapper {
        width: 100%;
        height: 44%;
        transition: 0.5s all ease-in-out;
        position: relative;
        filter: brightness(0.6);




        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            border-radius: 0.5rem;
        }

    }

    .content-header {
        align-items: center;
        justify-content: space-between;

        h3 {
            font-weight: 700;
            color: $primary-color;

        }

        .techno {
            span {
                font-weight: 700;
                color: $light-color;
            }

            display: flex;
            gap: 1rem;
            align-items: center;
            // justify-content: flex-end;
        }
    }



    .description {
        height: 18rem;
        font-size: 1.3rem;
        line-height: 1.6;
        text-align: justify;

    }

    .project-btn {
        justify-content: space-between;
        gap: 0.5rem;
        width: 100%;

        .btn {
            padding: 0.5rem; 
            text-transform: none;
            font-size: 1.2rem;
            padding: 0.3rem;

        }

        @media screen and (max-width: $sm-bp) {           
            span{
               font-size: 1.1rem;
               
            }            
        }

               
    }

    .project {
        
        padding: 0 0.5rem;
        margin-top: 0.5rem;
        align-self: flex-end;


    }

}
</style>
