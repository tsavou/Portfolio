<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDarkModeStore } from '@/stores/DarkMode';
const mode= useDarkModeStore();

</script>

<template>
 <div :class="!mode.isDark ? 'light-mode' : ''">
    <RouterView/>
 </div>
    
 
</template>

