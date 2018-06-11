/*
 @desc：找出数组中的最大值
 @param arr 原始数组
 @return max 数组中的最大值
 */
function arrmax(arr){
	this.max = arr[0]
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max = arr[i]
		}
	}
	return max
}
// var arr = [1,2,5,3,2,4]
// var ret = arrmax(arr)
// console.log(ret)
module.exports = arrmax