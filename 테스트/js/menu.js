$(document).ready(function(){
    $('.sub_mn').hide();

    $('.main_mn > li').hover(function(){
        // $(this).find('.sub_mn').stop().show().css({opacity:0}).animate({opacity:1},1000);
        $(this).find('.sub_mn').show();
        $(this).children("a").addClass('on');       
        
    },
        function(){
            $('.sub_mn').fadeOut();
            $(this).children("a").removeClass('on'); 
          
            
    }
    )

    $('.sub_mn > li').on({
        mouseover:function(){
            $(this).find('a').addClass('on');
        },
        mouseout:function(){
            $(this).find('a').removeClass('on');
        }
    })
});
