<template>
  <div :class="{ isCol: direc, isRow: !direc }" @click="isClick()">前台</div>
</template>

<script>
export default {
  props: {
    direc: Boolean,
  },
  methods: {
    isClick() {
      console.log(123);
    },
  },
};
</script>

<style scoped>
.door {
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 5px;
  background: rgb(184, 181, 181);
}

.isRow {
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 5px;
  background: rgb(184, 181, 181);
  border-radius: 30px;
}
.isCol {
  width: 50px;
  height: 150px;
  line-height: 130px;
  font-size: 18px;
  letter-spacing: 5px;
  text-align: center;
  background: rgb(184, 181, 181);
  border-radius: 30px;
}
</style>