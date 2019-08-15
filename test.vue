<template>
  <div>
    <div class="box">
      <span
        :class="active==index?'itemsCSS active':'itemsCSS default'"
        @click="activeClk(index)"
        v-for="(item,index) in arr"
        :key="index"
      >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      arr: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    };
  },
  methods:{
      activeClk(index){
          this.active=index
      }
  }
};
</script>

<style lang="less">
.box {
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  font-size: 20px;
  span {
    display: inline-block;
    padding: 15px;
    margin: 0 10px;
  }

  .active {
    background: red;
  }
  .default {
    background: cccccc;
  }
}
</style>