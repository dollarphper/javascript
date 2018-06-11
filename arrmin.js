/*
 @desc：找出数组中的最小值
 @param arr 原始数组
 @return min 数组中的最小值
 */
function arrmin(arr){
	var min = arr[0]
	for(var i=0;i<arr.length;i++){
		if(min>arr[i]){
			min = arr[i]
		}
	}
	return min
}
// var arr = [5,1,2,3,2,4]
// var ret = arrmin(arr)
// console.log(ret)
module.exports = arrmin