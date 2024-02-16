import { defineStore } from "pinia";
import { ref } from "vue";

export const useDarkModeStore = defineStore("darkMode", () => {
    
    const isDark = ref(true);

    return {
        isDark
    }
})