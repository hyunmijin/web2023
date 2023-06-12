$(document).ready(function () {
    const box1 = $("#section1 .title .img_title");
    const box2 = $("#section1 .title .img_desc");
    const box3 = $("#section1 .title button");
    const box4 = $(".site__nav > div");
    const box5 = $(".main .title");
    const box6 = $(".section2 #section1 .title .img_title");
    const box7 = $(".section2 #section1 .title .img_desc");
    const box8 = $(".section2 #section1 .title button");
    const box9 = $(".section3 .title");
    const box10 = $(".section3 .img1");
    const box11 = $(".section3 .img2");
    const box12 = $(".section3 .img3");

    // 새로고침시 나타나기
    box4.css({
        opacity: 1,
        transform: 'translateY(0)',
    });
    box5.css({
        opacity: 1,
        transform: 'translateY(0)',
    });

    $(window).scroll(function () {
        // 스크롤 값과 각 박스의 위치를 비교하여 애니메이션 효과 적용
        const scrollTop = $(this).scrollTop();
        const windowHeight = $(window).height();

        if (scrollTop + windowHeight > box1.offset().top) {
            box1.css({
                opacity: 1,
                transform: 'translateY(0)',
            });
        }

        if (scrollTop + windowHeight > box2.offset().top) {
            box2.css({
                opacity: 1,
                transform: 'translateY(0)',
            });
        }

        if (scrollTop + windowHeight > box3.offset().top) {
            box3.css({
                opacity: 1,
                transform: 'translateY(0)',
            });
        }

        if (scrollTop > box6.offset().top - windowHeight) {
            box6.css({
                opacity: 1,
                transform: 'translateY(0)',
            });
        } else {
            box6.css({
                opacity: 0,
                transform: 'translateY(10px)',
            });
        }

        if (scrollTop > box7.offset().top - windowHeight) {
            box7.css({
                opacity: 1,
                transform: 'translateY(0)',
            });
        } else {
            box7.css({
                opacity: 0,
                transform: 'translateY(10px)',
            });
        }

        if (scrollTop > box8.offset().top - windowHeight) {
            box8.css({
                opacity: 1,
                transform: 'translateY(0)',
            });
        } else {
            box8.css({
                opacity: 0,
                transform: 'translateY(10px)',
            });
        }

        if (scrollTop > box9.offset().top - windowHeight) {
            box9.css({
                opacity: 1,
                transform: 'translateY(0)',
            });
        } else {
            box9.css({
                opacity: 0,
                transform: 'translateY(10px)',
            });
        }

        if (scrollTop + windowHeight > box10.offset().top+100) {
            box10.addClass('expanded');
          } else {
            box10.removeClass('expanded');
          }

        if (scrollTop + windowHeight > box11.offset().top) {
            box11.addClass('expanded');
          } else {
            box11.removeClass('expanded');
          }

          if (scrollTop + windowHeight > box12.offset().top+100) {
            box12.addClass('expanded');
          } else {
            box12.removeClass('expanded');
          }
        
    });
});

$(function(){
    var hoverTimeout;
    
    $(".site__nav .nav1 > ul > li").mouseenter(function(){
        clearTimeout(hoverTimeout);
        $(this).find(".submenu").show();
    });
    
    $(".site__nav .nav1 > ul > li").mouseleave(function(){
        var submenu = $(this).find(".submenu");
        hoverTimeout = setTimeout(function() {
            submenu.hide();
        }, 300); // 200ms 지연 시간 설정
    });
});



$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop === 0) {
        $('.site__nav').addClass('show');
    } else {
        $('.site__nav').removeClass('show');
    }
});

$(document).ready(function () {
    $('button').hover(
        function () {
            $(this).animate({ backgroundColor: '#fff' }, 500);
        },
        function () {
            $(this).animate({ backgroundColor: '#000' }, 500);
        }
    );
});









