// const BASEURL = 'http://192.168.201.103:28083/v1/api/';
// const BASEURL = '/api/';
const BASEURL = process.env.VUE_APP_BASE_API; //基础模块；
const BAIDU = process.env.VUE_APP_BAIDU//基础模块；
const TK = process.env.VUE_APP_TK//百度lutk；
const TIMEOUT = 1000 * 30; 
export { BASEURL, TIMEOUT, BAIDU,TK}


