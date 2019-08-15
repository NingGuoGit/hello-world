a<template>
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
        <div class="letter">
          <span v-for="(ite,index) of arr" :key="index">{{ite}} </span>
        </div>

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
          list:[
            {title:'分类(默认热门)',name:['邓紫棋','薛之谦','花粥','李荣浩','华晨宇','周深']},
            {title:'华语男',name:['林俊杰','陈奕迅','周杰伦','林宥嘉','薛之谦','毛不易','李荣浩','华晨宇','周深']},
            {title:'华语女',name:['田馥甄','王菲','刘若英','A-lin','莫文蔚','孙燕姿','邓紫棋','花粥']},
            {title:'华语组合',name:['SHE','苏打绿','F.I.R','牛奶咖啡','五月天','Beyond','逃跑计划','声入人心男团','好妹妹']},
            {title:'欧美男',name:['Justin Bieber','Christine Welch','The Chainsmokers','Billie Eilish','Coldplay','Maroon 5']},
          ],
          arr:['A','B','C','D','E','F','G']
          // arr:[
          //   {title:'A',content:['A-lin','阿杜'],flag:true},
          //   {title:'B',content:['Beyond','By2'],flag:false},
          //   {title:'C',content:['陈奕迅','陈小春','蔡依林'],flag:false},
          //   {title:'D',content:['邓丽君','大张伟'],flag:false},
          //   {title:'E',content:['Exo'],flag:false},
          //   {title:'F',content:['F.I.R','方大同'],flag:false},
          //   {title:'G',content:['G.E.M.邓紫棋','古巨基'],flag:false},
          // ]
        }
      },
      // methods:{
      //       hh(index){
      //           for(var i=0;i<this.arr.length;i++){
      //               this.arr[i].flag = false
      //           }
      //           this.arr[index].flag=true
      //       }
      //   }
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
  van-tabs{
    position: relative;
  }
  .letter{
    position: absolute;
    top:0;
    margin-left: 0.30rem;
  }
  .letter span{
    font-size:0.36rem;
  }
</style>
