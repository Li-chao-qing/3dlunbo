window.onload=function(){

var el =document.getElementById('test');//页面中id字符串

console.log(el);


var
els=document.getElementsByClassName('mm'),
data=[
	{translateX:'-500px',translateZ:'-1000px',zIndex:10},
	{translateX:'-200px',translateZ:'-500px',zIndex:20},
	{translateX:'0',translateZ:'0',zIndex:30},
	{translateX:'200px',translateZ:'-500px',zIndex:20},
	{translateX:'500px',translateZ:'-1000px',zIndex:10}
];

var draw=function(){
	for(var i=0;i<els.length;i++){
		els[i].index=i;
		els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
		els[i].style.zIndex=data[i].zIndex;
	
		els[i].onmouseover=function(){
			if(this.style.zIndex==30){
					clearInterval(timeId);
			}
			
		};
		els[i].onmouseout=function(){
			if(this.style.zIndex==30){
				clearInterval(timeId);
				timeId=setInterval(draw,1000);

					
			}
			
		};

		els[i].style.background='url(./images/t'+(i+1)+'.png) no-repeat center center';
		els[i].style.backgroundSize='auto 100%';
	}

	data.unshift(data.pop());
	console.log(data);
};
draw();



var timeId=setInterval(draw,1000);


// xx.style.webkitTransform='translate3d(0,0,0)';
// var data=[{x:-300,z:-400},{x:-200,z:-200},{x:0,z:0},
// {x:200,z:-200},{x:300,z:-400}];
// //利用document.getElementsByClassName得到所有的面
// 写一个函数给所有的面，按照顺序 分别添加数组的样式
// 面有5个 数组也正好有5个数据
// 函数每调用一次，就把数组中的最后一个元素放到数组开头
// 再次调用函数，就会看到面的样式发生变化


};//最后