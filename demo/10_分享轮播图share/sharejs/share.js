$(document).ready(function(){
    $.ajax({
        url: "http://devsaascs.api.basicfinder.com/share/task-detail",
        type: "post",
        data: {
            task_id: "27403", // 图片测试
        },
        success: (res) => {
            console.log(res);
            let demand = res.data.info.project.attr.demand;
            let explain = res.data.info.project.attr.explain;
            $("#info").html(demand);
            $("#reminder .explain").html(explain);
            let taskExample = [];
            let config = res.data.template.config;
            $.each(config, (k, v) => {
                if (v.type === "image-uploader" || v.type === "audio-uploader" || v.type === "video-uploader") {
                    taskExample.push(v.exampleList)
                }
            });
            // 二维数组转一维数组
            let formatTaskExample = [].concat.apply([], taskExample);
            let len = formatTaskExample.length;
            let arrTaskExample = []
            if (len > 5) {
                arrTaskExample = formatTaskExample.slice(0, 5);
            } else {
                arrTaskExample = formatTaskExample;
            }
            // for (let i = 0; i < arrTaskExample; i++) {

            // }
        }
    })

    // 轮播图
   var swiper = new Swiper(".swiper-container", {
        spaceBetween: 7,
        slidesPerView: "auto",
        loop:true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
        },

    });
    
    
    
})