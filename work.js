var ul = document.getElementById("ul");
var ol = document.getElementById("ol");
var li = ul.getElementsByTagName("li");
var li_width = li[0].offsetWidth;				//獲得li的寬度
var left_start = ul.offsetLeft;			//獲取當前第一張圖片的left
ul.style.width=(li_width*li.length)+"px";

var one=setInterval("right()",3000);			//setInterval() ：方法可按照指定的週期（以毫秒計）來呼叫函式或計算表示式。

for(var i=0 ; i<li.length ; i++){
   
   				//動態生成底部按鈕數字按鈕
	var ol_li=document.createElement("li");		//建立<li>標籤
	ol.appendChild(ol_li);						//加入將ol_li加入到<ol>標籤中
	ol_li.id=i+1;						//設定id，主要是方便後面的數字計算
	ol_li.onclick=function(){
   
   
		clearInterval(one);
		pic=this.id;
		ul.style.left = (left_start - (pic-1) * li_width) + "px";	//點選那個li就會跳轉到那張圖片
		change();			//見下文
		one=setInterval(right,3000);	//前面取消了週期時間one，現在又把它開啟，後面也會有這種操作，主要是為了使用方便
	}
}

var pic=1;
var last=document.getElementById(pic);	//定義last變數指向一個li標籤
last.className="now";  //在css中我已經將class為now的樣式設定為特殊設定，是為了突出

function change(){
   
   				//“改變”方法：動態設定當前顯示的圖片所對應按鈕的格式
	last.className=" ";			//清除上一個的格式
	document.getElementById(pic).className="now";	//為當前li新增className（需要css配合使用.now{設定格式}）
	last=document.getElementById(pic);		//更新last
}

ul.style.transition="left 0.5s, right 0.5s";	//為圖片輪播效果加一個transition過渡動畫，當然是為了更好看啦

function left() {
   
   			//向左按鈕
	clearInterval(one);							//先暫停
	if (ul.offsetLeft > left_start - li_width) {
   
   	//考慮到當前圖片已經是第一張，點選left按鈕就跳向最後一張
		ul.style.left = (left_start - (li.length - 1) * li_width) + "px";
		pic=li.length;			//li.length就相當於是最後一張圖片的id了（見前面這隻id部分）
	} else {
   
   
		ul.style.left = (ul.offsetLeft + li_width) + "px";
		pic--;				//向前翻一張，當然就減一了
		// alert(ul.offsetLeft);
	}
	change();			//每次改變是都呼叫change()函式
	one=setInterval(right,3000);				//重新開始週期呼叫
}

function right() {
   
   			//向右按鈕
	clearInterval(one);
	if (ul.offsetLeft < left_start - (li.length - 2) * li_width) {
   
   //考慮到已經是最後一張的情況，跳向第一張
		ul.style.left = (left_start) + "px";
		pic=1;
	} else {
   
   
		ul.style.left = (ul.offsetLeft - li_width) + "px";
		pic++;
		// alert(ul.offsetLeft);
	}
	change();				//呼叫改變函式
	one=setInterval(right,3000);
}