// alert(location.location.host())
var CleanRead = {};

CleanRead.www_infoq_com = function($){
	$("#rightbar").remove();
	$("#sidebar").remove();
	$("#columns_container").css({padding: "0"});
}

CleanRead.www_zreading_cn = function($){
	$("#header").remove();
	$("#sidebar").remove();
	$("#menuBox").remove(); 
	$("#content").css({width: "auto"});
	$(".entry").css({width: "auto"}); 
}

CleanRead.xueyuan_cyzone_cn = function($){
	$($(".Main_Content").get(0)).remove();
	$(".right").remove(); 
	$("div", $(".left").css({width: "935px"})).css({width: "935px"});
	$(".content div").css({width: "910px"}); 
}

CleanRead.news_cyzone_cn = CleanRead.xueyuan_cyzone_cn;

CleanRead.speckyboy_com = function($){ 
	$("#sidebar").remove();
	$("#contentmiddle").css({width: "auto"});	
}

CleanRead.architects_dzone_com = function($){ 
	$("#header").remove();
	$(".sidebar").remove();
	$("#squeeze").css({margin: "0"});	
}

CleanRead.www_railsinside_com = function($){  
	$("#sidebar").remove();
	$("#content").css({width: "auto"});	
} 

CleanRead.roadtest_pcauto_com_cn = function($){
	$(".mainNav").remove();
	$("#header").remove();
	$(".ivy990x90").remove();
	$(".guide").remove();
	$(".subMark").remove();
	$("#sideMain").remove();
	$("#artExt").remove();
	$("#sideExt").remove();
	$("#footer").remove();
	
	$("#artMain").css({width: "auto"});	
}

CleanRead.www_pcauto_com_cn = function($){
	$(".mainNav").remove();
	$("#header").remove();
	$(".ivy990x90").remove();
	$(".guide").remove();
	$(".subMark").remove();
	$("#sideMain").remove();
	$("#artExt").remove();
	$("#sideExt").remove();
	$("#footer").remove();
	
	$("#artMain").css({width: "auto"});	
}  

CleanRead.funcname = location.host.toString().replace(/\./gm, "_");
CleanRead.func = CleanRead[CleanRead.funcname];
if(CleanRead.func) {
	CleanRead.func(jQuery);
}