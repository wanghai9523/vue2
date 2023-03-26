<template>
  <div>23213132
    <div>
    <video src="blob:https://ke.qq.com/8435d7e5-1529-4a07-ae37-14a4a6bee33e"></video>
  </div>
  </div>
  
</template>

<script>
import { getRequest } from '@/utils/request';

const request = getRequest('json');

export default {
    mounted() {
        console.log('homePageMounted');
        this.get_filesize("http://www.qianduanheidong.com/static/img/gongzhonghao.jpg", (size) => {
            // alert("The size of foo.exe is: " + size + " bytes.");
            console.log(size);
        }, {aaa: 1, vbvv: 2})
    },
    methods: {
        get_filesize(url, callback, data) {
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
                url: '/wedrug/v1/newCrownSpecificDrugs/contraindicated/tools?a=1',
                method: 'post',
                data,
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