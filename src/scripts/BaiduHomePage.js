/**
 * Created by huyiqing on 2016/12/1.
 */
$(document).ready(function () {


    /*
    工厂模式格式简单利于理解和java里面的工厂模式是一样的思路
    便于多次利用结构更清晰
     */
    function slide(obj,time){
        var object = {};
        object.up = function(argument){
            $("." + obj).slideUp(time);
        };
        object.down = function(argument){
            $("." + obj).slideDown(time);
        };
        object.command = function(para){
            return new object[para]();
        };
        return object;
    }

    var setSkin = slide("setSkin",1000);
    var setDefault = slide("setDefault",200);
    var range = slide("range",200);
    var opacitySpan = slide("opacitySpan",200);

    $(".changeSkin").on('click',function () {
        setSkin.command('down');
    });

    $(".hide").on('click',function () {
        setSkin.command('up');
    });



    $(".selection").children().on('mouseenter',function () {
        var s = $(this).attr("src");
        $(".preview").css({
            "background": "url("+ s +")",
            "background-size": "250px 180px"
        });
    });

    $(".selection").children().on('click', function () {
        var s = $(this).attr("src");
        var wid = $(window).width();
        var hei = $(window).height();
        $("body").css({
           "background": "url(" + s + ")",
            "background-size": "100% 100%"
        });

        setDefault.command('down');
        range.command('down');
        opacitySpan.command('down');
        $('.slider-input').jRange({
            from: 10,
            to: 100,
            step: 1,
            format: '%s'+'%',
            width: 100,
            showLabels: true,
            showScale: false,
            theme: "theme-blue"
        });
    });

    $(".focus").on('click',function () {
        $(".innerSelections").children().css({
            "background-color":"#fff",
            color:"#000"
        });
        $(".inner").css({
            height: "650px"
        });
        $(".focus").css({
            "background-color": "#999ca1",
            color:"#fff"
        });
        $(".innerTable").children().hide(10);
        $(".innerFocus").slideDown(100);
    });

    $(".innerSelections").children(this).on('click',function () {
        $(".innerSelections").children().css({
            "background-color":"#fff",
            color:"#000"
        });
        $(".focus").css({
            "background-color": "#fff",
            color:"#000"
        });
        $(this).css({
            "background-color": "#999ca1",
            color:"#fff"
        });
    });

    $(".slider-input").on('change',function () {
        var op = $(".slider-input").val() / 100;
        $(".head").css({
            opacity: op
        });
        $(".inner").css({
            opacity: op
        });
    });

    $(".setDefault").on('click',function () {
         var img = "images/white.jpeg";
        $("body").css({
            "background": "url(" + img + ")",
            "background-size": "100% 100%"
        });
        setDefault.command('up');
        range.command('up');
        opacitySpan.command('up');
    });


    /*单例设计模式*/
    var innerTable = {};
    innerTable.hide = function(argument){
        $(".innerTable").children().hide(10);
    };
    innerTable.rec = function(argument){
        $(".innerRec").slideDown(100);
    };
    innerTable.nav = function(argument){
        $(".innerNav").slideDown(100);
    };
    innerTable.video = function(argument){
        $(".innerVideo").slideDown(100);
    };
    innerTable.command = function(para){
        return new innerTable[para]();
    };


    $(".recommend").on('click',function () {
        innerTable.command('hide');
        innerTable.command('rec');
        $(".inner").css({
            height: "400px"
        });
    });

    $(".navigation").on('click',function () {
        innerTable.command('hide');
        innerTable.command('nav');
        $(".inner").css({
           height: "1300px"
        });
    });

    $(".videoI").on('click',function () {
        innerTable.command('hide');
        innerTable.command('video');
        $(".inner").css({
            height: "400px"
        });
    });

    $(".goTop").on('click',function () {
        var speed=100;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });

    $(window).on('scroll',function () {
        var sTop = $(window).scrollTop();
        sTop = parseInt(sTop);
        if (sTop >= 130){
            $(".goTop").show(60);
        } else {
            $(".goTop").hide(60);
        }

        if (sTop >=150){
           $(".In").addClass("floatStyle");
        } else{
            $(".In").removeClass("floatStyle");
        }
    });
});