(function($){$.fn.equalHeights=function(minHeight,maxHeight){tallest=(minHeight)?minHeight:0;this.each(function(){if($(this).height()>tallest){tallest=$(this).height()}});if((maxHeight)&&tallest>maxHeight)tallest=maxHeight;return this.each(function(){$(this).height(tallest)})}})(jQuery)
$(window).load(function(){
	if($(".maxheight").length){
	$(".maxheight").equalHeights()}
})

$(window).load(function(){
	if($(".maxheight2").length){
	$(".maxheight2").equalHeights()}
})
/*
     FILE ARCHIVED ON 11:53:04 Jan 25, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:20:08 Jun 30, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/