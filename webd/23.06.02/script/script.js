$(function(){

    //이미지 슬라이드
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));   //이미지4장

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginTop: -400 * currentIndex + "px"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0}, 0);
                currentIndex = 0;
            }, 700);
        }
        
    }, 3000)

    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > ul");
    tabCont.hide().eq(0).show();

    tabBtn.on("click", function () {
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });

    $(".nav > ul > li").mouseover(function(){        
        $(".nav > ul > li > ul").stop().fadeIn();  
        $(".main").addClass("on");
        $(".nav > ul > li > ul > li a").css("display", "block");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut();
        $(".main").removeClass("on");  
    });

    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});