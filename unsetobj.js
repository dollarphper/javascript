/*
 @desc：删除对象中的元素
 @param arr 原对象
 @param item 对象索引
 @return arr 删除元素后的对象
 */
function unsetobj(obj,item){
    delete obj[item]
    return obj
}
// var obj = {
//  name:'lee',
//  sex:'male'
// }
// var ret = unsetobj(obj,'sex')
// console.log(ret)