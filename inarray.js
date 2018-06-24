/*
 @desc：判断元素是否在数组中
 @param value 需要判断的元素
 @param arr 要检测的数组
 @return true:在数组中 flase:不在数组中
 */
function inarray(value,arr){
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            return true
        }
    }
    return false
}
// var arr = [1,2,5]
// var value = 2
// var ret = inarray(value,arr)
// console.log(ret)
module.exports = inarray