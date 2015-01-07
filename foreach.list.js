(function(win) {
	"use strict"; //严格模式
	$.common.list = $.common.list || {};
	$.extend($.common.list, {
		/*
		 * 这个list用法是绑定任意元素传入json,会以元素内部html为模板循环出数据,list中数据请使用{{keyName}}绑定，keyName为键值
		 * 任意位置$index可以，知道当前循环列数组指针位置
		 * 支持多维，不规则数组遍历.....详细例子参见listCommonDemo
		*/
		config: {
			templates:"",
			status:true,
			oldArr:[],
			allRes:true, //是否允许下拉刷新
			addRes:true //是否允许滚动加载
		},
		ele:"",
		callback: function(){},  //预留回调接口，方便处理多维数组
		show:function(ele,data,callback){
			 var $this = this,
			 	 _ele = ele || $this.ele,
			 	 _callback = callback || $this.callback,
			 	 _status = $this.config.status;
			 
			 $this.oldArr= data;
			
			 //判断传入对象是否为空。
			 if(_ele == "") return false;
			 var _$ele = $(ele);
			 
			 function setStatus(){
			 	$this.config.status = !_status;
			 	_status = $this.config.status;
			 }
			 function setTemplates(templates){
			 	$this.config.templates = templates;
			 }
			 function creareDom(thisDom,eq){
			 	if(_status){
			 		setTemplates(thisDom.html());
			 		setStatus();
			 	}
				 var _html = $this.config.templates;
				 var _lists ="";
				 //判断数组维度
				 if(data.length != undefined){
				 	//遍历数组重构dom
				 	for(var i = 0,len=data.length;i<len;i++){
					 	var _line = _html;
					 	//判断是否要获取指针
				 		if(_line.indexOf("$index")){
				 			_line = _line.replace("$index",i);
				 		};
				 		//多维数组遍历
				 		var forKey = function(obj,keyName){
				 			var mData = obj,
				 				keyName = keyName || "";
				 			for(var key in mData){
						 		if(typeof(mData[key]) != "object"){
						 			var _newline = _line.replace("{{"+keyName+key+"}}",mData[key]);
						 			_line=_newline;
						 		}else{
						 			if(keyName == ""){
						 				forKey(mData[key],key+".");
						 			}else{
						 				forKey(mData[key],keyName+key+".");
						 			}
						 		}
						 	}
				 		};
					 	forKey(data[i]);
					 	_line = _line.replace(/{{.*}}/g,"");
					 	_lists+=_line;
					 }
				 }else{
				 	var _line = _html;
				 	//判断是否要获取指针
				 	if(_line.indexOf("$index")){
			 			_line = _line.replace("$index",0);
			 		}
				 	//遍历数组重构dom
				 	for(var key in data){
				 		var _newline = _line.replace("{{"+key+"}}",data[key]);
				 		_line=_newline;
				 	}
				 	_lists+=_line;
				 }
				 //渲染dom

				 thisDom.eq(eq).html(_lists);
				 //执行回调
				 _callback();
			 }
			 //处理class重复导致多容器同时绑定的问题
			 var _num = 0;
			 _$ele.forEach(function(data){
			 	var _thisHtml = _$ele.eq(_num).html();
			 	//if(_thisHtml.match(/{{.*}}/g) != null && _thisHtml.match(/{{.*}}/g) != "{{}}"){
			 		creareDom(_$ele.eq(_num),_num);
			 	//}
			 	_num ++;
			 })
		},
		add:function(ele,newArr,callback){
			var $this = this,
			 	oldArr = $this.oldArr; 
			
			 	newArr = oldArr.concat(newArr);
			 	$this.show(ele,newArr,callback);
		},
		scroll:function(ele,allurl,addurl){
			var $this = this,
			 	 _ele = ele || $this.ele,
			 	 _allurl = allurl || "",
			 	 _addurl = addurl || "";
			 	 $(_ele).parents(".panel").height("auto");
			 	 
			 	 var myScroller = $(_ele).find("li");
					//This event is triggered when the user has scrolled past and the pull to refresh block is no longer available
					$.bind(myScroller, "click", function () {
						
					});
			 	 
			 	  var myScroller=$(_ele).parents("#content").scroller({
					    refresh:true,
					    scrollBars: true
					});
					
					
			 	 //下拉重置
//			 	 $(_ele).bind("swipe",function(){
//			 	 	console.log("swipe");
//			 	 	var $this=$(this),offset = $(this).parent().css("transform"),
//			 	 		headHeight = parseInt($("#header").height()),
//			 	 		footHeight = parseInt($("#foot").height());
//			 	 		offset = offset.substring(offset.indexOf("(") + 1,offset.indexOf(")"));
//			 	 		offset = offset.split(", ");
//			 	 	var offsetTop = parseInt(offset[13]);
//
//			 	 	if(offsetTop == 0){
//			 	 		console.log("start");
//			 	 		var newArr = offset;
//			 	 		for(var i = 0;i <= 44;i++){
//			 	 			newArr[13] = i;
//			 	 			console.log("matrix3d("+newArr.join(", ")+");");
//			 	 			$this.css("transform","matrix3d("+newArr.join(", ")+");");
//			 	 		}
//			 	 	}
//			 	 })
//			 	 //瀑布流刷新
//			 	 $(_ele).bind("swipeUp",function(){
//			 	 	var offsetTop = $(this).parent().css("transform"),
//			 	 		headHeight = $("#header").height(),
//			 	 		footHeight = $("#foot").height();
//			 	 		offsetTop = offsetTop.substring(offsetTop.indexOf("(") + 1,offsetTop.indexOf(")"));
//			 	 		offsetTop = offsetTop.split(",");
//			 	 		offsetTop = offsetTop[13];
//			 	 	console.log(offsetTop);
//			 	 })
		}
	});

})(window);