webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(2);
	__webpack_require__(12);

	$(function() {

		//tab切换
		var tabTitle = $(".tab_title li");
		var tabContent = $(".tab_content");

		tabTitle.on("click", function() {
			$(this).addClass("active_title").siblings().removeClass("active_title");
			tabContent.eq($(this).index()).addClass("active_content").siblings().removeClass("active_content");
		})
	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 12:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});