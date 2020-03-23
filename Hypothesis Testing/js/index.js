// console.log($(".banner-img"));
var num=0;
function fn(num){
	$(".banner-img li").eq(num).fadeIn(200).siblings("li").fadeOut(200);
	$(".dots li").eq(num).addClass("checked").siblings("li").removeClass("checked");
}
$("#left").click(function(){
	num--;
	if(num<0){
		num=$(".banner-img li").length-1
	}
	fn(num)
})
$("#right").click(function(){
	num++;
	if(num>$(".banner-img li").length-1){
		num=0;
	}
	fn(num)
})
$(".dots li").click(function(){	
				num=$(this).index()
				fn(num);
			})