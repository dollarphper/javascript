/*
 @desc：时间缀转时间字符串
 @param time 时间缀，长度为10
 @return 时间字符串 格式为：2018-06-10 22:00:00
 */
function timetostr(time){
	this.time = time
	/*
	 @desc：内部方法，若数字小于10补0
	 @param input 传入数值
	 @return ret 格式化后的数值
	 */
	this.parsetime = function(input){
	    var ret
	    if(input >= 0 && input < 10){
	        ret = '0'+input
	    }else{
	        ret = input
	    }
	    return ret
	}
	/*
	 @desc：主方法，获取转换后的时间
	 @return ret 时间字符串，格式为：2018-06-10 22:00:00
	 */
	this.get = function(){
		var time = (this.time)?(this.time):(Math.round(new Date().getTime()/1000))
		var date = new Date(time*1000)
		var year = this.parsetime(date.getFullYear())
		var month = this.parsetime(date.getMonth())
		var day = this.parsetime(date.getDate())
		var hour = this.parsetime(date.getHours())
		var minute = this.parsetime(date.getMinutes())
		var second = this.parsetime(date.getSeconds())
		var ret = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
		return ret
	}
}
// var timetostr = new timetostr(1528593779)
// var ret = timetostr.get()
// console.log(ret)