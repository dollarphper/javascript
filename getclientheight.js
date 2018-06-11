/*
 @desc：获取窗口可视范围的高度
 */
function getclientheight(){
	var clientheight=0
	if(document.body.clientHeight&&document.documentElement.clientHeight){
	    clientheight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight
	}else{
	    clientheight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight
	}
	return clientheight
}
// var ret = getclientheight()
// console.log(ret)
module.exports = getclientheight