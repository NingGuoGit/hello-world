<template>
    <div>
      <Head/>
      <van-tabs>
        <van-tab v-for="(item,index) of list" :title="item.title" :key='index'>
          <ul>
            <li v-for="(items,index) of item.name" :key='index'>
              <a href="">
                <img src="./../assets/images/2.jpg" alt="">
                <span>{{items}}</span>
              </a>
            </li>
          </ul>
        </van-tab>
        
      </van-tabs>

    </div>
</template>

<script>
  import Head from './../components/small/Head'
  export default {
      name: "Singer",
      components:{Head},
      data() {
        return {
          // list:['分类(默认热门)','华语男','华语女','华语组合','欧美男','欧美女','欧美组合'],
          // singer:['林俊杰','陈奕迅','周杰伦','邓紫棋','薛之谦','花粥','李荣浩','华晨宇','周深'],

          list:[
            {title:'分类(默认热门)',name:['邓紫棋','薛之谦','花粥','李荣浩','华晨宇','周深']},
            {title:'华语男',name:['林俊杰','陈奕迅','周杰伦','林宥嘉','薛之谦','毛不易','李荣浩','华晨宇','周深']},
            {title:'华语女',name:['田馥甄','王菲','刘若英','A-lin','莫文蔚','孙燕姿','邓紫棋','花粥']},
            {title:'华语组合',name:['SHE','苏打绿','F.I.R','牛奶咖啡','五月天','Beyond','逃跑计划','声入人心男团','好妹妹']},
            {title:'欧美男',name:['Justin Bieber','Christine Welch','The Chainsmokers','Billie Eilish','Coldplay','Maroon 5']},
          ],

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
  li{
    border-bottom: 1px solid #ccc;
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
