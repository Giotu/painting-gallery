import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const usePaintingsStore = defineStore("paintings", () => {
  const countPages = ref(0);
  const currentPage = ref(1);
  const paintings = ref([]);

  const fetchPaintings = async () => {
    try {
      const response = await axios.get(
        "https://test-front.framework.team/paintings",
        {
          params: {
            _page: currentPage.value,
            _limit: 6,
          },
        },
      );
      paintings.value = response.data;
      countPages.value = response.headers["x-total-count"];
    } catch (error) {
      console.log(error);
    }
  };

  return { paintings, fetchPaintings };
});

export default usePaintingsStore;
