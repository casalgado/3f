<template>
  <div>
    <h1>Main Section</h1>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "MainSection",
  props: ["content"],
  mounted() {
    console.log(this.con);
  },
};
</script>

<style scoped>
</style>