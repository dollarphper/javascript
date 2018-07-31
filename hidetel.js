/*
 * @desc：隐藏手机号
 * @param：tel 手机号，如：13987654321
 * @param：num 隐藏的位数，默认4位
 * @return ret 回显的手机号，如：139xxxx4321
 */
function hidetel(tel,num = 4){
    tel = tel.toString()
    var len = tel.length
    var start = Math.floor((len - num) / 2)
    var end = Math.ceil((len - num) / 2)
    var head = tel.slice(0,start)
    var arr = new Array(num + 1)
    var body = arr.join('x')
    var foot = tel.slice((start + num),len)
    var ret = head+''+body+''+foot
    return ret
}
// var ret = hidetel(13987654321)
// console.log(ret)
module.exports = hidetel