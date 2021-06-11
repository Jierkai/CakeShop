<template>
  <div>
    <div class="card">
      <div class="img">
        <slot name="img"></slot>
      </div>
      <div :class="{title:true}">
        <h3 class="first">{{title}}</h3>
        <span>规格：一份</span>
        <span>￥28.00</span>
        <div class="numBox">
          <button @click="numSub">-</button>
          <div class="num">{{num}}</div>
          <button @click="numAdd">+</button>
        </div>
      </div>
      <div class="del">
        <input type="checkbox">
        <div class="delBtn">
          <img src="../assets/img/del.svg" alt="" width="20px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data(){
    return{
      num:1
    }
  },
  props:{
    title:{
      type:String,
      default:'默认蛋糕'
    }
  },
  methods:{
    numAdd(){
      this.num ++
    },
    numSub(){
      if (this.num <= 1)
        alert('最低为一份');
      else
        this.num --
    }
  }
}
</script>

<style scoped>
.img img{
  width: 120px;
  height: auto;
  margin: 10px auto;
  display: block;
}
.card{
  display: flex;
  height: 160px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #e1e1e1;
  margin-bottom: 15px;
}
.img{
  width: 53%;
}
.title{
  width: 36%;
}
.first{
   color: red;
   margin: 10px 0;
   font-size: 16px;
    text-align: center;
 }
.title span{
  display: block;
  text-align: center;
  font-size: 12px;
}
.num{
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 13px;
  line-height: 20px;
  background: #eeeeee;
}
.numBox{
  display: flex;
  width: 60px;
  margin: 25px auto;
}
.numBox button{
  width: 20px;
  height: 20px;
  border: 0;
}
.del{
  width: 10%;
}
.del input{
  float: right;
  margin: 10px 4px 0 0;
}

.delBtn{
  margin: 75px 5px;
}
</style>