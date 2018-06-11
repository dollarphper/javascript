/**
 * @desc：类型转换类
 * @author [lee] <[<www.dollarphp.com>]>
 * @param data 需要转换的数据
 */
function translation(data){
    this.data = data
    this.info = new Array()
    /*
     @desc：内部方法，处理转换
     */
    this.todo = function(){
        data = this.data
        info = this.info
        for(var i in info){
            for(var j in data){
                for(var k in data[j]){
                    if(i==k){
                        if(info[i]=='bool'){
                            data[j][k] = Boolean(data[j][k])
                        }else if(info[i]=='string'){
                            data[j][k] = String(data[j][k])
                        }else if(info[i]=='int'){
                            data[j][k] = Number(Number(data[j][k]).toFixed(0))
                        }else if(info[i]=='float'){
                            data[j][k] = Number(data[j][k])
                        }else if(info[i]=='array'){
                            data[j][k] = Array(data[j][k])
                        }else if(info[i]=='object'){
                            data[j][k] = Object(data[j][k])
                        }
                    }
                }
            }
        }
        this.data = data
    }
    /*
     @desc：主方法，执行转换
     @param info 定义的转换规则
     @return data 转换后的数据
     */
    this.translate = function(info){
        this.info = info
        this.todo()
        return this.data
    }
}
// var data = new Array(
//     {
//         id:'1.2',
//         sex:0,
//         name:'zhang',
//         pics:new Array('a.png','b.png')
//     },
//     {
//         id:'2',
//         sex:'0',
//         name:'li',
//         pics:new Array('c.png','d.png')
//     },
//     {
//         id:'5',
//         sex:'true',
//         name:'5',
//         pics:new Array('e.png','f.png')
//     }
// )
// var arr = {
//     id:'float',
//     sex:'bool',
//     name:'string',
//     pics:'array'
// }
// var translation = new translation(data)
// var ret = translation.translate(arr)
// console.log(ret);
module.exports = translation