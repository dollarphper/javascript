function select_search(id,arr,name){
	var container = document.getElementById(id)
	var hidden = document.createElement('input')
	hidden.setAttribute('type','hidden')
	hidden.setAttribute('name',name)
	var text = document.createElement('input')
	text.setAttribute('type','text')
	text.setAttribute('class','select_text')
	var span = document.createElement('span')
	span.setAttribute('class','select_span')
	var ul = document.createElement('ul')
	ul.setAttribute('class','select_ul')
	container.appendChild(hidden)
	container.appendChild(text)
	container.appendChild(span)
	container.appendChild(ul)
	function getValue(arr){
		var lis = ''
		for(var i=0;i<arr.length;i++){
			lis += '<li class="select_li">'+arr[i].name+'</li>'
		}
		ul.innerHTML = lis
	}
	function searchValue(str,arr){
		var retArray = new Array()
		if(str==''){
			retArray = arr
		}else{
			retArray = arr.filter(function(item){
				var check = item.name.indexOf(str)
				if(check!=-1){
					return item
				}
			})
		}
		return retArray
	}
	function chooseValue(ele){
		for(var i=0;i<ele.length;i++){
			var prop = ele[i].getAttribute('class')
			if(prop.indexOf('select_li')!=-1){
				ele[i].onclick = function(){
					var val = this.innerHTML
					text.value = val
				}
			}
		}
	}
	function removeHide(){
		ul.style.display = 'block'
	}
	function getHide(){
		ul.style.display = 'none'
	}
	function triggerHide(){
		var all = document.getElementsByTagName('*')
		var arr = new Array('select_text','select_span','select_ul','select_li')
		for(var i=0;i<all.length;i++){
			all[i].onclick = function(e){
				e.stopPropagation()
				e.preventDefault()
				var prop = this.getAttribute('class')
				var flag = false
				if(prop){
					for(var j in arr){
						var item = arr[j]
						if(prop.indexOf(item)!=-1){
							flag = true
							break
						}
					}
				}
				if(!flag){
					getHide()
				}else{
					removeHide()
				}
			}
		}
	}
	triggerHide()
	text.onfocus = function(){
		removeHide()
		var val = this.value
		var valArray = searchValue(val,arr)
		getValue(valArray)
		lis =  document.getElementsByTagName('li')
		chooseValue(lis)
	}
	text.onkeyup = function(){
		var val = this.value
		var valArray = searchValue(val,arr)
		getValue(valArray)
		lis =  document.getElementsByTagName('li')
		chooseValue(lis)
	}
	span.onclick = function(e){
		var val = text.value
		var valArray = searchValue(val,arr)
		getValue(valArray)
		lis =  document.getElementsByTagName('li')
		chooseValue(lis)
		e.stopPropagation()
		e.preventDefault()
		var style = ul.style.display
		if(style=='block'){
			getHide()
		}else{
			removeHide()
		}
	}
}