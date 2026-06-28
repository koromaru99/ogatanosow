
jQuery(function($){

    /*  ----------------------------------------------
        ▼▼ SMOOTH SCROLLING script START ▼▼
    ----------------------------------------------  */

        // #で始まるアンカーをクリックした場合に処理
        // 任意のズレ高さピクセル数を入力
        var headerHight = 80;
        // a:not スクロールさせたくないID名を記載
        jQuery('a[href^="#"]' + 'a:not([href *= " "])').click(function() {
            // スクロールの速度
            var speed = 1500; // ミリ秒
            // アンカーの値取得
            var href= jQuery(this).attr("href");
            // 移動先を取得
            var target = jQuery(href == "#" || href == "" ? 'html' : href);
            // 移動先を数値で取得
            var position = target.offset().top-headerHight;// ※　-headerHightでズレの処理
            // スムーススクロール
            jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });

    /*  ----------------------------------------------
        ▲▲ SMOOTH SCROLLING script END ▲▲
    ----------------------------------------------  */



    /*  ----------------------------------------------
        ▼▼ TOGGLE MENU script START ▼▼
    ----------------------------------------------  */

        $('#toggle-menu').click(function () {
            $(this).toggleClass('open');
            $('.g-nav').fadeToggle();
        });

        $(".g-nav li a").click(function () {
            $('#toggle-menu').click();
        });

    /*  ----------------------------------------------
        ▲▲ TOGGLE MENU script END ▲▲
    ----------------------------------------------  */

    /*  ----------------------------------------------
      ▼▼ BTN CV script START ▼▼
    ----------------------------------------------  */

      $(window).scroll(function () {
        var check = $(this).scrollTop();    // checkにスクロール量を代入
        var no = 1200;    // noに1200を代入
        var on = 14500;   // onに18000を代入
        if (check < no) {   //checkが 0px - 1200px 非表示
          $(".btn-cv").slideUp();
        }else if ((check >= no) && (check < on)) {    //checkが 1201px - 16000px 表示
          $(".btn-cv").slideDown();
        }else if(check >= on) {   //checkが 18001px - 非表示
          $(".btn-cv").slideUp();
        }
      });

      /*  ----------------------------------------------
        ▲▲ BTN CV script END ▲▲
      ----------------------------------------------  */

      $('select.select2').change(function() {
        if ($("option[value='個別ガイダンスで詳しい話を聞きたい']").prop("selected")) {
          $('.guidance').addClass('guidance-text');
          $('.guidance-adjacent').css('margin','0 0 10px');
          $('span.small-text.post').removeClass('display');
          $('.tel-text').removeClass('guidance-text');

          } else if ($("option[value='スクールの資料を送ってほしい']").prop("selected")) {
            $('span.small-text.post').addClass('display');
            $('.guidance').removeClass('guidance-text');
            $('.guidance-adjacent').css('margin','0 0 30px');
            $('.tel-text').removeClass('guidance-text');

          } else {
            $('.guidance').removeClass('guidance-text');
            $('.tel-text').addClass('guidance-text');
            $('.guidance-adjacent').css('margin','0 0 10px');
            $('span.small-text.post').removeClass('display');

          }
      });

      //テキストリンクをクリックしたら
       $("#modal-open").click(function(){
            //body内の最後に<div id="modal-bg"></div>を挿入
           $("body").append('<div id="modal-bg"></div>');

          //画面中央を計算する関数を実行
          modalResize();

          //モーダルウィンドウを表示
              $("#modal-bg,#modal-main").fadeIn("slow");

          //画面のどこかをクリックしたらモーダルを閉じる
            $("#modal-bg,#modal-main").click(function(){
                $("#modal-main,#modal-bg").fadeOut("slow",function(){
               //挿入した<div id="modal-bg"></div>を削除
                    $('#modal-bg').remove() ;
               });

              });

          //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
           $(window).resize(modalResize);
            function modalResize(){

                  var w = $(window).width();
                var h = $(window).height();

                  var cw = $("#modal-main").outerWidth();
                 var ch = $("#modal-main").outerHeight();

              //取得した値をcssに追加する
                  $("#modal-main").css({
                      "left": ((w - cw)/2) + "px",
                      "top": ((h - ch)/2) + "px"
                });
           }
         });



  });
