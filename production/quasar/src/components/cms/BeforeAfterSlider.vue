<template>
  <img-comparison-slider>
    <img
      slot="before"
      :src="`${strapiURL}/uploads/${afterImage.formats.large.hash}${afterImage.formats.large.ext}`"
    />

    <img
      slot="after"
      :src="`${strapiURL}/uploads/${beforeImage.formats.large.hash}${beforeImage.formats.large.ext}`"
    />
  </img-comparison-slider>
</template>

<script>
import "img-comparison-slider";

export default {
  name: "BeforeAfterSlider",
  props: {
    beforeImage: {
      type: Object,
    },
    afterImage: {
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

<style lang="scss">
img-comparison-slider {
  --divider-width: 5px;
  --divider-color: #fff;
  --handle-size: 25px;
  --handle-color: #fff;
  --handle-opacity: 1;

  &:focus {
    outline: none;
  }
}
</style>
