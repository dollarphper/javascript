/*
 @desc：时间友好显示函数
 @param stamp 时间缀，10位长度
 */
function timefriend(stamp){
	this.stamp = stamp
	/*
	 @desc：主方法，执行转换
	 */
	this.get = function(){
		var stamp = this.stamp
		if(!stamp){
			return '—';
		}
		var date = new Date(stamp*1000)
		var time = Math.round(new Date().getTime()/1000)
		diff = time - stamp
		if(diff<0){
			return '—';
		}else if(diff<60){
			return diff+'秒前'
		}else if(diff<3600){
			return Math.floor(diff/60)+'分钟前'
		}else if(diff<86400){
			return Math.floor(diff/3600)+'小时前'
		}else if(diff<259200){
			return Math.floor(diff/86400)+'天前'
		}else{
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
	this.parsetime = function(input){
	    var ret
	    if(input >= 0 && input < 10){
	        ret = '0'+input
	    }else{
	        ret = input
	    }
	    return ret
	}
}
// var timefriend = new timefriend('1428593779')
// console.log(timefriend.get())