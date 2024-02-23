<script setup>
import { useDarkModeStore } from '@/stores/DarkMode';

const mode = useDarkModeStore();

const scrolled = () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', scrolled);

</script>

<template>
    <header :class="!mode.isDark ? 'light-mode' : 'dark-mode'">
        <h1><span>T</span>héo <br> <span>S</span>avourat</h1>
        <nav>
            <ul>
                <li> <a href="#home"> <span>#</span>Home</a></li>
                <li> <a href="#about"> <span>#</span>About me</a></li>
                <li> <a href="#skills"> <span>#</span>Skills</a></li>
                <li> <a href="#projects"> <span>#</span>Projects</a></li>
                <!-- <li> <a href="#contact"> <span>#</span>Contact</a></li> -->

            </ul>

        </nav>

        <div class="container flex">

            <div class="language">
                <select name="language" id="language">
                    <option value="fr">
                        FR <img src="../assets/images/France.svg" alt="french flag">
                    </option>
                    <option value="en">EN <img src="../assets/images/EN.svg" alt="English flag">
                    </option>
                </select>
            </div>

            <label class="toggle" for="switch">
                <input id="switch" class="input" type="checkbox" v-model="mode.isDark">
                <div class="icon icon--moon">
                    <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                            fill-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="icon icon--sun">
                    <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z">
                        </path>
                    </svg>
                </div>
            </label>
        </div>




    </header>
</template>

<style lang="scss" scoped>
header.light-mode {
    background-color: $light-background-color;

    &.scrolled{
       box-shadow: 0 1rem 1rem $light-primary-color; 
    }

    .language {
        select {
            
            color: $light-secondary-color;
            background-color: $light-background-color;
        }
    }
    
}

header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem 0;
    height: 6rem;

    background-color: $background-color;

    &.scrolled{
        box-shadow: 0 1rem 1rem #111C1B;
        z-index: 100;

    }



    nav {
        ul {
            list-style: none;
            display: flex;
            gap: 2rem;


            li {
                a {
                    font-weight: 500;
                    font-size: 1.8rem;

                    span {
                        color: $primary-color;
                        margin: 0.34rem;
                        font-weight: 700;
                        font-size: 2rem;
                    }
                }
            }

        }

    }

    .language {
        select {
            background-color: $background-color;
            color: $secondary-color;
            border: none;
            border-radius: 0.5rem;
            padding: 0.5rem;
            font-weight: 700;
            cursor: pointer;

        }
    }

    .container {
        display: flex;
        align-items: center;
        gap: 1rem;

        .toggle {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            cursor: pointer;
            line-height: 1;

        }

        .input {
            display: none;
        }

        .icon {
            grid-column: 1 / 1;
            grid-row: 1 / 1;
            transition: transform 500ms;
        }

        .icon--moon {
            transition-delay: 200ms;
        }

        .icon--sun {
            transform: scale(0);
        }

        #switch:checked+.icon--moon {
            transform: rotate(360deg) scale(0);
        }

        #switch:checked~.icon--sun {
            transition-delay: 200ms;
            transform: scale(1) rotate(360deg);
        }

    }

}
</style>