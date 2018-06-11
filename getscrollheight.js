/*
 @desc：获取文档内容实际高度
 */
function getscrollheight(){
	var scrollheight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
	return scrollheight
}
// var ret = getscrollheight()
// console.log(ret)
module.exports = getscrollheight