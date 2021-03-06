'use strict';
import Vue from 'vue'
import Tpl from './template.html'
import './style.less'
// import WalletService from './service'

import {config} from '../../../../env'

import Group from 'vux/dist/components/group'
import Cell from 'vux/dist/components/cell'
import Blur from 'vux/dist/components/blur'
import Popup from 'vux/dist/components/popup'
import Qrcode from 'vux/dist/components/qrcode'
import Alert from 'vux/dist/components/alert'

let Index = Vue.extend({
    
    template : Tpl,
    components : {
        Group,
        Cell,
        Blur,
        Popup,
        Qrcode,
        Alert,
    },
    vuex: {
        getters: {
            route: (state) => state.route,
            userInfo: (state) => state.app.user || {},
        },
    },
    ready : function(){
        this.callJsApi('biz.navigation.setTitle',{title:'个人'});
    },
    data : ()=>{
        return {
            img_url: ''
        }
    },
    events : {
       
    },
    methods: {
        uploadImg(){
            this.callJsApi('biz.util.uploadImage',{
                multiple: false, //是否多选，默认false
            }).then((data)=>{
                this.img_url = data[0];
            })
        }
    },
    computed : {
        filterAvatar(){
            return this.userInfo && this.userInfo.avatar && this.userInfo.avatar !=''
                ? this.userInfo.avatar
                : 'http://img5.imgtn.bdimg.com/it/u=1457102793,1407747410&fm=23&gp=0.jpg'
        }
    },
    route : {
        data : function(transition){
            transition.next()
        }
    }
})

export default Index