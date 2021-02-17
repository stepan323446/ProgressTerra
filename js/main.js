$(function()
{
    $('.header__burger').click(function(e)
    {
        $('.header__burger, .header-nav').toggleClass('active');
        $('html').toggleClass('lock');
    })
});