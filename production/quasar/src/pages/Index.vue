<template>
  <q-page>
    <div class="q-pa-lg">
      <div v-if="home && home.Content">
          <div
            v-for="(section, ix) in home.Content"
            :key="`section-${ix}`"
            :class="`${section.__component}`"
          >
            <div v-if="section.__component == 'page.hero'">
              <Hero
                :backgroundImage="section.background_image"
                :title="section.title"
              />
            </div>

            <div v-if="section.__component == 'page.copy'">
              <Copy :copy="section.copy" />
            </div>

            <div v-if="section.__component == 'page.before-after-slider'">
              <BeforeAfterSlider
                :beforeImage="section.before_image"
                :afterImage="section.after_image"
              />
            </div>
          </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import Copy from "src/components/cms/Copy";
import BeforeAfterSlider from "src/components/cms/BeforeAfterSlider";

export default {
  name: "Index",
  components: {
    Copy,
    BeforeAfterSlider,
  },
  computed: {
    strapiURL() {
      return process.env.STRAPI_URL;
    },
    home() {
      if (this.pages)
        return this.pages.filter((page) => {
          return page.name == "Home";
        })[0];
    },
  },
  data() {
    return {
      pages: false,
    };
  },
  async created() {
    const { data } = await axios.get(`${this.strapiURL}/pages`);
    this.pages = data;
  },
};
</script>
