/*
 @desc：时间字符串转时间缀
 @param str 时间字符串，格式：2018-06-10 08:00:00
 @return time 时间缀，10位长度
 */
function strtotime(str){
	var date = new Date(str)
	var time = date.getTime().toString()
	time = time.slice(0,10)
	return time
}
// var ret = strtotime('2018-06-10 08:00:00')
// console.log(ret)