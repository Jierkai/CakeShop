<template>
  <div class="nav">
    <slot name="index"></slot>
    <slot name="category"></slot>
    <slot name="cart"></slot>
    <slot name="user"></slot>
  </div>
</template>

<script>
export default {
  name: "navBtn"
}
</script>

<style scoped>
.nav{
  display: flex;
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  background-color: white;
}

</style>