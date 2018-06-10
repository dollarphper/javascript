/*
 @desc：获取窗口滚动条高度
 */
function getscrolltop(){
	var scrolltop=0
	if(document.documentElement&&document.documentElement.scrollTop){
	    scrolltop=document.documentElement.scrollTop
	}
	else if(document.body){
	    scrolltop=document.body.scrollTop
	}
	return scrolltop
}
// var ret = getscrolltop()
// console.log(ret)