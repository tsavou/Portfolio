<script setup>
import { ref } from 'vue';
import { useDarkModeStore } from '@/stores/DarkMode';
import { useLanguageStore } from '@/stores/language';
import fr from '@/assets/languages/fr';
import en from '@/assets/languages/en';
import Github from './socials/icons/Github.vue';
import Linkedin from './socials/icons/Linkedin.vue';
import Email from './socials/icons/Email.vue';
import Resume from './socials/icons/Resume.vue';

const mode = useDarkModeStore();

const select = useLanguageStore();

const content = () => {
    if (select.language === 'fr') {
        return fr.nav;
    } else {
        return en.nav;
    }
}

const scrolled = () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', scrolled);

const menuOpened = ref(false);

</script>

<template>
    <header :class="!mode.isDark ? 'light-mode' : 'dark-mode'">
        
        <h1><span>T</span>heo <span>S</span>avourat</h1>

        <input class="menu-btn" type="checkbox" id="menu-btn" v-model="menuOpened" />

        <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
        </label>

        <div class="menu">


            <nav>
                <ul>
                    <li> <a href="#home" @click="menuOpened = false"> <span>#</span>{{ content().home }}</a></li>
                    <li> <a href="#about" @click="menuOpened = false"> <span>#</span>{{ content().about }}</a></li>
                    <li> <a href="#skills" @click="menuOpened = false"> <span>#</span>{{ content().skills }}</a></li>
                    <li> <a href="#projects" @click="menuOpened = false"> <span>#</span>{{ content().projects }}</a></li>
                    <!-- <li> <a href="#contact"> <span>#</span>Contact</a></li> -->



                </ul>
            </nav>
            <div class="container flex">

                <div class="language">
                    <select name="language" id="language" v-model="select.language">
                        <option value="fr">FR </option>
                        <option value="en">EN</option>
                    </select>
                </div>

                <label class="toggle" for="switch">
                    <input id="switch" class="input" type="checkbox" v-model="mode.isDark">
                    <div class="icon icon--moon">
                        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                fill-rule="evenodd"></path>
                        </svg>
                    </div>

                    <div class="icon icon--sun">
                        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z">
                            </path>
                        </svg>
                    </div>
                </label>
            </div>



            <div class="socials">
                <Github />
                <Linkedin />
                <Email />
                <Resume />
            </div>


        </div>




    </header>
</template>

<style lang="scss" scoped>

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
    z-index: 100;
    background-color: $background-color;
    
    &.scrolled {
        box-shadow: 0 1rem 1rem #111C1B;


    }

    /* menu icon */
    .menu-icon {
        cursor: pointer;
        // display: inline-block;
        // float: right;
        padding: 1rem;
        position: relative;
        user-select: none;
        
        @media screen and (min-width: $md-bp) {
            display: none;
            
        }

        .navicon {
            background-color: $primary-color;
            display: block;
            height: 3px;
            position: relative;
            transition: background 0.2s ease-out;
            width: 27px;
            
            &:before,
            &:after {
                background-color: $primary-color;
                ;
                content: "";
                display: block;
                height: 100%;
                position: absolute;
                transition: all 0.2s ease-out;
                width: 100%;
            }
            
            &:before {
                top: 10px;
            }

            &:after {
                top: -10px;
            }
        }
    }
    
    /* menu btn */
    .menu-btn {
        display: none;
        
        &:checked~.menu {
            display: flex;
        }
        
        &:checked~.menu-icon .navicon {
            background: transparent;
        }
        
        &:checked~.menu-icon .navicon:before {
            transform: rotate(-45deg);
        }

        &:checked~.menu-icon .navicon:after {
            transform: rotate(45deg);
        }
        
        &:checked~.menu-icon:not(.steps) .navicon:before,
        &:checked~.menu-icon:not(.steps) .navicon:after {
            top: 0;
        }
    }
    
    
    
    .menu {
        display: flex;
        gap: 7rem;
        
        nav {
            ul {
                list-style: none;
                display: flex;
                gap: 2rem;
                
                
                li {
                    a {
                        font-weight: 500;
                        font-size: 1.8rem;
                        display: flex;
                        align-items: center;
                        
                        span {
                            color: $primary-color;
                            margin: 0.34rem;
                            font-size: 2rem;
                            
                            
                        }

                        &:hover {
                            font-weight: 700;
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
                padding: 0.5rem 0;
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
    
    
    
    
    .socials {
        display: none;
    }
    
    @media screen and (max-width: $md-bp) {
        
        justify-content: space-between;
        padding: 0 4rem;
        
        
        .menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            z-index: 3;
            height: calc(100vh - 6rem);
            background-color: $background-color;
            padding: 3rem;
            
            flex-direction: column;
            justify-content: space-evenly;
            gap: 3rem;
            
            nav {
                ul {
                    flex-direction: column;
                    
                    li {
                        width: 100%;
                        
                        a {
                            font-size: 2.5rem;
                            
                            span {
                                font-size: 3.5rem;
                            }
                        }
                    }
                }
                
            }

            .container {

                
                .language {
                    select {
                        font-size: 2rem;
                    }
                }
            }
            
            .socials {
                display: flex;
                justify-content: center;
                gap: 2rem;
            }
            
            
            
            
        }
        
    }
    
    
}

// Light mode
header.light-mode {
    background-color: $light-background-color;

    &.scrolled {
        box-shadow: 0 1rem 1rem $light-primary-color;
    }

    .language {
        select {

            color: $light-secondary-color;
            background-color: $light-background-color;
        }
    }

    .menu-icon {
        .navicon {
            
            background-color: $light-primary-color;

            &:before,
            &:after {
                background-color: $light-primary-color;
            }
        }
    }

    .menu {
        background-color: $light-background-color;

        nav {
            ul {
                li {
                    a {
                        &:hover {
                            color: $primary-color;
                        }
                    }
                }
            }
        }
    }


}
</style>