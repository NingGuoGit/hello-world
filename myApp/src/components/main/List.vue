<template>
    <div>
      <Head/>
      <h3>官方榜</h3>
      <div class="list">
        <ul>
          <li v-for="item of arr">
            <a href="">
              <img src="./../../assets/images/3.jpg" alt="">
              <span>{{item}} </span>
            </a>
            <div class="sing">
              <div class="div" v-for="(items,index) of list">
                <h4>{{index+1}}.{{items}} </h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <h3>全球榜</h3>
      <van-grid :border="false" :column-num="3">
        <ul>
          <li v-for="it of lis" class="lis">
            <img src="./../../assets/images/5.jpg" alt="">
            <span>{{it}} </span>
          </li>
        </ul>
      </van-grid>
    </div>
</template>

<script>
  import Head from './../small/Head'
  export default {
      name: "List",
      components:{Head},
      data(){
        return{
          arr:['飙升榜','新歌榜','原创榜','热歌榜'],
          list:['红豆--王菲','飞云之下--林俊杰/韩红','慢慢喜欢你--莫文蔚'],
          lis:['说唱榜','古典音乐榜','电音榜','新声榜','音乐榜','国电榜']
        }
      }
  }
</script>

<style scoped>
  h3{
    font-size: 0.36rem;
    margin: 0.10rem 0 0 0.30rem;
  }
  a span{
    font-size: 0.32rem;
    position: absolute;
    bottom:0.3rem;
    right:0;
  }
  li a{
    position: relative;
    float: left;
  }
  .sing{
    float: left;
    margin-left: 0.50rem;
  }
  .sing h4{
    line-height: 0.70rem;
  }
  img{
    width: 2rem;
    height: 2rem;
  }
  ul{
    padding-left: 0.30rem;
  }
  li{
    height: 2.5rem;
  }
  h4{
    font-size:0.30rem;
  }
  .lis{
    position: relative;
    float: left;
    margin-right: 0.30rem;
  }
  .lis span{
    font-size:0.32rem;
    position: absolute;
    bottom:0.5rem;
    right:0;
  }
</style>
