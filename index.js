var ajax = require('./ajax')
var arrmax = require('./arrmax')
var arrmin = require('./arrmin')
var arrobj = require('./arrobj')
var base64 = require('./base64')
var datetime = require('./datetime')
var getclientheight = require('./getclientheight')
var getscrollheight = require('./getscrollheight')
var getscrolltop = require('./getscrolltop')
var istype = require('./istype')
var keysearch = require('./keysearch')
var ksort = require('./ksort')
var parseurl = require('./parseurl')
var queryjson = require('./queryjson')
var tablesort = require('./tablesort')
var template = require('./template')
var translation = require('./translation')
var unsetarr = require('./unsetarr')
var unsetobj = require('./unsetobj')
var validation = require('./validation')
var dollarphp = {
	ajax:ajax,
	arrmax:arrmax,
	arrmin:arrmin,
	arrobj:arrobj,
	base64:base64,
	datetime:datetime,
	getclientheight:getclientheight,
	getscrollheight:getscrollheight,
	getscrolltop:getscrolltop,
	istype:istype,
	keysearch:keysearch,
	ksort:ksort,
	parseurl:parseurl,
	queryjson:queryjson,
	tablesort:tablesort,
	template:template,
	translation:translation,
	unsetarr:unsetarr,
	unsetobj:unsetobj,
	validation:validation
}
module.exports = dollarphp