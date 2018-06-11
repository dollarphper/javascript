/*
 @desc：关键字搜索函数，可用于关键字匹配
 @param key 关键字
 @param str 要搜索的字符串
 @return out 匹配关键字前后出现的位置
 */
function keysearch(key,str){
	var min = 0
	var max = str.length
	var index = str.indexOf(key)
	var left = index - 10
	var right = index + 10
	if(left<min){
	    left = min
	}
	if(right>max){
	    right = max
	}
	var out = str.slice(left,right)
	return out
}
// var str = '你好吗？你在哪里呀？我可以过来找你玩吗？你怎么不回答我呀！'
// var key = '玩'
// var ret = keysearch(key,str)
// console.log(ret)
module.exports = keysearch