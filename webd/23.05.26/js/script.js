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
});