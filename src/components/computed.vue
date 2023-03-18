<template>
  <div class="hello">
<!--computed-->
    <div :class="{ad:true,bbd:false,...classMap}" v-bind:isShow="false">{{AC}}</div>
    <div :class="[ 'asdf', 'zzzzz' ]" v-bind:isHidden="123">{{BC}}</div>
    <div class="ggg hhh" @[click]="changeComputed">{{ CC }}</div>

    <div id="demo">
    <button @click="changeComputed">changeComputed</button>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </div>

<!--methods-->
    <!-- <div>{{AC()}}</div>
    <div>{{BC()}}</div> -->

    <button @click="addCount(true)">+++A</button>
    <button @click="addCount(false)">+++B</button>
    <button @click="addC(false)">+++C</button>
  </div>
</template>

<script>
export default {
  name: 'watchComputed',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      A: 0,
      B: 0,
      C: 0,
      firstName: "John",
      lastName: "Doe",
      classMap: {
        fff: true,
        zzz: true,
      }
    }
  },
  watch: {
    // A: function(newValue) {
    //   console.log('newValue',  newValue);
    // }
  },
  methods: {
    // AC(){
    //   console.log(this.count, 'AAA');
    //   return this.A;
    // },
    // BC(){
    //   console.log(this.count, 'BBB');
    //   return this.B
    // },
    addCount(flag){
      flag ? this.A += 1 : this.B += 1;
    },
    addC(){
      // this.CC.set(222);
      console.log(this.CC);
      this.CC = 222;
      // this.C += 1;
    },
    changeComputed() {
      this.fullName = 'bai X'
    }
  },
  computed: {
    click(){
      return 'click'
    },
    AC(){
      console.log(this.count, 'AAA');
      //只依赖了A，所以只会在A改变的时候触发内部的函数
      return this.A;
    },
    BC(){
      console.log(this.count, 'BBB');
      // BC 既依赖了A又依赖了B，所以无论是A改变还是B改变，都会触发BC内部的函数
      return !!this.A || 2>1 ? this.B : this.A ;
    },
    CC: {
      get: function() {
        console.log('setC.get');
        // return  this.A + this.B + this.C;
        return  this.A + '' + this.B;
      },
      set: function(newVale) {
        this.A = 2;
        this.B = 3;
        console.log('set', newVale);
      }
    },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        console.log(newValue);
        this.firstName = newValue;
        this.lastName = newValue.split(" ");
        console.log('fullNameSet');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
iframe {
  width: 100%;
  height: 100vh;
}
</style>
