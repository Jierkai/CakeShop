<template>
  <div class="category">
    <topsearch>
      <input type="text" placeholder="生日蛋糕" slot="searchBox">
    </topsearch>
    <div>
      <div class="typeItem">
        <span>蛋糕</span>
        <span>布丁</span>
        <span>冰激凌</span>
        <span>奶茶</span>
      </div>
      <div class="ImgList">
        <img src="../../assets/img/cakeList/img.png" alt="">
        <img src="../../assets/img/cakeList/img_1.png" alt="">
        <img src="../../assets/img/cakeList/img_2.png" alt="">
        <img src="../../assets/img/cakeList/img_3.png" alt="">
        <img src="../../assets/img/cakeList/img_4.png" alt="">
        <img src="../../assets/img/cakeList/img_5.png" alt="">
        <img src="../../assets/img/cakeList/img_6.png" alt="">
        <img src="../../assets/img/cakeList/img_7.png" alt="">
        <img src="../../assets/img/cakeList/img_8.png" alt="">
        <img src="../../assets/img/cakeList/img_9.png" alt="">
        <img src="../../assets/img/cakeList/img_10.png" alt="">
        <img src="../../assets/img/cakeList/img_11.png" alt="">
        <img src="../../assets/img/cakeList/img_12.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Topsearch from "../../components/topsearch";
export default {
  name: "category",
  components:{
    Topsearch

  }
}
</script>

<style scoped>
.category{
  padding-bottom:60px ;
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
.typeItem{
  display: flex;
  justify-content: space-around;
  padding: 4px 0 25px 0;
}
.typeItem span{
  line-height: 35px;
}
.typeItem :first-child{
  border-bottom: 1px solid deeppink;
}
.ImgList img{
  width: 100%;
}
.ImgList{
  columns: 2;
  column-gap: 5px;
}
</style>