<template>
  <div :class="`text-${alignedContent.alignment}`">
    <h4 v-if="alignedContent.title">
      {{ alignedContent.title }}
    </h4>

    <h6 v-if="alignedContent.subtitle">
      {{ alignedContent.subtitle }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "AlignedContent",
  props: {
    alignedContent: {
      type: Object,
    },
  },
  computed: {
    strapiURL() {
      return process.env.STRAPI_URL;
    },
  },
};
</script>
