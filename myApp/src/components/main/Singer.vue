<template>
    <div>
      <Head/>
      <van-tabs>
        <van-tab v-for="item of list" :title="item">
          <ul>
            <li v-for="item of singer">
              <a href="">
                <img src="./../../assets/images/2.jpg" alt="">
                <span>{{item}}</span>
              </a>
            </li>
          </ul>
        </van-tab>
        <van-index-bar></van-index-bar>
      </van-tabs>
    </div>
</template>

<script>
  import Head from './../small/Head'
  export default {
      name: "Singer",
      components:{Head},
      data() {
        return {
          activeName: 'a',
          list:['分类(默认热门)','华语男','华语女','华语组合','欧美男','欧美女','欧美组合'],
          singer:['林俊杰','陈奕迅','周杰伦','邓紫棋','薛之谦','花粥','李荣浩','华晨宇','周深']
        }
      }
  }
</script>

<style scoped>
  .van-tab span{
    font-size: 0.26rem;
  }
  ul{
    padding-left: 0.30rem;
  }
  a{
    height: 2rem;
    font-size:0.36rem;
  }
  img{
    width: 2rem;
    height: 2rem;
  }
</style>
