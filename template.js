/*
 @desc：模板引擎函数
 @param data 待替换数组
 @param content 原内容
 @return ret 替换后的内容
 */
function template(data,content){
	var ret = content.replace(
	        /{([\s\S]+?)}/g,
	        function(param1,param2){
	            var index = param2
	            return data[index]
	        }
	    )
	return ret
}
// var data = {
//     'name':'lee',
//     'place':'wuhan'
// }
// var content = "Hello {name}, Welcome to {place}!";
// var ret = template(data,content)
// console.log(ret)
module.exports = template