/*
 @desc：json对象以键名排序
 @param obj 待排序json对象
 @return ret 排序后的json对象
 */
function ksort(obj){
    var ret = {}
    for(var i in obj){
        ret[i] = obj[i]
    }
    return ret
}
// var obj = {
// "3":"c",
// "6":"a",
// "2":"b"
// }
// var ret = ksort(obj)
// console.log(ret)