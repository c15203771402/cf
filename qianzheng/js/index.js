$(".bgc").mouseover(function(){
	var that=$(this).index()
	$(".bgc").removeClass("sky")
	$(".bgc").eq(that).addClass("sky");
})
$(".bgc").mouseout(function(){
	var that=$(this).index();
	$(".bgc").eq(that).removeClass("sky");
})


$(window).scroll(function(){
	var oscrollTop=$(window).scrollTop();
	if(oscrollTop>oscrollTop/2){
		$("#iconfont").fadeIn(200);
		$("#iconfontone").fadeOut(200);
	}else if(oscrollTop==0){
		$("#iconfontone").fadeIn(200);
		$("#iconfont").fadeOut(200);
	}
})
// console.log($(".goTop"));
$(".goTop").click(function(){
	$("body,html").animate({
		"scrollTop":0
	},300)
})
// $("#list").mouseover(function(){
// 	$("#hover").fadeOut(200)
// })
// var options = {
// 		useEasing: true, //开启一个过渡动画
// 		useGrouping: true, //开启千位分割
// 		separator: ',',  //定义千位分隔符
// 		decimal: '.',    //小数点分割
//  }; 
//   var arr=new Array(
//  		    	new CountUp('item1', 0, 50000, 0, 3, options),
//  		    	new CountUp('item2', 0, 98.808, 2, 3, options),
//  		    	new CountUp('item3', 0, 20000, 0, 3, options)
//  		    )
//  		    var fn=function(){
//  		    	$(".item").each(function(){
//  		    		var index=$(this).index('.item')
//  		    		arr[index].start()
//  		    	})
//  		    }
//  		    fn()
// $(".godown").click(function(){
// 	$(".media").get(0).top=600;
// })
var media=document.getElementsByClassName("media")[0];
var godown=document.getElementsByClassName("godown")[0];
console.log(godown);
var num=0
godown.onclick=function(){
	if(num==0){
	media.style.bottom="-380px";
	num=1
}else if(num==1){
		media.style.bottom="0px";
		num=0
}
}
$(window).scroll(function(){
	if($(window).scrollTop()>0){
		$(".nofixed").css("position", "fixed")
	}else if($(window).scrollTop()==0){
		$(".nofixed").css("position", "static")
	}
	
})




