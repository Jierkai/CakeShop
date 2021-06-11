<template>
  <div class="user">
    <topsearch>
      <img src="../../assets/img/img_1.png" alt="" slot="img" width="100%">
      <input type="text" slot="img" placeholder="生日蛋糕">
    </topsearch>
    <ul>
      <li>
        <img src="../../assets/img/cake.svg" alt="">
        <p>蛋糕</p>
      </li>
      <li>
        <img src="../../assets/img/cake.svg" alt="">
        <p>面包</p>
      </li>
      <li>
        <img src="../../assets/img/cake.svg" alt="">
        <p>面包</p>
      </li>
      <li>
        <img src="../../assets/img/cake.svg" alt="">
        <p>面包</p>
      </li>
      <li>
        <img src="../../assets/img/cake.svg" alt="">
        <p>面包</p>
      </li>
      <li>
        <img src="../../assets/img/cake.svg" alt="">
        <p>面包</p>
      </li>
      <li>
        <img src="../../assets/img/cake.svg" alt="">
        <p>面包</p>
      </li>
      <li>
        <img src="../../assets/img/cake.svg" alt="">
        <p>面包</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Topsearch from "../../components/topsearch";
export default {
  name: "user",
  components: {Topsearch}
}
</script>

<style scoped>
.user{
  padding-bottom: 50px;
}
.topDiv{
  padding-top: 0 !important;
}
.topDiv input{
  width: 80%;
  margin: 0 auto;
  display: block;
  padding: 3px 30px;
  border-radius: 25px;
  border: 1px solid white;
  background: #e83a81;
  box-sizing: border-box;
  outline: 0;
  color: white;
}
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li{
  width: 45%;
  list-style: none;
}
li img{
  display: block;
  width: 35%;
  margin: 8px auto;

}
li p{
  text-align: center;
  font-size: 13px;
  color: #3d3d3d;
  margin: 12px 0;
}
</style>