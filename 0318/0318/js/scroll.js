$(document).ready(function(){
    var menu = $('ul.mn > li');
    var contents = $('#contents > div');

    menu.click(function(){
        var tg=$(this);
        var i=tg.index();

        var section = contents.eq(i);
        var tt=section.offset().top;

        $('html,body').stop().animate({scrollTop:tt});

        // menu.removeClass('on'); //무조건 다지운다
        // tg.addClass('on'); //선택된 것에 on적용              

    });

    $(window).scroll(function(){
        var sct = $(window).scrollTop(); //현재 화면의 스크롤을 sct변수에 대입
        $('.q_mn').stop().animate({top:(sct+200)+"px"},500);

        contents.each(function(){ //contents 아래에 있는 div를 순서대로 처리
            var tg = $(this) //현재 each문에 의해서 실행하는 contents의 div
            var i =tg.index();  

            if(tg.offset().top <= sct){ //현재 each문에 의해서 실행하는 contents의 div와 현재화면의 scrolltop값을 비교 ,같거나 클경우
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }

        });
    });
});