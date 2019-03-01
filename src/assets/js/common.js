import axios from 'axios';
import qs from 'qs';
import store from '../../store/index'

const common = {
	install:(Vue)=>{
		/**
   * [SEQAjax http请求]
   * @param {[String]}   method   [请求方式]
   * @param {[String]}   url      [url地址]
   * @param {[Object]}   data     [发送参数]
   * @param {Function}   callback [回调函数]
   * @param {[String]}   str      [判断是不是formdata类型]
   */
  //axios.defaults.withCredentials = true;
  Vue.prototype.HttpAjax =  (method,url,data,callback,str)=>{
  	store.commit('UPDATE_LOADINGSTATE',true);
    //访问时间
    let timeOver = 3*60*1000;
    // 拦截器，添加loading效果
    let requestInterceptor = axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      axios.interceptors.request.eject(requestInterceptor);
      return config
    }, function (error) {
      // Do something with request error
      axios.interceptors.request.eject(requestInterceptor);
      return Promise.reject(error)
    });

    let responseInterceptor = axios.interceptors.response.use(function (config) {
    	if(config){
	      // Do something before request is sent
	      if(config.data.status && config.data.status != '200' && config.data.status != '401'){
	        store.commit('UPDATE_LOADINGSTATE',false);
	        Vue.prototype.$message({
	        	showClose: true,
	        	message:'请求错误：'+config.data.message,
	        	type:'error'
	        });
	      }
	    }
    	axios.interceptors.response.eject(responseInterceptor);
      	return config
	  },function (error) {
      	store.commit('UPDATE_LOADINGSTATE',false);
	    if (error.message.indexOf('timeout') !== -1) {
	      	Vue.prototype.$message({
	        	showClose: true,
	        	message:'请求超时，请重新请求！',
	        	type:'error'
	        });
	    }else{
	    	Vue.prototype.$message({
	        	showClose: true,
	        	message:'请求发生错误！',
	        	type:'error'
	        });
	    }
	    axios.interceptors.response.eject(responseInterceptor);
      	return Promise.reject(error);
  	});
		axios({
	        method: method,//`headers`选项是需要被发送的自定义请求头信息
	        headers: {
	        	'X-Requested-With':'XMLHttpRequest',
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
	        },
	        url:url,
	        timeout:timeOver,
	        data: qs.stringify(data)
      	}).then(callback);
	}
	/**
	 * 设置localStorage
	 */
	Vue.prototype.setStore = (name, content) => {
			if (!name) return;
			if (typeof content !== 'string') {
				content = JSON.stringify(content);
			}
			window.sessionStorage.setItem(name, content);
	};
	/**
	 * 获取localStorage
	 */
	Vue.prototype.getStore = name => {
		if (!name) return;
		return JSON.parse(window.sessionStorage.getItem(name));
	};
	/**
	 * 删除localStorage
	 */
	Vue.prototype.removeStore = name => {
		if (!name) return;
		window.sessionStorage.removeItem(name);
	};
	/* 保存cookie信息  */
	Vue.prototype.setCookie = (keys,val,days) =>{
		let day = days || 30;
		var d = new Date();
		if(days == 'today'){
			let today = new Date(d.getFullYear(),d.getMonth(),d.getDate()+1,0,0,0);
      		var expires = "expires="+today;
		}else{
			d.setTime(d.getTime()+(day*24*60*60*1000));
			var expires = "expires="+d.toGMTString();
		}
		document.cookie = keys+'='+val+';'+expires;
	}
	/* 获取cookie信息   */
	Vue.prototype.getCookie = cname =>{
		var name = cname + "=";
	  var ca = document.cookie.split(';');
	  for(var i=0; i<ca.length; i++){
	    var c = ca[i].trim();
	    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	  }
	  return "";
	}
  	/**
   	* 正则表达式
  	*/
  	Vue.prototype.expReg = {
	    //有区段的手机号
	    aa:/^(13[0-9]|14[1456789]|15[012356789]|16[6]|17[01345678]|18[0-9]|19[89])[0-9]{8}$/,
	    //6-16位英文+数字密码
	    bb:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
	    //4位字符随机验证码（字母或数字）
	    cc:/^[0-9a-zA-Z]{4}$/,
	    //数字
	    dd:/^[0-9]*$/,
	    //1-8位数字
	    ee:/^(?!0)\d{1,8}$/,
	    //身份证
	    idCard:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	    pw:/^[0-9A-Za-z]{8,16}$/,
	}
  }
};

export default common;