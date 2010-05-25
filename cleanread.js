// alert(location.location.host())
var CleanRead = {};
CleanRead.www_infoq_com = function(){
	$("#rightbar").remove();
	$("#sidebar").remove();
	$("#columns_container").css({padding: "0"});
}

CleanRead.www_zreading_cn = function(){
	$("#header").remove();
	$("#sidebar").remove();
	$("#menuBox").remove(); 
	$("#content").css({width: "auto"});
	$(".entry").css({width: "auto"}); 
}

CleanRead.xueyuan_cyzone_cn = function(){
	$($(".Main_Content").get(0)).remove();
	$(".right").remove(); 
	$("div", $(".left").css({width: "935px"})).css({width: "935px"});
	$(".text").css({width: "910px"});
}

CleanRead.speckyboy_com = function(){
	var $ = jQuery;
	$("#sidebar").remove();
	$("#contentmiddle").css({width: "auto"});
	
}
funcname = location.host.toString().replace(/\./gm, "_");
func = CleanRead[funcname];
// alert(func)
if(func) func();