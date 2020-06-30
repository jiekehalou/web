<template>
    <div class="login-con">
        <Header>
            <template slot="header-right">
                <!-- <a class="register"
                   href="../index.html"
                   target="">首頁</a>
                <b class="division">|</b>
                <a class="login">登陆</a> -->
                <span>欢迎您！</span> <b class="division">|</b> <span>{{dateTime}}</span>
            </template>
        </Header>
        <div class="content">
            <div class="login-con noselction">
                <div class="panel-tab">
                    <span class="tab"
                          :iscurrent="loginType===1"
                          data-type="form-psw"
                          @click.stop="loginType=1">密码登录</span>
                    <span class="tab"
                          :iscurrent="loginType===0"
                          data-type="form-message"
                          @click.stop="loginType=0">短信登陆</span>
                </div>
                <div class="panel ">
                    <form action=""
                          id="form-psw"
                          v-if="loginType===1">
                        <div class="typein-con"
                             :isCurrent="inputType==='user'">
                            <i class="input-icon bg-user"></i>
                            <input type="text"
                                   class="typein"
                                   v-model="userForm.userName"
                                   autocomplete="off"
                                   @focus="inputFocus('user')"
                                   @blur="inputFocus('')">
                        </div>
                        <div class="typein-con"
                             :isCurrent="inputType==='password'">
                            <i class="input-icon bg-password"></i>
                            <input :type="showPass?'text':'password'"
                                   v-model="userForm.passWord"
                                   class="typein"
                                   autocomplete="off"
                                   id="password"
                                   @focus="inputFocus('password')"
                                   @blur="inputFocus('')">
                            <i class="input-noshowpsw"
                               :class="{'input-showpsw':showPass}"
                               @click.stop="showPass=!showPass"></i>
                        </div>
                        <p class="re clearfix">
                            <label checked>
                                <input type="checkbox">
                            </label>
                            <span>
                                两周内自动登录
                            </span>

                            <span class="hasaction pull-right">
                                忘记密码？
                            </span>

                        </p>
                        <p class="submit-con">
                            <button class="btn btn-primary submit" @click.prevent.stop="login">立即登录</button>
                        </p>
                    </form>
                    <form action=""
                          id="form-message"
                          v-else>
                        <div class="typein-con"
                             :isCurrent="inputType==='phone'">
                            <i class="input-icon bg-phone"></i>
                            <input type="text"
                                   class="typein"
                                   v-model="phoneForm.phoneNum"
                                   id="message-phone"
                                   autocomplete="off"
                                   @focus="inputFocus('phone')"
                                   @blur="inputFocus('')">
                        </div>
                        <div class="message-code-con clearfix">
                            <div class="typein-con pull-left"
                                 :isCurrent="inputType==='code'">
                                <i class="input-icon bg-password"></i>
                                <input type="password"
                                       class="typein"
                                       v-model="phoneForm.phoneCode"
                                       autocomplete="off"
                                       id="message-code"
                                       @focus="inputFocus('code')"
                                       @blur="inputFocus('')">
                            </div>
                            <div class="message-code  code-ok pull-right">
                                获取验证码
                            </div>
                        </div>
                        <p class="submit-con">
                            <button class="btn btn-primary submit" @click.prevent.stop="login">立即登录</button>
                        </p>
                    </form>
                    <!-- <p class="other-way">
                    <span>其他账户登陆</span>
                    <a href="" class="login-webchat">

                    </a>
                    <a href="" class="login-qq">

                    </a>
                    <span class="hasaction pull-right">立即注册</span>
                </p> -->
                </div>

            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import { tool } from "@/assets/js/util.js";
export default {
    //   name: '',
    components: {
        Header,
        Footer
    },
    props: {
    },
    data () {
        return {
            msg: "template",
            loginType: 1,
            inputType: '',
            showPass: false,
            userForm: {
                userName: "admin",
                passWord: "goodluck",
            },
            phoneForm: {
                phoneNum: 18600592133,
                phoneCode: '',
            },
            dateTime: tool.formatDate(new Date(Date.now()), 'yyyy-MM-dd hh:mm'),
            timer: null
        }
    },
    computed: {

    },
    created(){this.refresTime()},
    methods: {
        inputFocus (type) {
            this.inputType = type
        },
        refresTime () {
            this.timer && clearInterval(this.timer)
            this.timer = setInterval(() => {
                this.dateTime = tool.formatDate(new Date(Date.now()), 'yyyy-MM-dd hh:mm')
            }, 1000);
        },
        login(){
          this.$router.push('/home')
        }
    },
    beforeDestroy () {
        this.timer && clearInterval(this.timer)

    }
}
</script>

<style   lang="scss"   scoped>
@import "~@/assets/css/login.css";
.login-con {
    display: flex;
    flex: 1;
    flex-direction: column;
}
</style>

