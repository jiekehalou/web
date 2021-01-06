<!--
 * @Description: 
 * @Autor: wanghaojie
 * @Date: 2020-06-29 13:51:21
--> 
<template>
    <header class="header shadow noselction"
            :class="{'fixed':fixed}">
        <div class="container header-wrap">
            <div class='logo pull-left'>
                <img src="../../assets/img/uncle.png"
                     alt="文艺大叔">
                <span>JackHello</span>
            </div>
            <slot name="header-menu"> </slot>

            <div class="login-control inline pull-right">
                <slot name="header-right"> </slot>
                <!-- <a class="register" href="../index.html" target="">首頁</a>
                <b class="division">|</b>
                <a class="login">登陆</a> -->
            </div>
        </div>
    </header>
</template>
<script>
export default {
    //   name: '',
    components: {
    },
    props: {
        fixed: {
            type: Boolean,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return false
            }
        }

    },
    data () {
        return {
            msg: "template"
        }
    },
    computed: {
    },
    methods: {

    }
}
</script>
<style   lang="scss"   scoped>
.header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.9);
    &.fixed {
        top: 0;
        position: fixed;
    }
}
.header .header-wrap {
    height: 100%;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
}
.header .header-wrap > .inline {
    margin-right: 15px;
}
.header .header-wrap .logo {
    float: left;
    font-size: 0;
    margin-right: 20px;
    cursor: pointer;
}
.header .header-wrap .logo > img,
.header .header-wrap .logo > span {
    display: inline-block;
    vertical-align: middle;
}
.header .header-wrap .logo > img {
    height: 32px;
}
.header .header-wrap .logo > span {
    color: #000;
    margin-left: 6px;
    font-size: 22px;
}
.header .login-control {
    margin-right: 0;
    font-family: Tahoma, Helvetica, sans-serif;
    font-size: 14px;
}
.header .login-control .division {
    color: #999;
    margin: 0 10px;
}
.header .login-control .register,
.header .login-control .login {
    font-size: 14px;
    color: #333;
    cursor: pointer;
    text-decoration: none;
    -webkit-transition: color 300ms;
    -moz-transition: color 300ms;
    -ms-transition: color 300ms;
    -o-transition: color 300ms;
    transition: color 300ms;
}
.header .login-control .register:hover,
.header .login-control .login:hover,
.header .login-control .register:focus,
.header .login-control .login:focus {
    color: #3c99fc;
}
@media screen and (max-width: 768px) {
    .header {
        height: 90px;
        line-height: 90px;
        .header-wrap > .inline {
            margin-right: 0;
        }
    }
}
</style>

