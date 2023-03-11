<template>
  <q-page padding>
    <h4>{{ store.msg }}</h4>
    <q-form class="row q-col-gutter-md" @submit.prevent="submitForm">
      <div class="col-12 col-sm-6">
        <q-input label="Author" v-model="author" />
        <q-input outlined filled label="Content" v-model="content" />
        <q-input outlined label="Group" v-model="group" />
      </div>
      <div class="col-12">
        <q-btn label="submit" color="primary" glossy type="submit" />
        <!-- //<q-btn label="seeposts" color="primary" @click="getinfo" /> -->
        <q-btn label="getgroups" color="primary" @click="getgroups" />
      </div>
    </q-form>
    <hr />
    <div>
      <EssentialCard
        v-for="card in EssentialCard"
        :key="card.id"
        v-bind="card"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialCard from "components/postCard.vue";
import { computed } from "vue";
import { storetoRefs } from "pinia";
import { useDataStore } from "../store/data.js";
const axios = require("axios");

export default defineComponent({
  name: "PostPages",

  components: {
    EssentialCard,
  },

  setup() {
    const store = useDataStore();
    const author = ref(null);
    const content = ref(null);
    const group = ref(null);
    const dataStore = useDataStore();
    var postlist = [];

    console.log("initial store", store.posts);

    const renderData = () => {
      postlist = store.posts;
    };

    const submitForm = async (e) => {
      try {
        await axios.post("http://localhost:3001/newpost", {
          author: e.target[0].value,
          content: e.target[1].value,
          group: e.target[2].value,
        });
      } catch (error) {
        console.log(error);
      }
      getinfo();
      reset();
    };

    store.orderByDate();

    const getinfo = async () => {
      const response = await store.getData();
      var postlist = store.posts;
      console.log("getinfo", postlist);
    };

    getinfo();

    const getgroups = async () => {
      const response = await axios("http://localhost:3001/groups")
        .then((response) => {
          var allgroups = response.data.map((r) => r.name);
          console.log(allgroups);

          store.groups = allgroups;
          //console.log("estees select", groupoption);
          console.log("esto es store", store.groups);
        })

        .catch((error) => console.log("Error", error.message));
    };

    const reset = () => {
      author.value = null;
      content.value = null;
      group.value = null;
    };

    return {
      store,
      EssentialCard: store.posts,
      author,
      content,
      group,
      submitForm,
      getinfo,
      getgroups,
      renderData,
    };
  },
});
</script>
