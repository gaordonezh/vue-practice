<template>
  <div class="text-center">
    <img :src="url" width="100" alt="logo vue" />
  </div>
</template>

<script>
export default {
  data: () => ({
    url: "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg",
  }),
};
</script>
