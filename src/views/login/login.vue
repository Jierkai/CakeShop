<template>
  <div>
      <div class="container">
        <h2>welcome</h2>
        <div class="inputBox">
          <input type="text" class="input">
          <input type="password" class="input">
          <button class="btn-login">登录</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>
  .container{
    width: 80%;
    margin: 90px auto;
    text-align: center;
  }
  .input{
    width: 100%;
    font-size: 18px;
    padding: 8px 10px;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid #a2a2a2;
    outline: 0;
    margin: 10px 0;
  }
  .btn-login{
    width: 80%;
    height: 28px;
    border: 0;
  }
</style>