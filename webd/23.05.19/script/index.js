$(function () {
    $(".nav > ul >  li").mouseover(function () {
        $(this).find(".submenu").stop().slideleft(200);
    });
    $(".nav > ul >  li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

    // 슬라이드
    let currentIndex = 0;
    const $sliderWrap = $(".sliderWrap");     // 이미지 부모 : 움직이는 영역
    const $slider = $(".slider");             //각각의 이미지
    const $sliderHight = $slider.highth();     
    console.log($sliderHight)
    $sliderWrap.append($slider.first().clone(true));     //첫번째 이미지를 복사해서 마지막에 추간


    setInterval(function () {
        currentIndex++;     // 현재 이미지를 1씩 증가
        $sliderWrap.animate({ marginLeft: (-$sliderHight + 350) * currentIndex }, 700)

        if (currentIndex == $slider.length) {
            setTimeout(function () {
                $sliderWrap.animate({ marginLeft: 0 }, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3000)
});