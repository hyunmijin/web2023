$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").slideDown();
    })
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").slideUp();
    })
})

$(function(){
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex +1) % 3;

        setTimeout(function(){
            $(".slider").eq(currentIndex).fadeOut();
            $(".slider").eq(nextIndex).fadeIn();
            currentIndex=nextIndex;
        }, 600)
    }, 3000)
})

$(function(){
    let tabBtn = $(".tab-btn > ul >li");
    let tabCont = $(".tab-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    })
})