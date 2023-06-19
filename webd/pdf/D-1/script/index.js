$(function(){
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex +1) %3;

        setTimeout(function(){
            $(".slider").eq(currentIndex).fadeOut();
            $(".slider").eq(nextIndex).fadeIn();
            currentIndex=nextIndex;
        }, 600)
    }, 3000)
})
$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find(".sub_menu").stop().slideDown();
    })
    $(".nav>ul>li").mouseout(function(){
        $(this).find(".sub_menu").stop().slideUp();
    })
})

$(function(){
    let tabBtn=$("#tab_btn >ul >li");
    let tabCont=$("#tab_cont>div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    })

})

$(function(){
    $(".popup_btn").click(function(){
        $(".popup_view").show();
    })
    $(".popup_colse").click(function(){
        $(".popup_view").hide();
    })
})