<template>
    <div>
    <div :class="{ad:true,bbd:false,...classMap}">aaa</div>
    <div :class="[ 'zzzzz', 2>1?'aaaTrue':'aaaFalse', { bbbClass: true } ]">bbb</div>
    <div class="ggg hhh">ccc</div>

    </div>
</template>

<script>
export default {
    name: 'className',
    data(){
        return {
            classMap: {
                aaa: true,
                bbb: false,
            }
        }
    }

}
</script>

<style>

</style>