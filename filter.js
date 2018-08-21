/**
 * @desc：验证类
 * @author [lee] <[<www.dollarphp.com>]>
 * 1、验证是否是有效的url
 * 2、验证是否是有效的邮箱
 * 3、验证是否是有效的电话号码
 */
function filter(){
	this.isvalidurl = function(data){
		if(/^((http|ftp|https):\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?$/.test(data)){
			return true;
		}else{
			return false;
		}
	}
	this.isvalidemail = function(data){
		if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(data)){
			return true;
		}else{
			return false;
		}
	}
	this.isvalidtel = function(data){
		if(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(data)){
			return true;
		}else{
			return false;
		}
	}
}
// var filter = new filter()
// var ret = filter.isvalidurl('https://www.baidu.com')
// console.log(ret)
module.exports = filter