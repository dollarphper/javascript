/*
 @desc：一维数组与二维数组互转类
 @param data 需要转换的数组
 @param key 主键
 @return ret 转换后的数组
 */
function onemore(data,key){
    this.data = data
    this.key = key
    /*
     @desc：一维转二维
     */
    this.onetomore = function(){
        var data = this.data
        var key = this.key
        var ret = {}
        for(var i in data){
            ret[data[i][key]] = new Array()
        }
        for(var i in data){
            var arr = {}
            for(var j in data[i]){
                if(j != key){
                    arr[j] = data[i][j]
                }
            }
            ret[data[i][key]].push(arr)
        }
        return ret
    }
    /*
     @desc：二维转一维
     */
    this.moretoone = function(){
        var data = this.data
        var key = this.key
        var ret = new Array()
        var count = 0
        for(var i in data){
            ret[count] = {}
            for(var j in data[i]){
                ret[count] = data[i][j]
                ret[count][key] = i
                count ++
            }
        }
        return ret
    }
}
// var data = new Array(
//      {
//          'uesr_id':1,
//          'role_id':1,
//          'user_nick':'a'
//      },
//      {
//          'uesr_id':2,
//          'role_id':1,
//          'user_nick':'b'
//      },
//      {
//          'uesr_id':3,
//          'role_id':2,
//          'user_nick':'c'
//      }
//  )
// var onemore = new onemore(data,'role_id')
// var ret = onemore.onetomore()
// console.log(ret)
// var data = {
//  1:new Array(
//          {
//              'user_id':1,
//              'user_nick':'a'
//          },
//          {
//              'user_id':2,
//              'user_nick':'b'
//          }
//      ),
//  2:new Array(
//          {
//              'user_id':3,
//              'user_nick':'c'
//          }
//      )
// }
// var onemore = new onemore(data,'role_id')
// var ret = onemore.moretoone()
// console.log(ret)
module.exports = onemore