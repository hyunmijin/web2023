$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: -100 * currentIndex + "%"}, 600)

        if(currentIndex ==3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0}, 0);
                currentIndex =0;
            }, 600)
        }

    }, 3000)
})

$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
})

$(function(){
    $(".popup_btn").click(function(){
        $(".popup_view").show();
    })
    $(".popup_close").click(function(){
        $(".popup_view").hide();
    })
})