<!--
 * @Description: 
 * @Autor: wanghaojie
 * @Date: 2021-01-07 10:00:58
-->
<template>
    <div ref="map"
         class="map">
        <div id="result">
            pssss
        </div>
    </div>
</template>
<script>
import {Baidu_reverseCeocoding } from "@/api/baidu.js";
export default {
    //   name: '',
    components: {
    },
    props: {
        propE: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { message: 'hello' }
            }
        },
    },
    data () {
        return {
            msg: "template",
            map: null
        }
    },
    computed: {
    },
    mounted () {
        this.initMap();
        let map = this.map;
        if (!map) return;

        var myIcon = new BMapGL.Icon(require('../assets/img/uncle.png'), new BMapGL.Size(22, 22));
        const geolocation = new BMapGL.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMapGL.Marker(r.point, { enableMassClear: false, icon: myIcon });
                // var mk = new BMapGL.Marker(r.point, { enableMassClear: false, icon: myIcon, offset: new BMapGL.Size(0, -20) });
                // var mk2 = new BMapGL.Marker(r.point, { enableMassClear: false });
                // map.addOverlay(mk2);
                map.addOverlay(mk);
                map.panTo(r.point);
                mk.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                // console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
                // console.log(r);
                geoc.getLocation(r.point, function (rs) {
                    var addComp = rs.addressComponents;
                    console.log('addComp', addComp)
                })
                //从接口获取具体位置不是很准确
                Baidu_reverseCeocoding(r.point.lat + ',' + r.point.lng).then(res => {
                    console.log('res', res.result.formatted_address);
                })
                // var driving = new BMapGL.DrivingRoute(map, {
                //     renderOptions: {
                //         map: map,
                //         autoViewport: true
                //     }
                // });
                // var start = new BMapGL.Point(r.point.lng, r.point.lat);
                // var end = new BMapGL.Point(113.380883, 33.623339);//我家
                // driving.search(start, end);
            }
            else {
                console.log('failed' + this.getStatus());
            }
        }, { enableHighAccuracy: true });

        var geoc = new BMapGL.Geocoder();//地址解析
        var opts = {
            title: '行政区划归属',
            width: 220,
            height: 92
        };
        map.addEventListener('click', function (e) {
            //清除地图上所有的覆盖物
            map.clearOverlays();
            var pt = e.latlng;
            // var markerNow = new BMapGL.Marker(pt, { title: '当前点击位置' });
            // map.addOverlay(markerNow);
            // console.log('点击位置经纬度：' + e.latlng.lng + ',' + e.latlng.lat);
            //从接口获取具体位置
            geoc.getLocation(pt, function (rs) {
                // var addComp = rs.addressComponents;
                // console.log('addComp', addComp);
                var infoStr = '<div>' + rs.addressComponents.province
                    + rs.addressComponents.city
                    + rs.addressComponents.district
                    + rs.addressComponents.street + '</div>'
                var infoWindow = new BMapGL.InfoWindow(infoStr, opts);
                map.openInfoWindow(infoWindow, new BMapGL.Point(pt.lng, pt.lat));
            })
        });
    },
    methods: {
        initMap () {
            let map = new BMapGL.Map(this.$refs['map']);
            // 创建地图实例
            // let scaleCtrl = new BMapGL.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT, offset: new BMapGL.Size(10, 40) });
            // let MapType = new BMapGL.MapTypeControl({
            //     mapTypes: [
            //         BMAP_NORMAL_MAP,
            //         BMAP_HYBRID_MAP,
            //         BMAP_EARTH_MAP,
            //     ]
            // });
            var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
            // map.addControl(scaleCtrl);
            // map.addControl(MapType);
            map.addControl(navi3DCtrl);
            var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
            map.addControl(zoomCtrl);
            // // 创建定位控件
            // var locationControl = new BMapGL.LocationControl({
            //     // 控件的停靠位置（可选，默认左上角）
            //     anchor: BMAP_ANCHOR_TOP_RIGHT,
            //     // 控件基于停靠位置的偏移量（可选）
            //     offset: new BMapGL.Size(15, 15)
            // });
            // // 将控件添加到地图上
            // map.addControl(locationControl);
            // 创建点坐标
            map.centerAndZoom('郑州市', 12); // 初始化地图,设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true);
            // map.setMapType(BMAP_EARTH_MAP); 
            map.setTrafficOn();    // 添加交通流量图层
            this.map = map;
        }

    },
    beforeDestroy () {

    }
}
</script>

<style   lang="scss"   scoped>
.map {
    // #result {
    //     position: fixed;
    //     bottom: 10px;
    //     left: 10px;
    //     padding: 0px 7px;
    //     min-width: 350px;
    //     height: 70px;
    //     line-height: 35px;
    //     background: #fff;
    //     box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
    //     border-radius: 7px;
    //     z-index: 99999999;
        // .main-frame &{
        //     border:1px solid red
        // }
    // }
}
</style>

