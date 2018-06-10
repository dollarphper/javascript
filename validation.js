/**
 * @desc：批量验证类
 * @author [lee] <[<www.dollarphp.com>]>
 * 1、验证是否为空
 * 2、验证数据类型
 * 3、验证长度是否达标
 * 4、验证是否符合正则匹配
 */
function validation(main){
    this.data = ''
    this.msg = new Array()
    /*
     @desc：初始化方法，执行验证
     */
    this.init = function(){
        for(var i in main){
            this.data = i;
            bool = main[i]['empty'];
            type = main[i]['type'];
            len_arr = main[i]['length'];
            preg = main[i]['preg'];
            this.isEmpty(bool).dataType(type).dataLength(len_arr).pregMach(preg)
        }
    }
    /*
     @desc：内部方法，验证是否是整数
     @param val 传入数据
     @return true:是整数 false:非整数
     */
    this.isInt = function(val){
        if((typeof(val)=='number')||(val instanceof Number)){
            if(/^\d*$/.test(val)){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
    /*
     @desc：内部方法，验证是否是浮点数
     @param val 传入数据
     @return true:是浮点数 false:非浮点数
     */
    this.isFloat = function(val){
        if((typeof(val)=='number')||(val instanceof Number)){
            if(/^\d*\.\d*$/.test(val)){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
    /*
     @desc：内部方法，验证是否是字符串
     @param val 传入数据
     @return true:是字符串 false:非字符串
     */
    this.isString = function(val){
        if((typeof(val)=='string')||(val instanceof String)){
            return true
        }else{
            return false
        }
    }
    /*
     @desc：内部方法，验证是否是布尔值
     @param val 传入数据
     @return true:是布尔值 false:非布尔值
     */
    this.isBoolean = function(val){
        if((typeof(val)=='boolean')||(val instanceof Boolean)){
            return true
        }else{
            return false
        }
    }
    /*
     @desc：内部方法，验证是否是数组
     @param val 传入数据
     @return true:是数组 false:非数组
     */
    this.isArray = function(val){
        if(val instanceof Array){
            return true
        }else{
            return false
        }
    }
    /*
     @desc：内部方法，验证是否是对象
     @param val 传入数据
     @return true:是对象 false:非对象
     */
    this.isObject = function(val){
        if(val instanceof Object && typeof val.length == 'undefined'){
            return true
        }else{
            return false
        }
    }
    /*
     @desc：内部方法，验证是否是空值
     @param bool 传入数据
     @return msg 若是空值，显示一条警告消息
     */
    this.isEmpty = function (bool){
        var data = this.data;
        if(bool){
            if(data.length == 0){
                var msg = "'"+data+"'不能为空";
                this.msg.push(msg)
            }
        }
        return this
    }
    /*
     @desc：内部方法，执行验证，验证不通过添加警告消息
     @param type 类型
     */
    this.dataType = function (type){
        var data = this.data
        if(type=='bool'){
            if(!this.isBoolean(data)){
                var msg = "'"+data+"'不能为非布尔值";
                this.msg.push(msg)
            }
        }else if(type=='string'){
            if(!this.isString(data)){
                var msg = "'"+data+"'不能为非字符串值";
                this.msg.push(msg)
            }
        }else if(type=='int'){
            if(!this.isInt(data)){
                var msg = "'"+data+"'不能为非整型值";
                this.msg.push(msg)
            }
        }else if(type=='float'){
            if(!this.isFloat(data)){
                var msg = "'"+data+"'不能为非浮点型值";
                this.msg.push(msg)
            }
        }else if(type=='array'){
            if(!this.isArray(data)){
                var msg = "'"+data+"'不能为非数组值";
                this.msg.push(msg)
            }
        }else if(type=='object'){
            if(!this.isObject(data)){
                var msg = "'"+data+"'不能为非对象值";
                this.msg.push(msg)
            }
        }
        return this
    }
    /*
     @desc：内部方法，验证数据长度
     @param len_arr 传入的验证数组 格式为[min,max]
     */
    this.dataLength = function (len_arr){
        var data = this.data
        if(len_arr){
            var min = Math.abs(len_arr[0]);
            var max = Math.abs(len_arr[1]);
            var isint = this.isInt(data)
            var isfloat = this.isFloat(data)
            var isstring = this.isString(data)
            var isbool = this.isBoolean(data)
            var isarray = this.isArray(data)
            var isobject = this.isObject(data)
            var len = 0
            if(isint){
                len = data.toString().length
            }else if(isfloat){
                var len0 = data.toString().split('.')
                len = len0[1].length
            }else if(isstring){
                len = data.length
            }else if(isarray){
                len = data.length
            }else if(isobject){
                for(var i in data){
                    len++
                }
            }
            if(!(len >= min && len <= max)){
                var msg = "'"+data+"'长度不能小于"+min+"，不能大于"+max;
                this.msg.push(msg)
            }
        }
        return this
    }
    /*
     @desc：内部方法，验证是否匹配正则
     @param preg 传入的验证数组 格式为[min,max]
     */
    this.pregMach = function (preg){
        var data = this.data
        if(preg){
            if(!preg.test(data)){
                var msg = "'"+data+"'格式不匹配'"+preg+"'";
                this.msg.push(msg)
            }
        }
    }
    /*
     @desc：完成验证，返回错误消息
     @return msg 错误消息数组
     */
    this.checkdata = function(){
        var msg = this.msg;
        return msg;
    }
}
// var data = {
//     'lee': {
//             'empty':true,
//             'type':'string',
//             'length':new Array(5,20),
//             'preg':/^a.*/
//         },
//     'hello': {
//             'empty':false,
//             'type':'int',
//             'length':new Array(8,20),
//             'preg':/^a\s*/
//         }
// }
// var validation = new validation(data)
// validation.init()
// var ret = validation.checkdata()
// console.log(ret);