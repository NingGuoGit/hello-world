<template>
  <div class="home">
    <Head/>
    <div class="banner">
      <van-swipe :autoplay="1000" indicator-color="#D44439">
        <van-swipe-item><img src="./../assets/images/01.jpeg" alt=""></van-swipe-item>
        <van-swipe-item><img src="./../assets/images/02.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="./../assets/images/03.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="./../assets/images/04.jpg" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <h2>推荐歌单</h2>
    <div class="playlist">
      <van-grid :border="false" :column-num="3">
        <ul>
          <li v-for="item of list" key>
            <div>
              <img :src="item.src" alt="">
              <span>{{item.num}}</span>
            </div>
            <p>{{item.describe}}</p>
          </li>
        </ul>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Head from './zujian/Head'
import url1 from './../assets/images/1.jpg'
import url2 from './../assets/images/2.jpg'
import url3 from './../assets/images/3.jpg'
import url4 from './../assets/images/4.jpg'
import url5 from './../assets/images/5.jpg'
import url6 from './../assets/images/6.jpg'
import url7 from './../assets/images/7.jpg'
import url8 from './../assets/images/8.jpg'
import url9 from './../assets/images/9.jpg'
import url10 from './../assets/images/10.jpg'
import url11 from './../assets/images/11.jpg'
import url12 from './../assets/images/12.jpg'
export default {
  name: 'Home',
  components:{Head},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[
        {describe:'投我以木瓜',num:'111万',src:url1},
        {describe:'报之以琼琚',num:'222万',src:url2},
        {describe:'匪报也',num:'333万',src:url3},
        {describe:'永以为好也',num:'444万',src:url4},
        {describe:'投我以木桃',num:'555万',src:url5},
        {describe:'报之以琼瑶',num:'666万',src:url6},
        {describe:'匪报也',num:'777万',src:url7},
        {describe:'永以为好也',num:'888万',src:url8},
        {describe:'投我以木李',num:'999万',src:url9},
        {describe:'报之以琼玖',num:'101万',src:url10},
        {describe:'匪报也',num:'123万',src:url11},
        {describe:'永以为好也',num:'456万',src:url12},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-swipe-item img{
  width: 7.20rem;
  height: 3rem;
}
h2{
  font-size: 0.36rem;
  margin:0 0 0.10rem 0.30rem;
}
.playlist{
  padding-left: 0.30rem;
}
.playlist ul div{
  position: relative;
  height: 2rem;
}
.playlist ul li{
  float: left;
  margin-right: 0.30rem;
}
.playlist ul div img{
  width: 2.0rem;
  height: 2.0rem;
}
.playlist ul p{
  font-size:0.28rem;
  margin-bottom: 0.10rem;
  line-height: 0.60rem;
}
.playlist ul div span{
  font-size:0.28rem;
  position: absolute;
  top:0.10rem;
  right:0.10rem;
}
</style>
