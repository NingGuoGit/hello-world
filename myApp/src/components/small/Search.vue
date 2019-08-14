<template>
    <div>
      <nav>
        <router-link to="/" style="float:left">
          <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
        </router-link>
        <van-search placeholder="请输入搜索关键词" v-model="value"  style="float:left"/>
      </nav>
      <h3>热门搜索</h3>
      <ul class="list">
        <li v-for="(item,index) of arr" :key='index'><a href=""><van-tag type="danger">{{item}}</van-tag></a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
          return{
            value:'',
            arr:['深呼吸-月弯弯','山楂树','sound of silence(寂静之声)','慢慢喜欢你','她真漂亮','往日时光','声入人心男团-好想大声说爱你','鹿 Be Free','心脏','就在这瞬间']
          }
        },
         methods: {
          onClickLeft() {
            Toast('返回');
          },
        }
    }
</script>

<style scoped>
  nav{
    height: 1.50rem;
  }
  nav a{
    font-size:0.40rem;
    line-height: 1.50rem;
    margin-left: 0.30rem;
    width: 10%;
  }
  .van-search{
    margin-top: 0.30rem;
    width: 85%;
  }
  h3{
    font-size:0.36rem;
    margin-left: 0.30rem;
    color:#ccc;
  }
  .list{
    padding-left: 0.30rem;
  }
  .list li{
    height: 0.60rem;
  }
  .van-tag--danger {
    background: #D44439;
    line-height: 0.40rem;
}
</style>
