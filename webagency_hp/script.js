$(function () {
  var $hum = $('.h_btn'); //.h_btnをjqueryオブジェクトにして変数にいれる
  var $nav = $('nav'); //navをjqueryオブジェクトにして変数に入れる
  var width = window.innerWidth; //画面幅を調べて変数に入れる


  $hum.on('click', function () { //ハンバーガーボタンをクリックしたら
    hum(); //関数humを実行する
  });

  //リサイズしたら.activeを外しつつnavの表示を調整する
  $(window).on('resize', function () { //画面サイズが変わったら
    width = window.innerWidth; //画面幅を調べて変数を上書き
    //console.log(width);//確認

    if (width > 768) { //画面サイズが768pxより大きいときの処理
      if ($hum.hasClass('active')) { //.activeがついていた時の処理
        $hum.removeClass('active'); //.activeを外す
      }
      $nav.show(); //navを表示
    } else{ //画面サイズが768px以下の処理
      if ($hum.hasClass('active')) { //.activeがついていた時の処理
        $hum.removeClass('active'); //.activeを外す
      }
      $nav.hide();
    }
  });

  //768px以下の時にリンクをクリックしたときの処理
  $nav.find('a').on('click', function () {
    if (width <= 768) { //画面サイズが768px以下の処理
      hum(); //関数humを実行
    }
  });

  //自作関数humを定義する
  function hum() {
    //.activeがついているかを調べて
    if ($hum.hasClass('active')) { //.activeがついていた時の処理
      $hum.removeClass('active'); //.activeを外す
      $nav.slideUp(); //navを非表示
    } else { //.activeがついて無い時の処理
      $hum.addClass('active'); //.activeをつける
      $nav.slideDown(); //navを表示
    }
  }
});
