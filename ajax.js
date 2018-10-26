/*
 @desc：ajax请求类
 @param obj 传入数据，格式为
 {
 	data:'name=lee&sex=male',			#  提交到后台的数据，""|{}|FormData
 	url:'http://localhost/test.php',	#  请求的url地址
 	type:'post',						#  请求类型，post|get|json|file
 	async:true							#  同步/异步，true:异步 false:同步，默认true
 }
 */
function ajax(obj){
	this.obj = obj
	this.xhr
	this.data
	/*
	 @desc：内部方法，查询字符串转json对象
	 @param str 查询字符串，格式为："a=b&c=d"
	 @return json json对象，如：
	 {
		a:"b",
		c:"d"
	 }
	 */
	this.strtojson = function(str){
	    var arr = str.split('&')
	    var json = {}
	    for(var i in arr){
	        var k = arr[i].split('=')[0]
	        var v = arr[i].split('=')[1]
	        json[k] = v
	    }
	    return json
	}
	/*
	 @desc：内部方法，json对象转查询字符串
	 @param json json对象，如：
	 {
		a:"b",
		c:"d"
	 }
	 @return str 查询字符串，格式为："a=b&c=d"
	 */
	this.jsontostr = function(json){
	    var arr = new Array()
	    for(var k in json){
	        var v = json[k]
	        var val = k+'='+v
	        arr.push(val)
	    }
	    var str = arr.join('&')
	    return str
	}
	/*
	 @desc：内部方法，解析url地址
	 @param url url地址，如：http://www.baidu.com/a/b/c.jpg?a=b&c=d#id
	 @return info 解析后的地址，如：
	 {
        scheme:'http',			#  协议
        host:'www.baidu.com',	#  域名
        port:'',				#  端口
        user:'',				#  验证用户名
        pass:'',				#  验证密码
        path:a/b,				#  路径
        query:'a=b&c=d',		#  查询字符串
        fragment:'id'			#  锚点
	 }
	 */
	this.parseurl = function(url){
	    var reg = /(?:([A-Za-z]+):)?(\/{0,3})?(?:(.*):(.*)@)?([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?/
	    var res = reg.exec(url)
	    var scheme = (res[1])?res[1]:'http'
	    var user = (res[3])?res[3]:''
	    var pass = (res[4])?res[4]:''
	    var host = (res[5])?res[5]:''
	    var port = (res[6])?res[6]:''
	    var path = (res[7])?res[7]:''
	    var query = (res[8])?res[8]:''
	    var fragment = (res[9])?res[9]:''
	    var info = {
	        scheme:scheme,
	        host:host,
	        port:port,
	        user:user,
	        pass:pass,
	        path:path,
	        query:query,
	        fragment:fragment
	    }
	    return info
	}
	/*
	 @desc：初始化方法，获得xhr实例
	 */
	this.init = function(){
	    if(window.XMLHttpRequest){
	        this.xhr=new XMLHttpRequest()
	    }else{
	        this.xhr=new ActiveXObject("Microsoft.XMLHTTP")
	    }
	    return this
	}
	/*
	 @desc：ajax发送前的回调
	 */
	this.before = function(func){
	    this.xhr.addEventListener('readystatechange',function(){
	        if(this.readyState < 4){
	            func()
	        }
	    })
	    return this
	}
	/*
	 @desc：ajax发送成功后的回调
	 */
	this.success = function(func){
	    this.xhr.addEventListener('readystatechange',function(){
	        if (this.readyState == 4 && this.status == 200){
	            var res
	            if(this.getResponseHeader('content-type')==='application/json'){
	                res = JSON.parse(this.responseText)
	            }else{
	                res = this.responseText
	            }
	            func(res)
	        }
	    })
	    return this
	}
	/*
	 @desc：ajax发送失败后的回调
	 */
	this.error = function(func){
	    this.xhr.addEventListener('readystatechange',function(){
	        if(this.readyState == 4 && this.status != 200){
	            this.xhr.abort()
	            func()
	        }
	    })
	    return this
	}
	/*
	 @desc：获取ajax发送进度
	 */
	this.progress = function(func){
	    this.xhr.upload.addEventListener('progress',function(e){
	        if(e.lengthComputable){
	            var loading = Math.round(e.loaded / e.total * 100);
	            func(loading)
	        }
	    })
	    return this
	}
	/*
	 @desc：拼凑ajax参数
	 */
	this.request = function(){
		var obj = this.obj
	    var data = obj.data
	    var url = obj.url
	    var type = obj.type
	    var async = (obj.async)?obj.async:true
	    var auth = obj.auth
	    this.init()
	    if(type == 'post'){
	        this.xhr.open(type,url,async)
	        this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	        if(data instanceof Object){
	            if(data instanceof FormData){
	                var obj = {}
	                data.forEach(function(val,key){
	                    if((key != 'undefined') && (val != 'undefined')){
	                        obj[key] = val
	                    }
	                })
	                data = this.jsontostr(obj)
	            }else{
	                data = this.jsontostr(data)
	            }
	        }
	    }else if(type == 'get'){
	        var info = this.parseurl(url)
	        var scheme = info.scheme
	        var host = info.host
	        var port = info.port
	        var path = info.path
	        var query = info.query
	        if(data instanceof Object){
	            if(data instanceof FormData){
	                var obj = {}
	                data.forEach(function(val,key){
	                    if((key != 'undefined') && (val != 'undefined')){
	                        obj[key] = val
	                    }
	                })
	                data = this.jsontostr(obj)
	            }else{
	                data = this.jsontostr(data)
	            }
	        }
	        var psep = (path)?'/':''
	        var sep = (query || data)?'?':''
	        url = scheme+'://'+host+':'+port+psep+path+sep+query+data
	        data = ''
	        this.xhr.open(type,url,async)
	    }else if(type == 'json'){
	        this.xhr.open('post',url,async)
	        this.xhr.setRequestHeader("Content-type", "application/json")
	        if((typeof(data)=='string')||(data instanceof String)){
	            data = this.strtojson(data)
	        }else if(data instanceof Object){
	            if(data instanceof FormData){
	                var obj = {}
	                data.forEach(function(val,key){
	                    if((key != 'undefined') && (val != 'undefined')){
	                        obj[key] = val
	                    }
	                })
	                data = obj
	            }
	        }
	        data = JSON.stringify(data)
	    }else if(type == 'file'){
	        this.xhr.open('post',url,async)
	        if((typeof(data)=='string')||(data instanceof String)){
	            return false
	        }else if(data instanceof Object){
	            if(!data instanceof FormData){
	                return false
	            }
	        }
	    }
	    if(auth){
	        this.xhr.withCredentials = true
	        this.xhr.setRequestHeader("Authorization", "Basic " + btoa(auth))
	    }
	    this.data = data
	    return this
	}
	/*
	 @desc：发送
	 */
	this.send = function(){
	    this.xhr.send(this.data)
	}
}
// var data = {
// 	data:'name=lee&sex=male',
// 	url:'http://localhost/test.php',
// 	type:'post',
// 	async:false
// }
// var ajax = new ajax(data)
// ajax.request().progress(
// 	function(loading){
// 	console.log(loading)
// }).success(function(data){
// 	console.log(data)
// }).error(function(){
// 	console.log(2)
// }).send()
module.exports = ajax