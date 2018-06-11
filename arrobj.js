/*
 @desc：数组和对象互转类
 @param data 待转换的数据
 */
function arrobj(data){
    this.data = data
    /*
     @desc：对象转数组
     */
    this.objtoarr = function(){
        var data = this.data
        var arr = new Array()
        for(var i in data){
            for(var j in data[i]){
                arr[j] = {}
            }
        }
        for(var i in data){
            for(var j=0;j<data[i].length;j++){
                arr[j][i] = data[i][j]
            }
        }
        return arr
    }
    /*
     @desc：数组转对象
     */
    this.arrtoobj = function(){
        var data = this.data
        var obj = {}
        for(var i in data){
            for(var j in data[i]){
                obj[j] = new Array()
            }
        }
        for(var i in data){
            for(var j in data[i]){
                obj[j][i] = data[i][j]
            }
        }
        return obj
    }
}
// var data = {
//  id:[1,2,3],
//  title:['title1','title2','title3'],
//  content:['content1','content2','content3']
// }
// var arrobj = new arrobj(data)
// var ret = arrobj.objtoarr()
// console.log(ret)
// var data = new Array(
//      {
//          id:1,
//          title:'title1',
//          content:'content1'
//      },
//      {
//          id:2,
//          title:'title2',
//          content:'content2'
//      }
//  )
// var arrobj = new arrobj(data)
// var ret = arrobj.arrtoobj()
// console.log(ret)
module.exports = arrobj