<template>
    <div class="container">
        <router-link to="/home">Go to Home</router-link>
        &emsp;
        <router-link to="/about">Go to About</router-link>
        <br />

        <router-view :style="{ marginTop: '1rem' }"></router-view>
        <button @click="jumpToAbout">jumpToAbout</button>
        &emsp;
        <button @click="jumpToHome">jumpToHome</button>
        <br />

        <button @click="jumpToAbout(123)">addParamsJumpToAbout</button>
        &emsp;
        <button @click="jumpToHome(456)">addParamsJumpToHome</button>
        <br />
        <div>
            <button> </button>
        </div>
        <button class="logBtn" @click="log">log</button>
    </div>
</template>

<script>
export default {
    name: "routerPage",
    // async beforeRouteUpdate(to, from) {
    //     // 对路由变化做出响应...
    //     // this.userData = await fetchUser(to.params.id)
    //     console.log('zzz', to, from);
    //     alert(to, from)
    // },
    created() {
        // this.$watch(
        //     () => this.$route.params,
        //     (toParams, previousParams) => {
        //         // 对路由变化做出响应...
        //         console.log(toParams, previousParams);
        //     }
        // )
    },
    methods: {
        jumpToAbout(arg) {
            this.$router.push(!isNaN(arg) ? `/about/${arg}?def=555&ggg=666` : '/about')
        },
        jumpToHome(arg) {
            console.log(arg);
            // this.$router.push(!isNaN(arg) ? `/home/${arg}?abc=123&fff=444` : '/home');
            this.$router.push({
                path: '/home',
                // name: 'NotFound',
                // 保留当前路径并删除第一个字符，以避免目标 URL 以 `//` 开头。
                params: { pathMatch: this.$route.path.substring(1).split('/') },
                // 保留现有的查询和 hash 值，如果有的话
                query: this.$route.query,
                hash: this.$route.hash,
            })
        },

        log() {
            console.log(this.$route);
        }
    }

}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    min-height: 100vh;

    a,
    div {
        font-size: 0.2rem;
    }

    .logBtn {
        width: 5rem;
        height: 3rem;
    }
}
</style>