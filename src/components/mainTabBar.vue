<template>
  <div>
    <nav-btn>
      <nav-btn-item title="首页" slot="index" path="/index">
        <img src="../assets/img/bootstrap.svg" alt="" slot="img">
      </nav-btn-item >
      <nav-btn-item title="分类"  slot="category" path="/category">
        <img src="../assets/img/navBar/cate.svg" alt="" slot="img">
        <img src="../assets/img/navBar/cate_act.svg" alt="" slot="img-active">
      </nav-btn-item>
      <nav-btn-item title="购物车" slot="cart"  path="/cart">
        <img src="../assets/img/navBar/cart.svg" alt="" slot="img">
        <img src="../assets/img/navBar/cart_act.svg" alt="" slot="img-active">
      </nav-btn-item>
      <nav-btn-item title="我的" slot="user"  path="/user">
        <img src="../assets/img/navBar/user.svg" alt="" slot="img">
        <img src="../assets/img/navBar/user_act.svg" alt="" slot="img-active">
      </nav-btn-item>
  </nav-btn>
  </div>
</template>

<script>
import navBtn from "./navBtn";
import navBtnItem from "./navBtnItem";
export default {
  name: "mainTabBar",
  components:{
    navBtn,
    navBtnItem
  }
}
</script>

<style scoped>
</style>