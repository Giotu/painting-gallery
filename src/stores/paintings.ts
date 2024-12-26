import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Painting } from "@/types/Painting";
import type { Params } from "@/types/Params";
import type { Author } from "@/types/Author";
import type { Location } from "@/types/Location";

const usePaintingsStore = defineStore("paintings", () => {
  const countPages = ref(0);
  const currentPage = ref(1);
  const paintings = ref<Painting[]>([]);
  const authors = ref<Author[]>([]);
  const locations = ref<Location[]>([]);
  const searchQuery = ref("");
  const isLoading = ref(false);

  const fetchPaintings = async (
    query?: string,
    page: number = currentPage.value,
  ) => {
    try {
      currentPage.value = page;
      searchQuery.value = query || "";
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
      countPages.value = Math.ceil(response.headers["x-total-count"] / 6);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(
        "https://test-front.framework.team/authors",
      );
      authors.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        "https://test-front.framework.team/locations",
      );
      locations.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    paintings,
    authors,
    locations,
    fetchPaintings,
    countPages,
    currentPage,
    searchQuery,
    fetchAuthors,
    fetchLocations,
    isLoading,
  };
});

export default usePaintingsStore;
