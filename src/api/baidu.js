import ajax from '@/api/ajax';
import { BAIDU, TK } from '@/api/config.js'
// console.log('BAIDU, TK ', BAIDU, TK );

/**
 * 
 * @param {*String} ip ；ip地址查经纬度
 */
export function Baidu_iplocation (ip ='') {
    return ajax({
        url: BAIDU + '/location/ip',
        method: "get",
        params: {
            ak: TK,
            ip,
            coor:'bd09ll'
        }
    })
}
/**
 * 
 * @param {*String} location  31.225696563611,121.49884033194；
 */
export function Baidu_reverseCeocoding (location = '') {
    return ajax({
        url: BAIDU + '/reverse_geocoding/v3',
        method: "get",
        params: {
            ak: TK,
            coor: 'bd09ll',
            output: 'json',
            coordtype: 'wgs84ll',
            location,
        }
    })
}
