import { defineStore } from "pinia";
import { ref } from "vue";
import fr from "../assets/languages/fr.js";
import en from "../assets/languages/en.js";

export const useLanguageStore = defineStore("language", () => {

    const language = ref("fr");
    // const content = ref([]);
    
    // const loadContent = () => {
    //     if (language.value === "fr") {
    //         content.value = fr;
    //     } else if (language.value === "en") {
    //         content.value = en;
    //     }
    // }

  
    

  
    
    return {
        language,
        // loadContent,        
    }
})