<template>
  <div id="app">
    <TitleComponent @click="buttonClick"></TitleComponent>
    <Computed class="computed"></Computed>
    <Watch></Watch>
    <Emit @propsEvent="propsEvent"></Emit>
    <Emit @propsEvent="propsEvent($event)"></Emit>
    
    <div>-------常规-------</div>
    <Slot url="https://baidu.com">555555555</Slot>
    <div>-------后备内容-------</div>
    <Slot url="https://baidu.com"></Slot>
    <div>-------具名-------</div>
    <Slot url="https://baidu.com">
      <template v-slot:header>
        <h1 :style="{color: 'red'}">header</h1>
      </template>
        <h1>missNameSlot</h1>
      <template v-slot:footer>
        <h1 :style="{ color: 'green' }">footer</h1>
      </template>
    </Slot>
    <div>-------具名props传值插槽-------</div>
    <Slot url="https://baidu.com"> 
      <template v-slot:header="childrenProps">
        <h1 :style="{color: 'red'}"> {{ childrenProps.user + '7777' }}</h1>
      </template>
      <!-- <template v-slot:default="childrenProps">
        <h1>{{ childrenProps.user + '3333' }}</h1>
      </template> -->
      <template v-slot:default="{ user }">
        <h1>{{ user + '4444' }}</h1>
      </template>
      <template v-slot:footer>
        <h1 :style="{ color: 'green' }">footer</h1>
      </template>
    </Slot>
    <button>click</button>
  </div>
</template>

<script>
import TitleComponent from './components/titleComponent'
import Computed from './components/computed.vue';
import Watch from './components/watch.vue';
import Emit from './components/emit.vue';
import Slot from './components/slot.vue';

export default {
  name: 'App',
  components: {
    Computed,
    Watch,
    Emit,
    Slot,
    TitleComponent
  },
  data(){
    return {
      a:1,
      b:2,
      ccc: 3,
    }
  },
  methods: {
    // propsEvent(data){
    //   console.log('propsEvent', data)
    // }
    propsEvent(data){
      console.log('propsEvent', data)
    },
    buttonClick(){
      console.log(this.$root);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
