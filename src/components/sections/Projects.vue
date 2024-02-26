<script setup>
import ProjectCard from '../ProjectCard.vue';
import { useLanguageStore } from '@/stores/language';
import fr from '@/assets/languages/fr';
import en from '@/assets/languages/en';


const select = useLanguageStore();

const content = () => {
    if (select.language === 'fr') {
        return fr.projects;
    } else {
        return en.projects;    }

}


</script>


<template>
    <div class="projects" id="projects">
        <h2><span>#</span> Projects</h2>

        <div class="cards">

            <ProjectCard image="shoten.png" github="shoten_v1">
                <template #title>Shoten</template>
                <template #techno>Nuxt, Laravel and Sass</template>
                <template #description>{{ content().shoten }}</template>

            </ProjectCard>

            <ProjectCard image="shoten.png">
                <template #title>Shoten</template>
                <template #techno>Nuxt, Laravel and Sass</template>
                <template #description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tempora odit quod
                    deleniti sit nihil, a reprehenderit mollitia aut doloribus similique commodi rerum nisi distinctio,
                    eveniet quae ipsam accusantium quas placeat! Vero provident eius, deleniti pariatur inventore sint
                    repudiandae fuga doloribus debitis eveniet ipsam illo. Itaque quo reprehenderit eum
                    exercitationem.</template>

            </ProjectCard>

            <ProjectCard image="shoten.png">
                <template #title>Shoten</template>
                <template #techno>Nuxt, Laravel and Sass</template>
                <template #description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tempora odit quod
                    deleniti sit nihil, a reprehenderit mollitia aut doloribus similique commodi rerum nisi distinctio,
                </template>
            </ProjectCard>
            <ProjectCard image="shoten.png">
                <template #title>Shoten</template>
                <template #techno>Nuxt, Laravel and Sass</template>
                <template #description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tempora odit quod
                    deleniti sit nihil, a reprehenderit mollitia aut doloribus similique commodi rerum nisi distinctio,
                </template>
            </ProjectCard>
            <ProjectCard image="shoten.png">
                <template #title>Shoten</template>
                <template #techno>Nuxt, Laravel and Sass</template>
                <template #description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tempora odit quod
                    deleniti sit nihil, a reprehenderit mollitia aut doloribus similique commodi rerum nisi distinctio,
                </template>
            </ProjectCard>
           
        </div>





    </div>
</template>

<style scoped lang="scss">
.projects {
    min-height: 100vh;
    padding: 1rem 0;
   
    h2 {
        margin-bottom: 2rem;
    }


    .cards {
        margin: 0 3rem;
        display: flex;
        gap: 3rem;
        flex-wrap: wrap;
        
    }



}
</style>