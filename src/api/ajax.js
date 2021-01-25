
import axios from 'axios'
import { TIMEOUT } from '@/api/config.js'
import { throwErr } from "@/assets/js/util.js";
import { Message } from 'iview';
// import local from '@/store/local.js'
// import store from '@/store'
// console.log('BASEURL',BASEURL);
// console.log('TIMEOUT',TIMEOUT);
let CONFIG = {
    // baseURL: BASEURL,
    timeout: TIMEOUT
}
var ajax = axios.create(CONFIG);
// 添加请求拦截器
ajax.interceptors.request.use(function (config) {
    // 设置token;
    if (config.method == 'post') {
        config.headers = {
            ...config.headers,
            // 'Authorization': store.getters['publicInfo/token']
        };

    } else if (config.method == 'get') {
        config.params = {
            ...config.params
        };
        config.data = true;
        const headerParams = {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            // 'Authorization': store.getters['publicInfo/token']
        }
        config.headers = {
            ...headerParams
        };
    }
    // (!config.noloading) && store.dispatch('publicInfo/fetchLoading', true);
    // console.log('config', config);
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
ajax.interceptors.response.use(function (response) {
    if (response.data) {
        const { isSucceed, statusCode } = response.data;
        // console.log('statusCode', statusCode);
        
        if (isSucceed) {
            // store.dispatch('publicInfo/fetchLoading', false);
            return response.data;
        } else {
            if (statusCode === 401) {
                Message.warning('登录过期,请重新登录');
                // store.dispatch('publicInfo/fetchLoading', false);
                // (process.env.NODE_ENV != 'development') && local.jump();
            }else{
                // store.dispatch('publicInfo/fetchLoading', false);
            }
        }
        return response.data;
    }
}, function (error) {
    // store.dispatch('publicInfo/fetchLoading', false);
    if (error && error.response) {
        let res = {}
        res.isSucceed = false
        res.data = null
        res.statusCode = error.response.status;
        // throwErr 捕捉服务端的http状态码 定义在utils工具类的方法
        res.message = throwErr(error.response.status, error.response)
        return Promise.resolve(res);
    } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.resolve({ isSucceed: false, status: '-1', message: '服务器无响应' })
    }

});
export default ajax;
