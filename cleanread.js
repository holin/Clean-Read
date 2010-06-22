// alert(location.location.host())
var CleanRead = {};

CleanRead["www.infoq.com"] = function($){
	$("#rightbar").remove();
	$("#sidebar").remove();
	$("#columns_container").css({padding: "0"});
}

CleanRead["www.zreading.cn"] = function($){
	$("#header").remove();
	$("#sidebar").remove();
	$("#menuBox").remove(); 
	$("#content").css({width: "auto"});
	$(".entry").css({width: "auto"}); 
}

CleanRead["*.cyzone.cn"] = function($){
	$($(".Main_Content").get(0)).remove();
	$(".right").remove(); 
	$("div", $(".left").css({width: "935px"})).css({width: "935px"});
	$(".content div").css({width: "910px"}); 
} 

CleanRead["speckyboy.com"] = function($){ 
	$("#sidebar").remove();
	$("#contentmiddle").css({width: "auto"});	
}

CleanRead["architects.dzone.com"] = function($){ 
	$("#header").remove();
	$(".sidebar").remove();
	$("#squeeze").css({margin: "0"});	
}

CleanRead["www.railsinside.com"] = function($){  
	$("#sidebar").remove();
	$("#content").css({width: "auto"});	
} 

CleanRead["*.pcauto.com.cn"] = function($){
	$(".mainNav").remove();
	$("#header").remove();
	$(".ivy990x90").remove();
	$(".guide").remove();
	$(".subMark").remove();
	$("#sideMain").remove();
	$("#artExt").remove();
	$("#sideExt").remove();
	$("#footer").remove(); 
	$(".left650").css({width: "950px"});	
	$("#artText").css({width: "auto"});
} 

CleanRead["www.techweb.com.cn"] = function($){
	$(".partA").remove();
	$(".xxbox_news").remove();
	$("#right").remove();
	$("#main").css({background: "transparent"});
	$("#left div").css({width: "950px", background: "transparent"});
}

CleanRead["news.iresearch.cn"] = function($){
	$(".header").remove();
	$(".c_160").remove();
	$(".m_x_0").remove();
	$(".c_800").css({width: "auto"});
	$(".b_caption").css({width: "auto"});
	$(".b_content").css({width: "auto", background: "transparent"});
	
}

CleanRead["sheddingbikes.com"] = function($){
	$("#sidebar").remove(); 
 	$("#feed-entry").css({width: "900px"});	
}




CleanRead.broad_funcname = location.host.replace(/^\w+\./gm, "*.");
CleanRead.exact_funcname = location.host;

CleanRead.func = CleanRead[CleanRead.exact_funcname] || CleanRead[CleanRead.broad_funcname];

if(CleanRead.func) CleanRead.func(jQuery);
