<template>
  <q-page padding>
    <h1>Aqui van los posts...</h1>
    <h4>{{ store.post }}</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
      similique, est architecto quam earum neque quae ducimus officiis quasi
      tempore tempora accusantium, sed commodi alias? Aliquid aliquam maxime
      pariatur amet.
    </p>

    <EssentialCard
      v-for="card in EssentialCard"
      :key="card.title"
      v-bind="card"
    />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialCard from "components/postCard.vue";
import { useDataStore } from "../store/data.js";

export default defineComponent({
  name: "PostPages",

  components: {
    EssentialCard,
  },

  setup() {
    const store = useDataStore();

    const postsList = store.posts;

    console.log(postsList);

    return {
      EssentialCard: postsList,
      store,
    };
  },
});
</script>
