<template>
  <div class="topDiv">
    <slot name="img"></slot>
    <slot name="searchBox"></slot>
  </div>
</template>

<script>
export default {
  name: "topsearch"
}
</script>

<style scoped>
  .topDiv{
    background: #e83a81;
    padding: 35px 0 5px 0;
  }
  input::-webkit-input-placeholder{
    color: white;
  }
</style>