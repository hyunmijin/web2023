document.addEventListener("DOMContentLoaded", function() {
    const box1 = document.querySelectorAll("#section1 .title .img_title");
    const box2 = document.querySelectorAll("#section1 .title .img_desc");
    const box3 = document.querySelectorAll("#section1 .title button");
    const box4 = document.querySelector(".site__nav > div");
    const box5 = document.querySelector(".main .title");
    const box6 = document.querySelectorAll(".section2 #section1 .title .img_title");
    const box7 = document.querySelectorAll(".section2 #section1 .title .img_desc");
    const box8 = document.querySelectorAll(".section2 #section1 .title button");
    const box9 = document.querySelector(".section3 .title");
    const box10 = document.querySelector(".section3 .img1");
    const box11 = document.querySelector(".section3 .img2");
    const box12 = document.querySelector(".section3 .img3");

    // 새로고침시 나타나기
    box4.style.opacity = 1;
    box4.style.transform = 'translateY(0)';
    box5.style.opacity = 1;
    box5.style.transform = 'translateY(0)';

    window.addEventListener("scroll", function() {
        // 스크롤 값과 각 박스의 위치를 비교하여 애니메이션 효과 적용
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        box1.forEach(function(element) {
            if (scrollTop + windowHeight > element.offsetTop) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
        
        box2.forEach(function(element) {
            if (scrollTop + windowHeight > element.offsetTop) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });

        box3.forEach(function(element) {
            if (scrollTop + windowHeight > element.offsetTop) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });

        box6.forEach(function(element) {
            if (scrollTop + windowHeight > element.offsetTop) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });

        box7.forEach(function(element) {
            if (scrollTop + windowHeight > element.offsetTop) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });

        box8.forEach(function(element) {
            if (scrollTop + windowHeight > element.offsetTop) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });

        if (scrollTop > box9.offsetTop - windowHeight) {
            box9.style.opacity = 1;
            box9.style.transform = 'translateY(0)';
        } else {
            box9.style.opacity = 0;
            box9.style.transform = 'translateY(10px)';
        }

        if (scrollTop + windowHeight > box10.offsetTop + 400) {
            box10.classList.add('expanded');
        } else {
            box10.classList.remove('expanded');
        }
        

        if (scrollTop + windowHeight > box11.offsetTop) {
            box11.classList.add('expanded');
        } else {
            box11.classList.remove('expanded');
        }

        if (scrollTop + windowHeight > box12.offsetTop + 100) {
            box12.classList.add('expanded');
        } else {
            box12.classList.remove('expanded');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var hoverTimeout;

    var navItems = document.querySelectorAll(".site__nav .nav1 > ul > li");

    navItems.forEach(function(navItem) {
        navItem.addEventListener("mouseenter", function() {
            clearTimeout(hoverTimeout);
            var submenu = this.querySelector(".submenu");
            submenu.style.display = "block";
        });

        navItem.addEventListener("mouseleave", function() {
            var submenu = this.querySelector(".submenu");
            hoverTimeout = setTimeout(function() {
                submenu.style.display = "none";
            }, 300); // 300ms의 지연 시간 설정
        });
    });
});

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var siteNav = document.querySelector(".site__nav");

    if (scrollTop === 0) {
        siteNav.classList.add("show");
    } else {
        siteNav.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#ccc";
        });

        button.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "#000";
        });
    });
});




// 

// $(document).ready(function () {
//     const box1 = $("#section1 .title .img_title");
//     const box2 = $("#section1 .title .img_desc");
//     const box3 = $("#section1 .title button");
//     const box4 = $(".site__nav > div");
//     const box5 = $(".main .title");
//     const box6 = $(".section2 #section1 .title .img_title");
//     const box7 = $(".section2 #section1 .title .img_desc");
//     const box8 = $(".section2 #section1 .title button");
//     const box9 = $(".section3 .title");
//     const box10 = $(".section3 .img1");
//     const box11 = $(".section3 .img2");
//     const box12 = $(".section3 .img3");

//     // 새로고침시 나타나기
//     box4.css({
//         opacity: 1,
//         transform: 'translateY(0)',
//     });
//     box5.css({
//         opacity: 1,
//         transform: 'translateY(0)',
//     });

//     $(window).scroll(function () {
//         // 스크롤 값과 각 박스의 위치를 비교하여 애니메이션 효과 적용
//         const scrollTop = $(this).scrollTop();
//         const windowHeight = $(window).height();

//         if (scrollTop + windowHeight > box1.offset().top) {
//             box1.css({
//                 opacity: 1,
//                 transform: 'translateY(0)',
//             });
//         }

//         if (scrollTop + windowHeight > box2.offset().top) {
//             box2.css({
//                 opacity: 1,
//                 transform: 'translateY(0)',
//             });
//         }

//         if (scrollTop + windowHeight > box3.offset().top) {
//             box3.css({
//                 opacity: 1,
//                 transform: 'translateY(0)',
//             });
//         }

//         if (scrollTop > box6.offset().top - windowHeight) {
//             box6.css({
//                 opacity: 1,
//                 transform: 'translateY(0)',
//             });
//         } else {
//             box6.css({
//                 opacity: 0,
//                 transform: 'translateY(10px)',
//             });
//         }

//         if (scrollTop > box7.offset().top - windowHeight) {
//             box7.css({
//                 opacity: 1,
//                 transform: 'translateY(0)',
//             });
//         } else {
//             box7.css({
//                 opacity: 0,
//                 transform: 'translateY(10px)',
//             });
//         }

//         if (scrollTop > box8.offset().top - windowHeight) {
//             box8.css({
//                 opacity: 1,
//                 transform: 'translateY(0)',
//             });
//         } else {
//             box8.css({
//                 opacity: 0,
//                 transform: 'translateY(10px)',
//             });
//         }

//         if (scrollTop > box9.offset().top - windowHeight) {
//             box9.css({
//                 opacity: 1,
//                 transform: 'translateY(0)',
//             });
//         } else {
//             box9.css({
//                 opacity: 0,
//                 transform: 'translateY(10px)',
//             });
//         }

//         if (scrollTop + windowHeight > box10.offset().top+100) {
//             box10.addClass('expanded');
//           } else {
//             box10.removeClass('expanded');
//           }

//         if (scrollTop + windowHeight > box11.offset().top) {
//             box11.addClass('expanded');
//           } else {
//             box11.removeClass('expanded');
//           }

//           if (scrollTop + windowHeight > box12.offset().top+100) {
//             box12.addClass('expanded');
//           } else {
//             box12.removeClass('expanded');
//           }
        
//     });
// });

// $(function(){
//     var hoverTimeout;
    
//     $(".site__nav .nav1 > ul > li").mouseenter(function(){
//         clearTimeout(hoverTimeout);
//         $(this).find(".submenu").show();
//     });
    
//     $(".site__nav .nav1 > ul > li").mouseleave(function(){
//         var submenu = $(this).find(".submenu");
//         hoverTimeout = setTimeout(function() {
//             submenu.hide();
//         }, 300); // 200ms 지연 시간 설정
//     });
// });



// $(window).on('scroll', function () {
//     var scrollTop = $(window).scrollTop();

//     if (scrollTop === 0) {
//         $('.site__nav').addClass('show');
//     } else {
//         $('.site__nav').removeClass('show');
//     }
// });

// $(document).ready(function () {
//     $('button').hover(
//         function () {
//             $(this).animate({ backgroundColor: '#fff' }, 500);
//         },
//         function () {
//             $(this).animate({ backgroundColor: '#000' }, 500);
//         }
//     );
// });
