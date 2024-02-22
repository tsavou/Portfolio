
<script setup>

import Button from '@/components/Button.vue';

</script>


<template>
    <div class="home flex" id="home">

        <div class="text">
            <p class="title">Hello, my name is <span>Théo Savourat</span> </p>
            <p class="title">I'm a <span>Web Developer</span></p>
            <p class="about">Passionate about <span>Web Development</span> and actively seeking for new and exciting
                opportunities to
                apply my skills and contribute to innovative projects.</p>

            <a href="./CV_Theo_Savourat.pdf" target="_blank">
                <Button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V7M14 2V8H20M9 18L7.5 16.5M5 17C5.39397 17 5.78407 16.9224 6.14805 16.7716C6.51203 16.6209 6.84274 16.3999 7.12132 16.1213C7.3999 15.8427 7.62087 15.512 7.77164 15.1481C7.9224 14.7841 8 14.394 8 14C8 13.606 7.9224 13.2159 7.77164 12.8519C7.62087 12.488 7.3999 12.1573 7.12132 11.8787C6.84274 11.6001 6.51203 11.3791 6.14805 11.2284C5.78407 11.0776 5.39397 11 5 11C4.20435 11 3.44129 11.3161 2.87868 11.8787C2.31607 12.4413 2 13.2044 2 14C2 14.7956 2.31607 15.5587 2.87868 16.1213C3.44129 16.6839 4.20435 17 5 17Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    Check out my resume
                </Button>
            </a>

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
    height: 100vh;



    .text {

        padding: 0 10rem;
        line-height: 1.5;

        .title {
            // color: $light-color;
            font-size: 3rem;

        }

        .about {
            margin: 4rem 0;
        }

        p {
            span {
                color: $primary-color;
            }
        }

    }

    .img-wrapper {

        border-radius: 5rem;
        overflow: hidden;
        position: relative;
        max-width: 40rem;
        border: $secondary-color 1px solid;



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
        }

    }


}</style>