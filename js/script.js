$(".btns>li").click(function(){
    $(this).addClass("on")
    $(this).siblings().removeClass("on")

    let a=$(this).attr('data-filter');
    $('.content').isotope({filter:a})


})

$(".fancybox").fancybox()



$(".content").isotope()