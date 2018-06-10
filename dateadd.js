/**
 * @desc：日期计算类
 * @author [lee] <[<www.dollarphp.com>]>
 * @param dur 增量 如：+1day -5 year 6months
 * @param time 传入时间 支持格式 1、y-m-d H:i:s 2、1111111111
 * @return 字符串 如：2018-01-01 00:00:00
 */
function dateadd(dur,time = false){
	/*
	 @desc：主方法，执行转换
	 */
	this.getdate = function(){
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
	        if(((typeof(time)=='string') || (time instanceof String)) && (/^\d{4}(-\d{2}(-\d{2})?)?$/.test(time))){
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
	 @desc：内部方法，不足10补0
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
}
// var dateadd = new dateadd('+3hour +2year-5months','2018-05-08')
// var ret = dateadd.getdate()
// console.log(ret)