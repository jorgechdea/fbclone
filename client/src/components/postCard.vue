<template>
  <div class="q-pa-md col-12 q-gutter-md">
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6 text-wight-bold">{{
            author
          }}</q-item-label>
          <q-item-label class="text-grey text-subtitle" content>{{
            content
          }}</q-item-label>
          <q-item-label class="text-caption self-end items-end" updatedAt>{{
            updatedAt
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useDataStore } from "../store/data.js";

export default defineComponent({
  name: "EssentialCard",
  props: {
    author: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      default: "",
    },
    updatedAt: {
      type: Date,
      default: "",
    },
    id: {
      type: Number,
    },
  },
  setup() {
    const ondelete = (key) => {
      console.log(key);
    };

    return {
      ondelete,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
