// 読み込み時に画面内に入っていたら要素の順番にアニメーション表示
$(function () {
    var Position = $(window).height() + $(window).scrollTop();//ウィンドウの高さ + スクロール量 を取得
    $('.scrollup').each(function (i) {
        if (Position > $(this).offset().top) {
            $(this).delay(60 * i).queue(function () {
                $(this).addClass("on");
            });
        }
    });
});
// スクロールして画面内にきたらclass付与
$(window).scroll(function () {
    var scrollPosition = $(window).height() + $(window).scrollTop();//ウィンドウの高さ + スクロール量 を取得
    $('.scrollup').each(function () {
        if (scrollPosition - 100 > $(this).offset().top) {
            $(this).addClass("on");
        }
    });
});
