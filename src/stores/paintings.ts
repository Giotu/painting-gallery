import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Painting } from "@/types/Painting";
import type { Params } from "@/types/Params";

const usePaintingsStore = defineStore("paintings", () => {
  const countPages = ref(0);
  const currentPage = ref(1);
  const paintings = ref<Painting[]>([]);

  const fetchPaintings = async (
    query?: string,
    page: number = currentPage.value,
  ) => {
    try {
      const params: Params = {
        _page: page,
        _limit: 6,
      };

      if (query) {
        params.q = query;
      }
      const response = await axios.get(
        "https://test-front.framework.team/paintings",
        {
          params,
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
