<template>
  <div>
    <topsearch>
      <input type="text" placeholder="搜索商品" slot="searchBox">
    </topsearch>
    <div class="body">
      <div class="allBtn">
        <input type="checkbox" >
        全选
      </div>
      <div>
        <card title="动物奶油蛋糕">
          <img src="../../assets/img/img.png" alt="" slot="img">
        </card>

      </div>
    </div>


  </div>
</template>

<script>
import Topsearch from "../../components/topsearch";
import Card from "../../components/card";
export default {
  name: "cart",
  components:{
    Card,
    Topsearch
  },
  methods:{

  }
}
</script>

<style scoped>
.body{
  padding: 0 15px;
}
.allBtn{
  line-height: 30px;
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
</style>