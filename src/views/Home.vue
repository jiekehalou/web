<template>
    <div class="home">
        <Header :fixed="fixed"
                ref="header">
            <template slot="header-menu">
                <div class="nav-bar-top">
                    <ul>
                        <li>首页</li>
                        <li>文章</li>
                        <li>笔记</li>
                        <li>充电</li>
                    </ul>
                </div>
                <div class="head-search inline">
                    <input type="text"
                           placeholder="请输入关键字">
                    <i class="icon iconfont icon-sousuo"></i>
                </div>
            </template>
            <template slot="header-right">
                <div class="user-tool">
                    <Avatar src="http://124.70.132.216:3001/user.png"
                            size="small" />
                    <i class="icon iconfont icon-tuichu exit"
                       @click="exit"></i>
                </div>
            </template>
        </Header>
        <Carousel autoplay
                  loop
                  arrow="never"
                  :autoplay-speed="3000"
                  :height="carouselHeight">
            <Carousel-item v-for="banner in banners"
                           :key="banner.id">
                <p class="demo-carousel"
                   :style="{backgroundImage:`url(${banner.bg})`}"></p>
            </Carousel-item>
        </Carousel>
        <div class="banner bg-2">
            <div class="mos-con">
                <div class="mo"
                     v-for=" mo in modules"
                     :key="mo.id">
                    <span class="mo-title">{{mo.name}}</span>
                    <img  class="mo-img" :src="mo.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/header/index";
export default {
    //   name: '',
    components: {
        Header
    },
    props: {
    },
    data () {
        return {
            msg: "主页",
            fixed: true,
            modules: [
                { id: 1, name: "新闻", link: "",img: require('../assets/img/bg1.jpg') },
                { id: 2, name: "资讯", link: "",img: require('../assets/img/demo1.jpeg')},
                { id: 3, name: "本地头条", link: "",img: require('../assets/img/demo2.jpeg') },
                { id: 4, name: "笔记", link: "" ,img: require('../assets/img/demo3.jpeg')},
                { id: 5, name: "文章", link: "",img: require('../assets/img/bg1.jpg') },
                { id: 6, name: "充电", link: "" ,img: require('../assets/img/bg1.jpg')},
                { id: 7, name: "图片", link: "" ,img: require('../assets/img/bg1.jpg')},
                { id: 8, name: "视频", link: "" ,img: require('../assets/img/bg1.jpg')},
            ],
            banners: [
                { id: 1, bg: require('../assets/img/bg1.jpg') },
                { id: 2, bg: require('../assets/img/bg2.jpg') },
                { id: 3, bg: require('../assets/img/bg1.jpg') },
            ],
            carouselHeight: 600
        }
    },
    computed: {

    },
    mounted () {
        this.compuCarouselHeight();
        // var obj = new Proxy({}, {
        //     get: function (target, propKey, receiver) {
        //         console.log(`getting ${propKey}!`);
        //         return Reflect.get(target, propKey, receiver);
        //     },
        //     set: function (target, propKey, value, receiver) {
        //         console.log(`setting ${propKey}!`);
        //         return Reflect.set(target, propKey, value, receiver);
        //     }
        // });

    },
    methods: {
        compuCarouselHeight () {
            const top = this.$refs['header'].$el
            const topH = top.offsetHeight
            this.carouselHeight = document.body.clientHeight - topH;
        },
        exit () { this.$router.push('/login') }
    },
    beforeDestroy () {

    }
}
</script>

<style   lang="scss"   scoped>
@import "~@/assets/css/theme.scss";
$mo-bg: #fff;
$banner-bg1: #12295e;
$banner-bg2: #e8f5fe;
$top-height: 60px;
.home {
    height: 100%;
    padding-top: $top-height;
    .nav-bar-top {
        float: left;
        vertical-align: middle;
        margin-right: 20px;
        ul {
            font-size: 0;
            height: 60px;
            line-height: 60px;
            li {
                display: inline-block;
                font-size: 16px;
                padding: 0 15px;
                cursor: pointer;
                -webkit-transition: color 200ms ease-in-out;
                -moz-transition: color 200ms ease-in-out;
                -ms-transition: color 200ms ease-in-out;
                -o-transition: color 200ms ease-in-out;
                transition: color 200ms ease-in-out;
                &:hover,
                &:focus {
                    color: #409eff;
                }
            }
        }
    }
    .user-tool {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span,
        > i {
            margin: 0 4px;
        }
    }
    .head-search {
        height: 32px;
        line-height: 32px;
        position: relative;
        i.icon-sousuo {
            position: absolute;
            font-size: 20px;
            right: 5px;
            top: 0;
            cursor: pointer;
        }
        input {
            width: 320px;
            height: 32px;
            padding-right: 30px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0 10px;
            border: 1px solid #d9d9d9;
            background-color: #e5e5e5;
            outline: none;
            border-radius: 2px;
            &:focus {
                background-color: #fff;
                border-color: 1px solid #f2f2f2;
            }
        }
    }
    .exit {
        font-size: 22px;
        color: #999;
        cursor: pointer;
        &:hover {
            color: $base;
        }
    }
    .banner {
        position: relative;
        z-index: 0;
        width: 100%;
        height: calc(100% - #{$top-height});
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
        perspective: 2000px;
        &.bg-2 {
            background-image: linear-gradient(
                to bottom right,
                #3d85fb,
                #e8f5fe
            );
        }
    }
    /deep/.ivu-carousel-list {
        width: 100%;
    }
    .demo-carousel {
        height: 100%;
        text-align: center;
        color: #fff;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-shadow: inset 0 -20px 30px -10px rgba(0, 0, 0, 0.15);
        &::after {
            display: block;
            position: absolute;
            content: "";
            background: $banner-bg1;
            opacity: 0.1;
            width: 100%;
            top: 0;
            bottom: 0;
        }
    }
    .mos-con {
        display: flex;
        width: (200 + 20) * 4px;
        margin: 0 auto;
        justify-content: space-between;
        flex-wrap: wrap;
        // overflow: hidden;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transform-origin: 50% 50% 100px;
        animation: fall 6s linear 0s infinite alternate both;
        will-change: transform;
        .mo {
            width: 200px;
            height: 200px;
            margin: 20px 0 0;
            background: $mo-bg;
            border-radius: 2px;
            cursor: pointer;
            font-size: 0;
            transition-duration: 0.3s;
            transition-property: box-shadow, transform;
            box-shadow: 2px 3px 2px -1px rgba(0, 0, 0, 0.15);
            &:hover {
                box-shadow: 0 20px 10px -10px rgba(61, 59, 59, 0.5);
                transform: scale(1.05) translateY(-10px);
                z-index: 2;
            }
            .mo-title {
                display: block;
                line-height: 36px;
                padding: 0 15px;
                color: $font-main;
                font-size: 18px;
                text-align: center;
            }
            .mo-img{
                display: inline-block;
                width: 100%;
                height: 200 - 36px;
                vertical-align: middle;
                border: none;
                outline: none;
            }
        }
    }
    @keyframes fall {
        0% {
            transform: rotateX(35deg) rotateY(-25deg) rotateZ(15deg)
                translateX(-150px) translateZ(30px);
            box-shadow: 50px 50px 30px rgba(0, 0, 0, 0.15);
        }
        100% {
            transform: rotateX(35deg) rotateY(-25deg) rotateZ(15deg)
                translateX(-150px) translateZ(0px);
        }
    }
}
</style>

