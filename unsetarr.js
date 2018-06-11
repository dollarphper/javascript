/*
 @desc：删除数组中的元素
 @param arr 原数组
 @param item 数组索引，只能是数字索引
 @param len 要删除的长度
 @return arr 删除元素后的数组
 */
function unsetarr(arr,item,len = 1){
	arr.splice(item,len)
	return arr
}
// var arr = new Array(1,2,3,4)
// var ret = unsetarr(arr,1,2)
// console.log(ret)
module.exports = unsetarr