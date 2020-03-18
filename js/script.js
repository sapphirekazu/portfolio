// PhotoSwipe
initPhotoSwipeFromDOM('.my-gallery');

$(function () {

    $('figcaption').on('click', 'a', function (e) {
        e.stopPropagation();
    });

    $('a[href^="#"]').on('click', function () {
        var speed = 300;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

    //backToTop
    $('#backToTop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });


    var $nav = $('#gnav');
    var offset = $nav.offset();
    var navHeight = $nav.innerHeight();
    $('.section').css('padding-top', navHeight / 2);

    $(window).on('resize', function () {
        var currentWidth = window.innerWidth;
        if (currentWidth == window.innerWidth) {
            //ウインドウ横幅が変わっていないため処理をキャンセル
            return;
        }
        $nav = $('#gnav');
        offset = $nav.offset();
        navHeight = $nav.innerHeight();
        $('.section').css('padding-top', navHeight / 2);
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() >= offset.top) {
            $nav.addClass('fixed');
            $("#contents").css("margin-top", navHeight);
        } else {
            $nav.removeClass('fixed');
            $("#contents").css("margin-top", "0");
        }
    });
});

$('#submit-button').on('click', function (event) {
    event.preventDefault();
    if (confirm('送信しますか？')) {
        //    お問い合わせフォーム送信ボタン押してページ遷移させない
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcruyiaCbQeuOy3saXbfIEdpFDTZ9BqQhht2-lJPRNF5uXUA/formResponse",
            type: "POST",
            dataType: "json",
            data: {
                "entry.698546383": $('#name').val(),
                "entry.2118870447": $('#email').val(),
                "entry.1753307972": $('#msg').val()
            },
            success: function(data) {}
        });
//        alert("OK");
        window.location.href = '/';
    } else {
        
    };


});
