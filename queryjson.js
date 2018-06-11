/*
 @desc：查询字符串与json对象互转类
 @param data 需要转换的数据
 */
function queryjson(data){
    this.data = data
    /*
     @desc：查询字符串转json对象
     @return json json对象
     */
    this.querytojson = function(){
        var data = this.data
        var arr = data.split('&')
        var json = {}
        for(var i in arr){
            var k = arr[i].split('=')[0]
            var v = arr[i].split('=')[1]
            json[k] = v
        }
        return json
    }
    /*
     @desc：json对象转查询字符串
     @return query 查询字符串
     */
    this.jsontoquery = function(){
        var data = this.data
        var arr = new Array()
        for(var k in data){
            var v = data[k]
            var val = k+'='+v
            arr.push(val)
        }
        var query = arr.join('&')
        return query
    }
}
// var str = "a=b&c=d"
// var queryjson = new queryjson(str)
// var ret = queryjson.querytojson()
// console.log(ret)
// var json = {
//  a:'b',
//  c:'d'
// }
// var queryjson = new queryjson(json)
// var ret = queryjson.jsontoquery()
// console.log(ret)
module.exports = queryjson