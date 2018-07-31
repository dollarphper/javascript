/*
 * @desc：重复输出字符串
 * @param：str 要重复的字符串，如：'x'
 * @param：num 重复次数，如：4
 * @return ret 回显的字符串，如：'xxxx'
 */
function strrepeat(str,num){
    var arr = new Array(num + 1)
    var ret = arr.join(str)
    return ret
}
// var ret = strrepeat('x',4)
// console.log(ret)
module.exports = strrepeat