
<script setup>

import Button from './Button.vue';

</script>


<template>
    <div class="home flex" id="home">

        <div class="text">
            <p class="title">Hello, I am <span>Théo Savourat</span> </p>
            <p class="title">I'm a <span>Web Developer</span></p>
            <p class="about">Passionate about <span>Web Development</span> and actively seeking for new and exciting opportunities to
                apply my skills and contribute to innovative projects.</p>

            <a href="./CV_Theo_Savourat.pdf" target="_blank"><Button>Check out my resume</Button></a>

        </div>

        <div class="img-wrapper">

            <img src="../assets/images/pp.jpg" alt="photo de Théo">
            <div class="overlay"></div>
        </div>




    </div>
</template>

<style lang="scss" scoped>
.home {
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 20rem);



    .text {

        padding: 0 10rem;
        line-height: 1.5;
        .title {
            color: $light-color;
            font-size: 3rem;
            
        }

        .about {
           margin:4rem 0;
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
        border:$secondary-color 1px solid;
         
        

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


}
</style>