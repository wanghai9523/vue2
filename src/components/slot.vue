<template>
    <a v-bind:href="url" class="nav-link">
        <div>12313231</div>
        <slot name="header" v-bind:user="user">{{ user }}</slot>
        <slot v-bind:user="user">{{ user }}</slot> 
        <slot name="footer"></slot>
    </a>
</template>
  
<script>
// 自定义事件使用全小写或者kebab-case
export default {
    name: 'slot',
    props: {
        url:String,
        // user: Object,
    },
    data() {
        return {
            count: 0,
            user: 11111,
        }

    },
    methods: {
        logEmit(data) {
            data++;
            this.count = data;
            this.$emit('propsEvent', data);
        }
    }
}

</script>
  
<style></style>