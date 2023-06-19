$(function(){
    let currentIndex = 0;

    $(".slierWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slierWrap").animate({marginTop: -currentIndex * 300 + "px"}, 600)

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slierWrap").animate({marginTop:0}, 0);
                currentIndex = 0;
            }, 600)
        }

    }, 3000)
})