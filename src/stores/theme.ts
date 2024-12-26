import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("theme", () => {
  const isDark = ref(true);

  const toggleTheme = () => {
    isDark.value = !isDark.value;

    if (isDark.value) {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
  };

  const initTheme = () => {
    document.body.dataset.theme = "dark";
  };

  return {
    isDark,
    toggleTheme,
    initTheme,
  };
});
