<template>
  <div>
      <!-- {{ copy }} -->
    <Markdown>{{ copy }}</Markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Copy",
  props: {
    copy: {
      type: String,
    },
  },
  components: {
    Markdown: VueMarkdown,
  },
  computed: {
    strapiURL() {
      return process.env.STRAPI_URL;
    },
  },
};
</script>
