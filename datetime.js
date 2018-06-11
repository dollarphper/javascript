/*
 @desc：时间日期函数集合
 @author [Lee] <[<complet@163.com>]>
 */
function datetime(){
	/*
	 @desc：内部方法，不足10补0
	 @param input 传入数值
	 @return ret 转换后的数值
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
	 @desc：时间缀转时间
	 @param time 时间缀，10位
	 @return ret 时间，格式为：2018-01-01 00:00:00
	 */	this.timetostr = function(time){
		var time = (time)?(time):(Math.round(new Date().getTime()/1000))
		var date = new Date(time*1000)
		var year = this.parsetime(date.getFullYear())
		var month = this.parsetime(date.getMonth()+1)
		var day = this.parsetime(date.getDate())
		var hour = this.parsetime(date.getHours())
		var minute = this.parsetime(date.getMinutes())
		var second = this.parsetime(date.getSeconds())
		var ret = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
		return ret
	}
	/*
	 @desc：时间转时间缀
	 @param str 时间字符串
	 @return time 时间缀
	 */
	this.strtotime = function(str){
		var date = new Date(str)
		var year = this.parsetime(date.getFullYear())
		if(/^\d{4}(-\d{2}(-\d{2})?)?\s\d{2}:\d{2}(:)?(\d{2})?$/.test(str)){
			var month = this.parsetime(date.getMonth()+1)
			var day = this.parsetime(date.getDate())
			var hour = this.parsetime(date.getHours())
			var minute = this.parsetime(date.getMinutes())
			var second = this.parsetime(date.getSeconds())
		}else{
			var month = this.parsetime(date.getUTCMonth()+1)
			var day = this.parsetime(date.getUTCDate())
			var hour = this.parsetime(date.getUTCHours())
			var minute = this.parsetime(date.getUTCMinutes())
			var second = this.parsetime(date.getUTCSeconds())
		}
		str = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
		date = new Date(str)
		var time = date.getTime().toString()
		time = time.slice(0,10)
		return time
	}
	/*
	 @desc：求时间差
	 @param sstr 开始时间，字符串
	 @param estr 结束时间，字符串
	 @return ret 时间差，单位：秒
	 */
	this.timediff = function(sstr,estr){
		var stime = this.strtotime(sstr)
		var etime = this.strtotime(estr)
		var ret = etime - stime
		return ret
	}
	/*
	 @desc：时间相加函数
	 @param dur 差数，如：-1year +2month
	 @param time 时间，1、时间缀；2、时间字符串
	 @return ret 得出的时间，格式为：2018-01-01 00:00:00
	 */
	this.dateadd = function(dur,time = false){
	    var test_year = /(-)?\d+(\s)?year(s)?/.exec(dur)
	    var test_month = /(-)?\d+(\s)?month(s)?/.exec(dur)
	    var test_day = /(-)?\d+(\s)?day(s)?/.exec(dur)
	    var test_hour = /(-)?\d+(\s)?hour(s)?/.exec(dur)
	    var test_minute = /(-)?\d+(\s)?minute(s)?/.exec(dur)
	    var test_second = /(-)?\d+(\s)?second(s)?/.exec(dur)
	    test_year = (!test_year)?0:parseInt(test_year[0])
	    test_month = (!test_month)?0:parseInt(test_month[0])
	    test_day = (!test_day)?0:parseInt(test_day[0])
	    test_hour = (!test_hour)?0:parseInt(test_hour[0])
	    test_minute = (!test_minute)?0:parseInt(test_minute[0])
	    test_second = (!test_second)?0:parseInt(test_second[0])
	    var outtime
	    if(time){
	        if(((typeof(time)=='string') || (time instanceof String)) && (/^\d{4}(-\d{2}(-\d{2})?)?(\s)?(\d{2})?(:)?(\d{2})?(:)?(\d{2})?$/.test(time))){
	            outtime = new Date(time)
	            outtime.setFullYear(parseInt(outtime.getFullYear()) + test_year)
	            outtime.setMonth(parseInt(outtime.getMonth()) + test_month)
	            outtime.setDate(parseInt(outtime.getDate()) + test_day)
	            outtime.setHours(parseInt(outtime.getHours()) + test_hour)
	            outtime.setMinutes(parseInt(outtime.getMinutes()) + test_minute)
	            outtime.setSeconds(parseInt(outtime.getSeconds()) + test_second)
	            var month = this.parsetime(parseInt(outtime.getUTCMonth())+1)
	            var date = this.parsetime(parseInt(outtime.getUTCDate()))
	            var hour = this.parsetime(parseInt(outtime.getUTCHours()))
	            var minute = this.parsetime(parseInt(outtime.getUTCMinutes()))
	            var second = this.parsetime(parseInt(outtime.getUTCSeconds()))
	        }else{
	            outtime = new Date(time*1000)
	            outtime.setFullYear(parseInt(outtime.getFullYear()) + test_year)
	            outtime.setMonth(parseInt(outtime.getMonth()) + test_month)
	            outtime.setDate(parseInt(outtime.getDate()) + test_day)
	            outtime.setHours(parseInt(outtime.getHours()) + test_hour)
	            outtime.setMinutes(parseInt(outtime.getMinutes()) + test_minute)
	            outtime.setSeconds(parseInt(outtime.getSeconds()) + test_second)
	            var month = this.parsetime(parseInt(outtime.getMonth())+1)
	            var date = this.parsetime(parseInt(outtime.getDate()))
	            var hour = this.parsetime(parseInt(outtime.getHours()))
	            var minute = this.parsetime(parseInt(outtime.getMinutes()))
	            var second = this.parsetime(parseInt(outtime.getSeconds()))
	        }
	    }else{
	        outtime = new Date()
	        outtime.setFullYear(parseInt(outtime.getFullYear()) + test_year)
	        outtime.setMonth(parseInt(outtime.getMonth()) + test_month)
	        outtime.setDate(parseInt(outtime.getDate()) + test_day)
	        outtime.setHours(parseInt(outtime.getHours()) + test_hour)
	        outtime.setMinutes(parseInt(outtime.getMinutes()) + test_minute)
	        outtime.setSeconds(parseInt(outtime.getSeconds()) + test_second)
	        var month = this.parsetime(parseInt(outtime.getMonth())+1)
	        var date = this.parsetime(parseInt(outtime.getDate()))
	        var hour = this.parsetime(parseInt(outtime.getHours()))
	        var minute = this.parsetime(parseInt(outtime.getMinutes()))
	        var second = this.parsetime(parseInt(outtime.getSeconds()))
	    }
	    var year = outtime.getFullYear()
	    var ret = year+'-'+month+'-'+date+' '+hour+':'+minute+':'+second
	    return ret
	}
	/*
	 @desc：求出当年/月/日的时间
	 @param time 传入时间，格式为：2018|2018-01|2018-01-01
	 @return ret stime:开始时间缀，etime:结束时间缀
	 */
	this.timeswitch = function(time){
	    if(/^\d{4}$/.test(time)){  // 年
	    	var stime = this.strtotime(time)
	    	var etime = this.strtotime(this.dateadd('+1year',time))
	    }else if(/^\d{4}-{1}\d{1,2}$/.test(time)){  // 月
	    	var stime = this.strtotime(time)
	    	var etime = this.strtotime(this.dateadd('+1month',time))
	    }else if(/^\d{4}-{1}\d{1,2}-{1}\d{1,2}$/.test(time)){  // 日
	    	var stime = this.strtotime(time)
	    	var etime = this.strtotime(this.dateadd('+1day',time))
	    }else{  // 格式错误
	        return false;
	    }
	    var ret = {
	    	stime:stime,
	    	etime:etime
	    }
	    return ret
	}
	/*
	 @desc：时间友好显示函数
	 @param stamp 时间缀，10位
	 @return ret 转换后的时间显示
	 */
	this.timefriend = function(stamp){
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
			var month = this.parsetime(date.getMonth()+1)
			var day = this.parsetime(date.getDate())
			var hour = this.parsetime(date.getHours())
			var minute = this.parsetime(date.getMinutes())
			var second = this.parsetime(date.getSeconds())
			var ret = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
			return ret
		}
	}
}
// var datetime = new datetime()
// var ret1 = datetime.timetostr(1528593779)
// var ret2 = datetime.strtotime('2018')
// var ret3 = datetime.timediff('2017','2018-06')
// var ret4 = datetime.dateadd('-1year','2018')
// var ret5 = datetime.timeswitch('2018-06')
// var ret6 = datetime.timefriend(1528593779)
// console.log(ret1)
// console.log(ret2)
// console.log(ret3)
// console.log(ret4)
// console.log(ret5)
// console.log(ret6)