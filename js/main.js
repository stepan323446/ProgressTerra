$(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger, .header-nav').toggleClass('active');
        $('html').toggleClass('lock');
    })
    size();
    $(window).resize(function () {
        size();
    });
    function size() {
        var w = $(window).width();
        if (w <= 590) {
            $(".title-section__decoration > img").attr('src', 'img/phone-decoration-mobile.svg');
        }
        else
        {
            $(".title-section__decoration > img").attr('src', 'img/phone-decoration.svg');
        }
    };
});