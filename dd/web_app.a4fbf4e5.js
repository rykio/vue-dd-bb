webpackJsonp([1],{0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r,a=o(5),c=n(a),u=o(31),l=n(u),f=o(32),s=n(f);o(37);var d=o(34),p=o(38),g=n(p),m=o(36),b=n(m),y=o(30),h=o(39),v=n(h),S=o(41),w=n(S),_=o(42),I=n(_),A=window.dd,z=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null};c.default.get("http://116.236.230.131:55002/auth/getConfig",{params:{corpid:z("corpid")||"ding1b56d2f4ba72e91635c2f4657eb6378f",appid:z("appid")||"2545",suitekey:z("suiteKey")||"suiteiyfdj0dfixywzqwg",paramUrl:document.URL}}).then(function(e){if(200==e.status&&200==e.data.code){var t=e.data.result;A.config({agentId:t.agentId,corpId:t.corpId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,signature:t.signature,type:0,jsApiList:["runtime.info","runtime.permission.requestAuthCode","biz.alipay.pay","biz.contact.choose","biz.contact.complexChoose","biz.contact.complexPicker","biz.contact.createGroup","biz.customContact.choose","biz.customContact.multipleChoose","biz.ding.post","biz.map.locate","biz.map.view","biz.util.openLink","biz.util.open","biz.util.share","biz.util.ut","biz.util.uploadImage","biz.util.previewImage","biz.util.datepicker","biz.util.timepicker","biz.util.datetimepicker","biz.util.chosen","biz.util.encrypt","biz.util.decrypt","biz.chat.pickConversation","biz.telephone.call","biz.navigation.setTitle","biz.navigation.setIcon","biz.navigation.close","biz.navigation.setRight","biz.navigation.setMenu","biz.user.get","ui.progressBar.setColors","device.base.getInterface","device.connection.getNetworkType","device.launcher.checkInstalledApps","device.launcher.launchApp","device.notification.confirm","device.notification.alert","device.notification.prompt","device.notification.showPreloader","device.notification.hidePreloader","device.notification.toast","device.notification.actionSheet","device.notification.modal","device.geolocation.get"]})}}).catch(function(e){console.log(e)}),l.default.config.debug=!0,l.default.use(s.default),l.default.use(v.default),l.default.use(w.default),l.default.config.devtools=!0;var P=new s.default({transitionOnLoad:!1});P.map((r={},i(r,y.config.BASE_PATH,{component:function(e){o.e(2,function(){var t=o(46).default;e(t)})},subRoutes:{"/":{component:function(e){o.e(3,function(){var t=o(52).default;e(t)})}},"/member":{component:function(e){o.e(4,function(){var t=o(62).default;e(t)})}}}}),i(r,y.config.BASE_PATH+"/user/sign_in",{component:function(e){o.e(5,function(){var t=o(70).default;e(t)})}}),r)),P.redirect({"*":y.config.BASE_PATH});var T=window.sessionStorage;T.clear();var x=1*T.getItem("count")||0;T.setItem(y.config.BASE_PATH,0);var E=g.default.commit||g.default.dispatch;P.beforeEach(function(e){var t=e.to,o=e.from,n=e.next,i=T.getItem(t.path),r=T.getItem(o.path);i?i>r||!r?E("UPDATE_DIRECTION","forward"):E("UPDATE_DIRECTION","reverse"):(++x,T.setItem("count",x),t.path!==y.config.BASE_PATH&&T.setItem(t.path,x),E("UPDATE_DIRECTION","forward")),E("UPDATE_LOADING",!0),setTimeout(n,50)}),P.afterEach(function(){E("UPDATE_LOADING",!1)}),(0,d.sync)(g.default,P),P.start(I.default,"#app"),b.default.attach(document.body)},37:function(e,t){},38:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(31),r=n(i),a=o(33),c=n(a);r.default.use(c.default);var u={isLoading:!1,direction:"forward",title:"",right:""};t.default=new c.default.Store({state:u,mutations:{UPDATE_LOADING:function(e,t){e.isLoading=t},UPDATE_DIRECTION:function(e,t){e.direction=t}}})},39:function(e,t,o){(function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=o(30),i={};i.install=function(e,o){e.cookie=function(e,t,o){var n,i,r,a;return arguments.length>1&&"[object Object]"!==String(t)?(o=$.extend({},o),null!==t&&void 0!==t||(o.expires=-1),"number"==typeof o.expires&&(n=24*o.expires*60*60*1e3,i=o.expires=new Date,i.setTime(i.getTime()+n)),t=String(t),document.cookie=[encodeURIComponent(e),"=",o.raw?t:t,o.expires?"; expires="+o.expires.toUTCString():"","; path=/",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")):(o=t||{},a=o.raw?function(e){return e}:decodeURIComponent,(r=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?a(r[1]):null)},e.prototype.base_path=n.config.BASE_PATH,e.prototype.goBack=function(e){if(e.$router._currentRoute.path.match("/pay/"))return void window.history.back();var t;try{t=e.$router._currentTransition.from.path,t?t.match("member")&&!$.localStorage.getItem("webapp_userInfo")?e.$router.replace(n.config.BASE_PATH):window.history.back():e.$router.replace(n.config.BASE_PATH)}catch(t){console.log(t),e.$router.replace(n.config.BASE_PATH)}},e.prototype.goRoute=function(e,t,o){!$.localStorage.getItem("webapp_userInfo")&&(e.match("member")||e.match("chat")||e.match("pay")||e.match("/tucao/publish"))?t.goLoginPage(t,e):o?t.$router.replace(n.config.BASE_PATH+e):t.$router.go(n.config.BASE_PATH+e)},e.prototype.localStorage={getItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return JSON.parse(localStorage.getItem(e))}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},setItem:function(e,o){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return localStorage.setItem(e,JSON.stringify(o))}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},removeItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return localStorage.removeItem(e)}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},getUseSize:function(){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return JSON.stringify(localStorage).length}catch(e){alert("请关闭[无痕浏览]模式后再试!")}}},e.prototype.saveUserInfo=function(t){if(t?($.localStorage.setItem("webapp_userInfo",t),e.prototype.$myInfo=$.localStorage.getItem("webapp_userInfo")):$.localStorage.removeItem("webapp_userInfo"),t&&t.car&&t.car.type_id>0){var o={brand_id:t.car.brand_id,brand_name:t.car.brand_name,series_id:t.car.series_id,series_name:t.car.series_name,type_id:t.car.type_id,type_name:t.car.type_name};$.localStorage.setItem("myCar",o)}else $.localStorage.removeItem("myCar")},Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e}},function(o){"object"===t(e)&&"object"===t(e.exports)?e.exports=o:window.bb?window.bb.bbPlugin=o:window.bb={bbPlugin:o}}(i)}).call(t,o(40)(e))},40:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},41:function(e,t,o){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=o(1),r=t(i),a={};a.install=function(e,t){var o=window.dd;o?(e.prototype.setTitle=function(e){return r.default.Promise(function(t,n){o.biz.navigation.setTitle({title:e.title,onSuccess:function(e){t(e)},onFail:function(e){n(e)}})})},e.prototype.setRightText=function(e){return r.default.Promise(function(t,n){o.biz.navigation.setRight({show:!0,control:!!e.control&&e.control,text:e.text||"发送",onSuccess:function(e){t(e)},onFail:function(e){n(e)}})})}):console.error("dd没有定义")},function(t){"object"===n(e)&&"object"===n(e.exports)?e.exports=t:window.bb?window.bb.ddPlugin=t:window.bb={ddPlugin:t}}(a)}).call(t,o(40)(e))},42:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(31),r=n(i),a=o(43),c=n(a),u=o(44);n(u);o(45);var l=o(38),f=n(l),s=r.default.extend({template:c.default,store:f.default,vuex:{getters:{route:function(e){return e.route},isLoading:function(e){return e.isLoading},direction:function(e){return e.direction}}},ready:function(){},data:function(){return{routerTransition:{forward:"slideRL",back:"slideLR"}}},methods:{},computed:{},route:{data:function(e){e.next()}}});t.default=s},43:function(e,t){e.exports="<div>\n    <router-view :transition=\"'vux-pop-' + (direction === 'forward' ? 'in' : 'out')\">\n\n    </router-view>\n</div>"},44:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={routerTransition:{forward:"slideRL",back:"slideLR"}};t.default=o},45:function(e,t){}});