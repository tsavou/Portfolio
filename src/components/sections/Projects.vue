<script setup>
import ProjectCard from '../ProjectCard.vue';


</script>


<template>
    <div class="projects" id="projects">
        <h2><span>#</span> Projects</h2>

        <div class="cards">

            <ProjectCard image="shoten.png" github="shoten_v1">
                <template #title>Shoten</template>
                <template #techno>Nuxt, Laravel and Sass</template>
                <template #description>Application web développée en Nuxt.js et Laravel pour l'API, avec une approche
                    mobile-first. Explorez un catalogue de manga et ajoutez facilement les volumes que vous possédez à votre
                    collection. Avec son interface conviviale, Shoten offre une expérience fluide pour gérer votre
                    collection de manga en ligne.</template>

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