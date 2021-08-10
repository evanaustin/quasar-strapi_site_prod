<template>
  <div
    class="hero"
    :style="`background-image: url(${strapiURL}/${backgroundImage.formats.large.url})`"
  >
    <h4 v-if="title">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    backgroundImage: {
      type: Object,
    },
    title: {
      type: String,
    },
  },
  computed: {
    strapiURL() {
      return process.env.STRAPI_URL;
    },
  },
};
</script>

<style lang="scss">
.hero {
  padding: 25rem 0;
  background-size: cover;
  background-position: center 25%;
}
</style>
