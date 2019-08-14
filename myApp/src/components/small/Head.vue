<template>
    <div>
      <Header>
        <van-nav-bar title="云音乐" left-text="" left-arrow>
          <van-icon name="wap-nav" slot="left" />
          <van-icon name="search" slot="right" @click="search"></van-icon>
        </van-nav-bar>
        <nav>
          <router-link to="/">推荐</router-link>
          <router-link to="/singer">歌手</router-link>
          <router-link to="/list">排行榜</router-link>
        </nav>
      </Header>
    </div>
</template>

<script>

  export default {
    name: "Head",
    data() {
      return {
        active: 2
    }
    },
    methods:{
      search(){
        this.$router.push('search')
      }
    }
  }

</script>

<style scoped>
.router-link-exact-active{
  color: #fff;
  border-bottom: 2px solid #fff;
  }
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
  color:#ccc;
  font-size:0.36rem;
}
[class*=van-hairline]::after{
  border:none;
}
</style>
