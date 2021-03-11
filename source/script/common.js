$(document).ready(function(){
    $('.header__icons img, .footer__social img').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
      
        $.get(imgURL, function(data) {
          var $svg = jQuery(data).find('svg');
      
          if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
      
          $svg = $svg.removeAttr('xmlns:a');
      
          $img.replaceWith($svg);
        }, 'xml');
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() != 0) {
            $('.button-up').fadeIn();
        } else {
            $('.button-up').fadeOut();
        }

        if($(this).scrollTop()>140){
            $('.header__black').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('.header__black').removeClass('fixed');
        }
    });

    $('.button-up').click(function(){
        $('body,html').animate({scrollTop:0},800);
    })

    $('.video__wrap video').click(function(event){
        $('.video__wrap').removeClass('paused');

        if($('video').paused){
            $('video').trigger('play');
        } else {
            $('video').trigger('pause');
        }
    });

    $('.header__mobile button').click(function(){
        $('.header__mob-menu').toggleClass('active-menu')
    });

    $('.slider__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true
    });

    $('.photos__big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.photos__small',
        responsive: [
            {
                breakpoint: 828,
                settings: {
                    arrows: true
                }
            }
        ]
    });

    $('.photos__small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.photos__big',
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1012,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 745,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.video-slider__big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.video-slider__small',
        responsive: [
            {
                breakpoint: 828,
                settings: {
                    arrows: true
                }
            }
        ]
    });

    $('.video-slider__small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.video-slider__big',
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1012,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 745,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

