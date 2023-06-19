$(function(){
    let currentIndex = 0;

    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;

        $(".sliderWrap").animate({marginLeft: -currentIndex * 1200 + "px"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0},0);
                currentIndex = 0;
            }, 600)
        }
    }, 3000)
})