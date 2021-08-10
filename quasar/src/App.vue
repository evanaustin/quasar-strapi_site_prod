<template>
  <div id="q-app">
    <router-view :id="`page${route}`"/>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    route() {
      let route = this.$route.fullPath;
      route = route.replace(/\//g, "_");
      route = route.replace(/#.*/, "");
      return route;
    },
  },
};
</script>
