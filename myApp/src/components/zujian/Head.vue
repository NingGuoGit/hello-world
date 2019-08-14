<template>
    <div>
      <Header>
        <van-nav-bar title="云音悦" left-text="" left-arrow>
          <van-icon name="wap-nav" slot="left" />
          <van-icon name="search" slot="right" @click="search"></van-icon>
        </van-nav-bar>
        <nav>
          <router-link to="/">推荐</router-link>
          <router-link to="/singer">歌手</router-link>
          <router-link to="/list">排行榜</router-link>
        </nav>
        <!-- <van-tabs v-model="active">
          <van-tab title="推荐" @click="tuijian"></van-tab>
          <van-tab title="歌手" @click="geshou"></van-tab>
          <van-tab title="排行榜" @click="paihang"></van-tab>
        </van-tabs> -->
      </Header>
    </div>
</template>

<script>

  export default {
    name: "Head",
    data() {
      return {
        active: 2,
      };
    },
    methods:{
      search(){
        this.$router.push('search')
      },
      // tuijian(){
      //   this.$router.push({path:'home'})
      // },
      // gehsou(){
      //   this.$router.push({path:'singer'})
      // },
      // paihang(){
      //   this.$router.push({path:'list'})
      // }
    }
  }

</script>

<style scoped>
div{
  background: #D44439;
  color: #fff;
}
.van-nav-bar .van-icon{
  color: #fff;
}
nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1rem;
}
nav a{
  color:#fff;
  font-size:0.36rem;
}
</style>
