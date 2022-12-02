
$('.mainSlider').on('init afterChange', function (event, slick, currentSlide) {
    var current = $('.mainSlider .slick-current');
    current.addClass('on').siblings().removeClass('on');
})
// 슬라이드에 클래스를 주는 방법
$('.mainSlider').slick({
    dots: true,
});


$('.productSlider').on('init afterChange', function (event, slick, currentSlide) {
    var current = $('.productSlider .slick-current');
    current.addClass('on').siblings().removeClass('on');
})

$('.productSlider').slick({
    dots: true,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '100px',
});
// 슬라이드 중, 가운데 이미지를 키우는 유형


$('.leftSlider').slick({
    asNavFor: '.rightSlider, .slogan',
    dots: true,
    autoPlay: true,
    fade: true,
});
$('.rightSlider').slick({
    asNavFor: '.leftSlider, .slogan',
    slidesToShow: 3,
    focusOnSelect: true
});
$('.slogan').slick({
    asNavFor: '.leftSlider, .rightSlider',
    // 연결했으면 하는 슬라이드를 모두 입력하면 연결된다
    vertical: true,
    arrows: false,
});
// 슬라이드 여러개를 연결하는 유형