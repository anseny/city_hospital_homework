
// 头部搜索框
$.fn.uisearch = function(){
    var ui = $(this);
    $('.hide',ui).on("click",function(){
        $('.hide1').show();
        return false;
    })
    $('.hide1>div',ui).on("click",function(){
        $('.hide',ui).text($(this).text());
        $('.hide1',ui).hide();
        return false;
    })
    $('body').on('click',function(){
		$('.hide1').hide();
	})
}
// 内容部分切换
$.fn.uichange = function(){
    var ui = $(this);
    var lis = $('.list>li');
    var tabs = $('.tab');
    lis.on('click',function(){
        var index = $(this).index();
        lis.removeClass('focus').eq(index).addClass('focus');
        tabs.hide().eq(index).show();
    })
}
$(function(){
    $('.header_search').uisearch();
    $('.content').uichange();
})