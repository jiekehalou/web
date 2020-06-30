<template>
    <div class="home">
        <Header>
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
                <a> <i class="icon iconfont icon-tuichu exit"
                       @click="exit"></i></a>
            </template>
        </Header>
        <div class="banner">
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
            msg: "主页"
        }
    },
    computed: {
    },
    methods: {
        exit () { this.$router.push('/login') }
    },
    beforeDestroy () {

    }
}
</script>

<style   lang="scss"   scoped>
@import "~@/assets/css/theme.scss";
.home {
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
        height: 520px;
        background: url(../assets/img/bg2.jpg) top center no-repeat;
        background-size: cover;
        &::after {
            display: block;
            position: absolute;
            content: "";
            height: 520px;
            background: #12295e;
            opacity: 0.5;
            z-index: 1;
            width: 100%;
            top: 0;
            bottom: 0;
        }
    }
}
</style>

