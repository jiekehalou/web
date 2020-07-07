import ajax from '@/api/ajax';
import { BASEURL } from '@/api/config.js'
console.log('BASEURL', BASEURL);
/**
 * 
 * @param {*} params ； 
 */
export function Users_login(params) {
  return ajax({
    url: BASEURL +"users/login",
    method: "post",
    data:params
  })
}
