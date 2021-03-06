window.onload=function(){
	imgLocation("container","box");
	var imgData={"data":[{"src":"15.jpg"},
						{"src":"16.jpg"},
						{"src":"17.jpg"},
						{"src":"18.jpg"},
						{"src":"19.jpg"},
						{"src":"20.jpg"},
						{"src":"21.jpg"},
						{"src":"22.jpg"},
						{"src":"23.jpg"},
						{"src":"24.jpg"},
						{"src":"25.jpg"},
						{"src":"26.jpg"},
						{"src":"27.jpg"},
						{"src":"28.jpg"},
						{"src":"29.jpg"},
						{"src":"30.jpg"},
						{"src":"31.jpg"},
						{"src":"32.jpg"},
						{"src":"33.jpg"},
						{"src":"34.jpg"},
						{"src":"35.jpg"},
						{"src":"36.jpg"},
						{"src":"37.jpg"},
						{"src":"38.jpg"},
						{"src":"39.jpg"},
						{"src":"40.jpg"},
						{"src":"41.jpg"},
						{"src":"42.jpg"},
						{"src":"43.jpg"},
						{"src":"44.jpg"},
						{"src":"45.jpg"},
						{"src":"46.jpg"},
						{"src":"47.jpg"},
						{"src":"48.jpg"},
						{"src":"49.jpg"},
						{"src":"50.jpeg"},
				]};
	window.onscroll=function(){
		if(lazylLoading()){
			var cparent=document.getElementById("container");
			for(var i=0;i<imgData.data.length;i++){
				var  ccontent=document.createElement('div');
						ccontent.className="box";
						cparent.appendChild(ccontent);
				var imgDiv=document.createElement('div');
						imgDiv.className="box_img";
						ccontent.appendChild(imgDiv);
				var a=document.createElement('a');
						a.href="images/"+imgData.data[i].src;
						imgDiv.appendChild(a);
				var img=document.createElement('img');
						img.src="images/"+imgData.data[i].src;
						a.appendChild(img);

			}
			imgLocation("container","box");
		}
	}
}
/*判断什么时候加载*/
function lazylLoading(){
	var cparent=document.getElementById("container");
	    var ccontent=getChildElement(cparent,"box");/*筛选出div box的集合*/
	    	var lastContentHeight=ccontent[ccontent.length-1].offsetTop;/*最后一张图片距离顶部的高度*/
	    	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;/*鼠标滚动距离*/   /*  ||是兼容性处理*/
	    	var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;/*浏览器可视区域的高度*/
	    	if(lastContentHeight<=(scrollTop+pageHeight)){
	    		return true;
	    	}
}
function imgLocation(parent,content){
	var cparent=document.getElementById(parent);
	    var ccontent=getChildElement(cparent,content);/*筛选出div box的集合*/
	        var boxWidth=ccontent[0].offsetWidth;/*offsetWidth获取div box的宽度*/
	        var imgNumber=Math.floor((document.documentElement.clientWidth||document.body.clientWidth)/boxWidth);/*获取浏览器宽度除以图片宽度得到一行可以放多少张图片*/
	         cparent.style.cssText="width:"+boxWidth*imgNumber+"px;";/*计算浏览器宽度后给div container一个固定的宽度(拼接的css样式最后记得加分号)*/

	var boxHeightArr=[];
	for(var i=0;i<ccontent.length;i++){
		if(i<imgNumber){
			boxHeightArr[i]=ccontent[i].offsetHeight;/*将第一排的图片 box高度存到数组中*/
		}else{
			var minBoxHeight=Math.min.apply(null,boxHeightArr);/*找出box高度数组中的最小值*/
			var minIndex=getMinBoxHeight(boxHeightArr,minBoxHeight);/*传入参数到函数计算出最小那张图片的下标*/
					ccontent[i].style.position="absolute";
					ccontent[i].style.top=minBoxHeight+"px";/*不用加分号加了出错*/
					ccontent[i].style.left=ccontent[minIndex].offsetLeft+"px";
					/*将高度最小那张图片的高度值加上在他下面那张图片高度值 然后重新存到数组*/
					boxHeightArr[minIndex]=boxHeightArr[minIndex]+ccontent[i].offsetHeight;
		}
	}
}
/*创建一个函数用于计算图片box高度最小的那一张图片下标*/
function getMinBoxHeight(boxHeightArr,minBoxHeight){
	for(var i in boxHeightArr){
		if(boxHeightArr[i]==minBoxHeight){
			return i;
		}
	}
}
/*传入元素集合筛选所想要的元素的数组集合返回*/
function getChildElement(parent,content){
	var contentArr=[];
	var allcontent=parent.getElementsByTagName("*");/*获取到div container下的每一个元素*/
		for(var i=0;i<allcontent.length;i++){
			if(allcontent[i].className==content){/*将 div container下 className为box的添加到数组中*/
					contentArr.push(allcontent[i]);
				}
			}
			return contentArr;
}
