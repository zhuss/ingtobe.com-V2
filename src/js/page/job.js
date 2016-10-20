require("../../css/lib/reset.css");
require("../../css/page/job.less");

$(function() {

	//tab切换
	var tabTitle = $(".tab_title li");
	var tabContent = $(".tab_content");

	tabTitle.on("click", function() {
		$(this).addClass("active_title").siblings().removeClass("active_title");
		tabContent.eq($(this).index()).addClass("active_content").siblings().removeClass("active_content");
	})
})