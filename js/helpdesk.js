$("#nav ul li a[href^='#']").on("click",function(a){a.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},1e3,function(){window.location.hash=e})}),$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,navText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],autoplay:!0,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}});