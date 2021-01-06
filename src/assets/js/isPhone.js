/*
 * @Description: 
 * @Autor: wanghaojie
 * @Date: 2021-01-06 15:13:21
 */
    let os = function () {
       let ua = navigator.userAgent,
       isWindowsPhone = /(?:Windows Phone)/.test(ua),
       isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
       isAndroid = /(?:Android)/.test(ua),
       isFireFox = /(?:Firefox)/.test(ua),
    //    isChrome = /(?:Chrome|CriOS)/.test(ua),
       isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid &&       !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
       isPhone = /(?:iPhone)/.test(ua) && !isTablet,
       isPc = !isPhone && !isAndroid && !isSymbian;
       
       return {
              isTablet:isTablet,
              isPhone: isPhone,
              isAndroid: isAndroid,
              isPc: isPc
       };
   }();
if (os.isPc) {
    //   location.replace("http://www.onlymid.com.cn/");
   }
if (os.isAndroid || os.isPhone) {
    console.log('location', location)
    //   location.replace('http://www.onlymid.com.cn/html/2016shujia/wap/');
} else if (os.isTablet) {
    console.log('location', location)
    //   location.replace('http://www.onlymid.com.cn/html/2016shujia/wap/');
   }