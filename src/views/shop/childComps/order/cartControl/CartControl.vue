<template>
  <div class="cartcontrol">
    <transition name="roll">
      <div class="decrease" @click="decrease()" v-show="listItem.count">-</div>
    </transition>
    <div class="count" v-show="listItem.count">{{ listItem.count }}</div>
    <div class="add" @click.stop.prevent="add()">+</div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    listItem: {
      type: Object,
    },
  },
  methods: {
    decrease() {
      this.listItem.count--;
    },
    add() {
      if (!this.listItem.count) {
        Vue.set(this.listItem, "count", 1);
      } else {
        this.listItem.count++;
      }
    },
  },
};
</script>

<style scoped>
/* .cartcontrol {

} */
.count {
  display: inline-block;
  font-size: 13px;
  width: 20px;
  height: 16px;
  text-align: center;
}
.decrease,
.add {
  display: inline-block;

  border-radius: 50%;
  font-size: 15px;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;

  background: #ffd161;
}

.decrease{
  background:#e0dddd;
}

.roll-enter-active,
.roll-leave-active {
  transition: 0.4s all linear;
}
.roll-enter,
.roll-leave-to {
  transform: translateX(20px) rotate(180deg);
}
</style>