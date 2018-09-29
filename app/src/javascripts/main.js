/**
 * Created by sushaochun on 2018/9/27.
 */
/*
 *  入口文件
 */

(function(){
    var html1 = require('../template/slider1.html');//可以动态引入html模版
    $(document).ready(function () {
        /*全局变量*/
        var pageinit = true;


        /*
         * 自定义动画函数
         * */
        function swiperAnimate(mySwiper) {
            console.log('加载动画');
            var allBoxes = mySwiper.slides[mySwiper.activeIndex].querySelectorAll('.ani');
            for (var i = 0; i < allBoxes.length; i++) {
                allBoxes[i].style.visibility = 'visible';
                var effect = " " + Animatechach(allBoxes[i]);
                allBoxes[i].className += effect;
            }

        };
        function clearswiperAnimate(Swiper) {
            console.log('清除动画');
            /*
             * 1.当初始化h5界面时，在oninit中清除所有动画
             * 2.当处于mySwiper.activeIndex，时清理其余页面当所有动画
             * */
            var currentIndex = Swiper.activeIndex;

            /*------------------------------*/
            if (pageinit) {
                for (var j = 0; j < Swiper.slides.length; j++) {
                    var allBoxes = Swiper.slides[j].querySelectorAll('.ani');
                    for (var i = 0; i < allBoxes.length; i++) {
                        allBoxes[i].style.visibility = 'hidden';
                        var effect = Animatechach(allBoxes[i]);
                        allBoxes[i].className = allBoxes[i].className.replace(effect, "");
                    }
                }
                pageinit = false;
            } else {
                for (var j = 0; j < Swiper.slides.length; j++) {
                    // if(currentIndex===j)continue;
                    var allBoxes = mySwiper.slides[j].querySelectorAll('.ani');
                    for (var i = 0; i < allBoxes.length; i++) {
                        allBoxes[i].style.visibility = 'hidden';
                        var effect = Animatechach(allBoxes[i]);
                        allBoxes[i].className = allBoxes[i].className.replace(effect, "");
                    }
                }
            }
        };
        function Animatechach(ele) {//缓存动画效果
            console.log("缓存动画");
            var effect = ele.getAttribute('animated-effect');
            return effect


        }

        /*初始化代码*/
        var mySwiper = new Swiper('.swiper-container', {
            // autoplay: 500,//可选选项，自动滑动
            direction: 'vertical',
            speed: 300,


            /*
             * 生命周期函数
             * onInit 整个h5页面的初始化
             * */
            onInit: function (mySwiper) {
                // dynamicAdd(mySwiper,0);
                clearswiperAnimate(mySwiper);
                swiperAnimate(mySwiper);

            },
            onSlideChangeEnd: function (mySwiper) {
                clearswiperAnimate(mySwiper);
                swiperAnimate(mySwiper);


            }
            ,
            onTouchEnd: function (mySwiper, e) {
                clearswiperAnimate(mySwiper);
                swiperAnimate(mySwiper);

            }
        })
    })
})()

