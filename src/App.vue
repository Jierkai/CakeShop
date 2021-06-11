<template>
  <div id="app">

    <router-view />
    <main-tab-bar ></main-tab-bar>

  </div>
</template>
<script>
import login from "./views/login/login";
import mainTabBar from "./components/mainTabBar";
export default {
  name: "app",
  components:{
    login,
    mainTabBar
  }
}
</script>
<style>
*{
 margin: 0;
  padding: 0;
}

</style>
