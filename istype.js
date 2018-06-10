/*
 @desc：判断数据类型
 @param data 需要判断的数据
 */
function istype(data){
	this.data = data
	/*
	 @desc：判断是否是整数
	 */
	this.isint = function(){
		var data = this.data
		if((typeof(data)=='number')||(data instanceof Number)){
		    if(/^\d*$/.test(data)){
		        return true
		    }else{
		        return false
		    }
		}else{
		    return false
		}
	}
	/*
	 @desc：判断是否是浮点数
	 */
	this.isfloat = function(){
		var data = this.data
		if((typeof(data)=='number')||(data instanceof Number)){
		    if(/^\d*\.\d*$/.test(data)){
		        return true
		    }else{
		        return false
		    }
		}else{
		    return false
		}
	}
	/*
	 @desc：判断是否是字符串
	 */
	this.isstring = function(){
		var data = this.data
		if((typeof(data)=='string')||(data instanceof String)){
		    return true
		}else{
		    return false
		}
	}
	/*
	 @desc：判断是否是布尔类型
	 */
	this.isbool = function(){
		var data = this.data
		if((typeof(data)=='boolean')||(data instanceof Boolean)){
		    return true
		}else{
		    return false
		}
	}
	/*
	 @desc：判断是否是数组
	 */
	this.isarray = function(){
		var data = this.data
		if(data instanceof Array){
		    return true
		}else{
		    return false
		}
	}
	/*
	 @desc：判断是否是对象
	 */
	this.isobject = function(){
		var data = this.data
		if(data instanceof Object && typeof data.length == 'undefined'){
		    return true
		}else{
		    return false
		}
	}
}
// var istype = new istype([1,2])
// var ret = istype.isbool()
// console.log(ret)