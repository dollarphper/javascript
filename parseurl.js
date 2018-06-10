/*
 @desc：解析url地址
 @param url url地址，如：http://www.baidu.com/a/b/c.jpg?a=b&c=d#id
 @return info 解析后的地址，如：
 {
    scheme:'http',			#  协议
    host:'www.baidu.com',	#  域名
    port:'',				#  端口
    user:'',				#  验证用户名
    pass:'',				#  验证密码
    path:a/b,				#  路径
    query:'a=b&c=d',		#  查询字符串
    fragment:'id'			#  锚点
 }
 */
function parseurl(url){
    var reg = /(?:([A-Za-z]+):)?(\/{0,3})?(?:(.*):(.*)@)?([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?/
    var res = reg.exec(url)
    var scheme = (res[1])?res[1]:'http'
    var user = (res[3])?res[3]:''
    var pass = (res[4])?res[4]:''
    var host = (res[5])?res[5]:''
    var port = (res[6])?res[6]:''
    var path = (res[7])?res[7]:''
    var query = (res[8])?res[8]:''
    var fragment = (res[9])?res[9]:''
    var info = {
        scheme:scheme,
        host:host,
        port:port,
        user:user,
        pass:pass,
        path:path,
        query:query,
        fragment:fragment
    }
    return info
}
// var ret = parseurl('https://user:pass@www.baidu.com:443/a/b/c.jpg?a=b&c=d#id');
// console.log(ret)