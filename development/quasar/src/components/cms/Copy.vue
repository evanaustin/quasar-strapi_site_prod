<template>
  <div :class="classes">
    <Markdown>{{ copy }}</Markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Copy",
  props: {
    styles: {
      type: Object,
      default: null,
    },
    copy: {
      type: String,
      default: "",
    },
  },
  components: {
    Markdown: VueMarkdown,
  },
  computed: {
    strapiURL() {
      return process.env.STRAPI_URL;
    },
    alignment() {
      if (!this.styles) return false;
      return this.styles.alignment ? `text-${this.styles.alignment}` : "";
    },
    padding() {
      if (!this.styles) return false;
      
      const px = this.styles.padding_left_right;
      const py = this.styles.padding_top_bottom;

      return (px ? `q-px-${px}` : "") + (px && py ? " " : "") + (py ? `q-py-${py}` : "");
    },
    classes() {
      if (!this.styles) return false;
      return this.alignment + (this.alignment && this.padding ? " " : "") + this.padding;
    },
  },
};
</script>
