<script setup>

import en from '@/assets/languages/en';
import fr from '@/assets/languages/fr';

import { useLanguageStore } from '@/stores/language';
import Github from './socials/icons/Github.vue';
import Linkedin from './socials/icons/Linkedin.vue';
import Email from './socials/icons/Email.vue';
import Resume from './socials/icons/Resume.vue';


const selectedLanguage = useLanguageStore();


const content = () => {
    if (selectedLanguage.language === 'fr') {
        return fr.home;
    } else {
        return en.home;
    }
}

</script>

<template>
    <footer>
        <div class="socials">
            <Github />
            <Linkedin />
            <Email class="mobile" />
            <Resume class="mobile" />

        </div>

        <div class="copyright">
            <p class="name"><span>T</span>heo <span>S</span>avourat</p>
            <p>© Copyright. 2024. </p>
            <p>Made by Theo Savourat</p>
        </div>

        <div class="infos">
            <p>
                <Email /> theosavourat@gmail.com
            </p>

            <p>
                <Resume /> {{ content().job }}
            </p>
        </div>


    </footer>
</template>

<style scoped lang="scss">

    footer {

        padding: 2rem 15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.3rem;
        border-top: 1px solid $secondary-color;

        @media screen and (max-width: $md-bp) {
            flex-direction: column;
            padding: 2rem 0;
        }

        .socials {
            .mobile {
                @media screen and (min-width: $md-bp) {
                    display: none;
                }
            }

        }

        .infos {
            p {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            @media screen and (max-width: $md-bp) {
                display: none;
            }
        }

        .copyright {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;


            .name {
                font-size: 4.5rem;
                font-weight: normal;
                font-family: 'Jalliya';

                span {
                    color: $primary-color;
                }
            }


        }
    }
</style>