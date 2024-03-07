
<script setup>


import Button from '@/components/Button.vue';
import fr from '@/assets/languages/fr';
import en from '@/assets/languages/en';
import { useLanguageStore } from '@/stores/language';


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
    <div class="home flex" id="home">

        <div class="text">
            <p class="welcome"> {{ content().welcome }}</p>
            <p class="title"> Théo Savourat </p>
            <p class="job"> {{ content().job }}</p>
            <p class="about">{{ content().description }}</p>

                <Button link="./CV_Theo_Savourat.pdf">
                    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.66665 36.6666H30C30.884 36.6666 31.7319 36.3155 32.357 35.6903C32.9821 35.0652 33.3333 34.2174 33.3333 33.3333V12.5L24.1666 3.33331H9.99998C9.11592 3.33331 8.26808 3.6845 7.64296 4.30962C7.01784 4.93474 6.66665 5.78259 6.66665 6.66665V11.6666M23.3333 3.33331V13.3333H33.3333M15 30L12.5 27.5M8.33331 28.3333C8.98992 28.3333 9.6401 28.204 10.2467 27.9527C10.8534 27.7014 11.4046 27.3331 11.8688 26.8688C12.3331 26.4046 12.7014 25.8534 12.9527 25.2467C13.204 24.6401 13.3333 23.9899 13.3333 23.3333C13.3333 22.6767 13.204 22.0265 12.9527 21.4199C12.7014 20.8133 12.3331 20.2621 11.8688 19.7978C11.4046 19.3335 10.8534 18.9652 10.2467 18.7139C9.6401 18.4626 8.98992 18.3333 8.33331 18.3333C7.00723 18.3333 5.73546 18.8601 4.79778 19.7978C3.8601 20.7355 3.33331 22.0072 3.33331 23.3333C3.33331 24.6594 3.8601 25.9312 4.79778 26.8688C5.73546 27.8065 7.00723 28.3333 8.33331 28.3333Z"
                            stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M20.7278 29.1278C20.0744 29.1278 19.5133 28.9844 19.0446 28.6974C18.5787 28.4105 18.2193 28.0142 17.9664 27.5085C17.7164 27 17.5914 26.4148 17.5914 25.7528C17.5914 25.0881 17.7193 24.5014 17.975 23.9929C18.2306 23.4815 18.5914 23.0838 19.0574 22.7997C19.5261 22.5128 20.0801 22.3693 20.7193 22.3693C21.2505 22.3693 21.7207 22.4673 22.1298 22.6634C22.5417 22.8565 22.8699 23.1307 23.1142 23.4858C23.3585 23.8381 23.4977 24.25 23.5318 24.7216H22.0574C21.9977 24.4062 21.8556 24.1435 21.6312 23.9332C21.4096 23.7202 21.1127 23.6136 20.7406 23.6136C20.4252 23.6136 20.1483 23.6989 19.9096 23.8693C19.671 24.0369 19.4849 24.2784 19.3514 24.5938C19.2207 24.9091 19.1554 25.2869 19.1554 25.7273C19.1554 26.1733 19.2207 26.5568 19.3514 26.8778C19.4821 27.196 19.6653 27.4418 19.9011 27.6151C20.1397 27.7855 20.4196 27.8707 20.7406 27.8707C20.9679 27.8707 21.171 27.8281 21.35 27.7429C21.5318 27.6548 21.6838 27.5284 21.8059 27.3636C21.9281 27.1989 22.0119 26.9986 22.0574 26.7628H23.5318C23.4949 27.2259 23.3585 27.6364 23.1227 27.9943C22.8869 28.3494 22.5659 28.6278 22.1596 28.8295C21.7534 29.0284 21.2761 29.1278 20.7278 29.1278ZM30.6451 22.4545L28.3141 29H26.6096L24.2786 22.4545H25.9235L27.4277 27.3168H27.4959L29.0044 22.4545H30.6451Z"
                            fill="CurrentColor" />
                    </svg>

                    {{ content().resume }}
                </Button>
            

        </div>

        <div class="img-wrapper">

            <img src="@/assets/images/pp.jpg" alt="photo de Théo">
            <div class="overlay"></div>
        </div>




    </div>
</template>

<style lang="scss" scoped>
.home {
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 8rem);

    @media screen and (max-width: $lg-bp) {
        flex-direction: column;
        padding-top: 10rem;
        height: auto;
        gap: 5rem;
    }
        
    


    .text {
        text-align: left;
        padding: 0 5rem;
        line-height: 1.5;
        max-width: 70%;

        @media screen and (max-width: $lg-bp) {
            padding: 0;
            max-width: 100%;
            
        }

        .welcome {
            // color: $secondary-color;
            font-style: italic;
        }

        .title {
            // color: $light-color;
            font-size: 4rem;
            font-weight: 700;

            @media screen and (max-width: $md-bp) {
                font-size: 3.5rem;
            }

        }

        .job {

            color: $primary-color;
            font-weight: 700;
            font-size: 2rem;

        }

        .about {
            margin: 3.5rem 0;
            
        }
        

    }

    .img-wrapper {

        border-radius: 5rem;
        overflow: hidden;
        position: relative;
        max-width: 30rem;
        border: $secondary-color 1px solid;

        @media screen and (max-width: $md-bp) {

            max-width: 24rem;
        }



        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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

            &:hover {
                opacity: 0;
                transition: all 1s ease-in-out;
            }
        }

    }


}
</style>