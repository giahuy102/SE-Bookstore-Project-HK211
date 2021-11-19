<template>
  <div class="emptyCart">
    <img :src="image" alt="" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  props: ["image", "message"],
};
</script>
<style scoped>
.emptyCart img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin: 20px;
}
</style>