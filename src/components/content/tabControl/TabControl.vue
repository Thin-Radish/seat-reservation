<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    path: {
      type: Array,
    },
    top: String,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      if (this.path&&!this.$route.path.includes(this.path[index]) ){
        this.$router.replace(this.path[index]);
      }
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;

  border-bottom: 1px solid #f2f2f2;
}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;

  cursor: pointer;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  /* color: rgb(122, 155, 206); */
  color: rgb(43, 116, 226);
}


</style>