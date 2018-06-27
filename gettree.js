/*
 @desc 无限级分类
 @param data 需要转换的数据
 @param pkey 上级的键名
 @param key 主键名
 @param pid 顶级id 默认0
 @param depth 深度 默认1
 @return ret 转换后的数组
 */
function gettree(data,pkey,key,pid = 0,depth = 1){
	this.data = data
	this.pkey = pkey
	this.key = key
	this.pid = pid
	this.depth = depth
	/*
	 @desc：获取梯式分类
	 @param level 起始层级 默认0
	 */
	this.getleveltree = function(level = 0){
		var data = this.data
		var pkey = this.pkey
		var key = this.key
		var pid = this.pid
		var depth = this.depth
	    var ret = new Array()
	    if(level < depth){
		    for (var i in data){
		    	if(data[i][pkey] == pid){
		    		data[i]['level'] = level
		    		ret.push(data[i])
		    		this.pid = data[i][key]
		    		ret = ret.concat(this.getleveltree(level + 1))
		    	}
		    }
	    }
	    return ret
	}
	/*
	 @desc：获取裂变式分类
	 */
	this.getsubtree = function() {
		var data = this.data
		var pkey = this.pkey
		var key = this.key
		var pid = this.pid
		var depth = this.depth
		var ret = new Array()
		if(depth > 0){
			depth --
			this.depth = depth		
			for (var i in data){
				if(data[i][pkey] == pid){
					this.pid = data[i][key]
					data[i]['child'] = this.getsubtree()
					ret.push(data[i])
				}
			}
		}
		return ret
	}
}
// var data = new Array(
// 		{
// 			'id':1,
// 			'pid':0
// 		},
// 		{
// 			'id':2,
// 			'pid':1
// 		},
// 		{
// 			'id':3,
// 			'pid':2
// 		}
// 	)
// var gettree = new gettree(data,'pid','id')
// var ret = gettree.getsubtree()
// console.log(ret)
module.exports = gettree