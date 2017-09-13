window.onload=function(){
	imgLocation("container","box");
	document.addEventListener("touchstart",function(){
				alert(dasdasdasd);
	});
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
				var img=document.createElement('img');
						img.src="./images/"+imgData.data[i].src;
						imgDiv.appendChild(img);

			}
			imgLocation("container","box");
		}
	}
}
function lazylLoading(){
	var cparent=document.getElementById("container");
	    var ccontent=getChildElement(cparent,"box");
	    	var lastContentHeight=ccontent[ccontent.length-1].offsetTop;
	    	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	    	var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
	    	if(lastContentHeight<=(scrollTop+pageHeight)){
	    		return true;
	    	}
}
function imgLocation(parent,content){
	var cparent=document.getElementById(parent);
	    var ccontent=getChildElement(cparent,content);
	        var boxWidth=ccontent[0].offsetWidth;
	        var imgNumber=Math.floor((document.documentElement.clientWidth||document.body.clientWidth)/boxWidth);
	         cparent.style.cssText="width:"+boxWidth*imgNumber+"px;";

	var boxHeightArr=[];
	for(var i=0;i<ccontent.length;i++){
		if(i<imgNumber){
			boxHeightArr[i]=ccontent[i].offsetHeight;
		}else{
			var minBoxHeight=Math.min.apply(null,boxHeightArr);
			var minIndex=getMinBoxHeight(boxHeightArr,minBoxHeight);
					ccontent[i].style.position="absolute";
					ccontent[i].style.top=minBoxHeight+"px";
					ccontent[i].style.left=ccontent[minIndex].offsetLeft+"px";
					
					boxHeightArr[minIndex]=boxHeightArr[minIndex]+ccontent[i].offsetHeight;
		}
	}
}

function getMinBoxHeight(boxHeightArr,minBoxHeight){
	for(var i in boxHeightArr){
		if(boxHeightArr[i]==minBoxHeight){
			return i;
		}
	}
}

function getChildElement(parent,content){
	var contentArr=[];
	var allcontent=parent.getElementsByTagName("*");
		for(var i=0;i<allcontent.length;i++){
			if(allcontent[i].className==content){
					contentArr.push(allcontent[i]);
				}
			}
			return contentArr;
}
