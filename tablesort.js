/*
 @desc：表格排序类
 @param data 待排序数组
 */
function tablesort(data){
    this.data = data
    this.sortby = true
    /*
     @desc：主方法，排序
     @param item 排序字段
     @return ret 排序后的数据
     */
    this.sort = function(item){
        if(this.sortby){
            var ret = this.data.sort(function(a,b){
                return a[item]>b[item]
            })
        }else{
            var ret = this.data.sort(function(a,b){
                return a[item]<b[item]
            })
        }
        this.sortby = !this.sortby
        return ret
    }
}
var data = new Array(
     {
         id:1,
         title:'title1',
         content:'content1'
     },
     {
         id:3,
         title:'title2',
         content:'content3'
     },
     {
         id:2,
         title:'title3',
         content:'content2'
     }
 )
var tablesort = new tablesort(data)
var ret = tablesort.sort('id')
console.log(ret)
var ret = tablesort.sort('title')
console.log(ret)
var ret = tablesort.sort('id')
console.log(ret)