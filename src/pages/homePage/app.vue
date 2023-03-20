<template>
  <div>23213132</div>
</template>

<script>
import { getRequest } from '@/utils/request';

const request = getRequest('from');

export default {
    mounted() {
        console.log('homePageMounted');
        this.get_filesize("http://www.qianduanheidong.com/static/img/gongzhonghao.jpg", (size) => {
            // alert("The size of foo.exe is: " + size + " bytes.");
            console.log(size);
        })
    },
    methods: {
        get_filesize(url, callback) {
            // var xhr = new XMLHttpRequest();
            // xhr.open("HEAD", url, true); // Notice "HEAD" instead of "GET",
            // //  to get only the header
            // xhr.onreadystatechange = function () {
            //     if (this.readyState == this.DONE) {
            //         callback(parseInt(xhr.getResponseHeader("Content-Length")));
            //     }
            // };
            // xhr.send();
            request({
                url: '/wedrug/v1/newCrownSpecificDrugs/contraindicated/tools',
                method: 'post',
            }).then((res)=>{
                console.log(res);
                callback()
            })
        }
    }

}
</script>

<style>

</style>