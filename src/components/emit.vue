<template>
    <div>
        <button @click="logEmit(count)">emit.count++</button>
    </div>
  </template>
  
  <script>
  // 自定义事件使用全小写或者kebab-case
  export default {
      name: 'emitLog',
      data() {
          return {
              count: 0,
          }
      
    },
    methods: {
        logEmit(data){
            data++;
            this.count = data;
            this.$emit('propsEvent', data);
        }
  }
}

  </script>
  
  <style>
  
  </style>