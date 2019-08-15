<template>
    <div>
      <Head/>
      <div class="tab">
        <div class="tab-title">
          <div v-for="(item,index) of list"
          :class="{active:index == num}"
          :key='index'
          @click="tab(index)"
          class="title"
          >{{item}}
          </div>
          <div class="letter">
            <i>首字母：</i>
            <span
              :class="active==index?'itemsCSS active':'itemsCSS default'"
              @click="activeClk(index)"
              v-for="(item,index) in arr"
              :key="index"
            >{{item}}</span>
          </div>

        </div>
        <div class="content" style="width:100%;">
          <div
          v-for='(items,index) of lis'
          :key='index'
          v-show=" index == num ">{{items}}</div>
          <div class="zimu">
          <div
          v-for='(it,index) of arrL'
          :key='index'
          v-show=" index == active ">{{it}}</div>
        </div>
        </div>

      </div>

    </div>
</template>

<script>
  import Head from './../components/small/Head'
  export default {
      name: "Singer",
      components:{Head},
      data() {
        return {
          num: 1,
          list:['分类(默认热门)','华语男','华语女','华语组合','欧美男'],
          lis:['邓紫棋','薛之谦','花粥','李荣浩','华晨宇','周深'],
          active: 1,
          arr: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
          arrL:['A-lin','Beyond','陈奕迅','邓丽君','Exo','F.I.R','G.E.M.邓紫棋']
        }
      },
      methods:{
          tab(index) {
              this.num = index;
          },
          activeClk(index){
              this.active=index;
          }
      }
  }
</script>

<style scoped>

  img{
    width: 2rem;
    height: 2rem;
  }
  .tab-title{
    width: 100%;
    height: 2.00rem;
  }
  .tab-title .title{
    line-height: 0.60rem;
    float: left;
    font-size:0.28rem;
    margin-right:0.30rem;
  }
  .tab-title .active{
    color:#D44439;
  }
  .letter{
    line-height: 0.60rem;
    /* margin: */
  }
  i{
    font-size:0.28rem;
    font-style: normal;
    color:#ccc;
    float:left;
  }
  span{
    float: left;
    font-size: 0.30rem;
    margin:0 0.1rem;
  }
</style>
