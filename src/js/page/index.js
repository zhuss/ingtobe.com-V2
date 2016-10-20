require("../../css/lib/reset.css");
require("../../css/page/index.less");

$(function() {
	//图片晃动
	var phoneLeft = document.getElementById("phone_left"),
		phoneRight = document.getElementById("phone_right");
	if(window.DeviceOrientationEvent) {
		//监听deviceorientation事件
		window.addEventListener('deviceorientation', function(event) {
			var alpha = event.alpha,
				beta = event.beta,
				gamma = event.gamma,
				option = .5;

			phoneLeft.style.top = 152 + parseInt(event.beta * option) + "px";
			phoneLeft.style.left = -141 + parseInt(event.gamma * option) + "px";

			phoneRight.style.top = 25 + parseInt(event.beta * option * 2) + "px";
			phoneRight.style.right = -200 - parseInt(event.gamma * option * 2) + "px";
		}, false);
	} else {
		alert("您的浏览器不支持DeviceOrientation");
	}

	//tab切换
	var tabTitle = $(".tab_title li");
	var tabContent = $(".tab_content");

	tabTitle.on("click", function() {
		console.log($(this).index());
		$(this).addClass("active_title").siblings().removeClass("active_title");
		tabContent.eq($(this).index()).addClass("active_content").siblings().removeClass("active_content");
	})
})