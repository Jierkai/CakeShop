<template>
  <div class="nav_item" @click="navClick">
    <div v-if="isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "navBtnItem",
  props:{
    title:{
      type:String,
      default:'首页'
    },
    path:{
      type:String,
      default: '/index'
    }
  },
  computed:{
    isActive(){
      return  this.$route.path.indexOf(this.path) == -1
    }
  },
  methods:{
    navClick() {
      this.$router.replace(this.path)
    }
  }

}
</script>

<style scoped>
.nav_item{
  width: 25%;
  text-align: center;
  font-size: 13px;
}
.nav_item img{
  height:30px;
  text-align: center;
  display: block;
  margin: 5px auto;
}
</style>