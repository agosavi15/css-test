$(window).on('load', function () {
    $('#section-loading').fadeOut();
});

$(document).ready(function () {

    AOS.init();

    //Banner Carousel
    $('.bannerCarousel').owlCarousel({
        loop: true,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
          ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //Banner Carousel

    //Banner Carousel
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //Banner Carousel

    $('#search-button').on('click', function (e) {
        if ($('#search-input-container').hasClass('hdn')) {
            e.preventDefault();
            $('#search-input-container').removeClass('hdn')
            return false;
        }
    });

    $('#hide-search-input-container').on('click', function (e) {
        e.preventDefault();
        $('#search-input-container').addClass('hdn')
        return false;
    });

});
