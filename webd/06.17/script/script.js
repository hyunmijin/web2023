$(function(){
    let currentIndex = 0;

    $(".slider_wrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".slider_wrap").animate({marginTop: -currentIndex * 300 + "px"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slider_wrap").animate({marginTop:0}, 0)
                currentIndex = 0;
            }, 600)
        }
    }, 3000)
})

// $(function(){
//     $(".nav > ul > li").mouseover(function(){
//         $(this).find(".submenu").stop().slideDown();
//     });
//     $(".nav >ul > li").mouseout(function(){
//         $(this).find(".submenu").stop().slideUp();
//     })
// })

$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().slideUp(200);
    });
    
})