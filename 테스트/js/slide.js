$(function(){
    var current=0;
    var nextId=0;
    var setIntervalId;

    $('.btn > li').click(function(){
        var i =$(this).index();
        $(this).addClass('act');
        move(i);
    })

    $('#main').hover(function(){
        clearInterval(setIntervalId)
    },
    function(){
        timer();
    }
    )

    function timer(){
        setIntervalId=setInterval(function(){
            nextId=nextId+1;
            if(nextId==3){
                nextId=0;
            }
            move(nextId);
            console.log(nextId);

        },3000);

    }
    function move(nextId){
        var currentEl =$('#main > ul > li').eq(current);
        var nextEl = $('#main > ul > li').eq(nextId);
        currentEl.css({left:'0px'}).animate({left:'-100%'});
        nextEl.css({left:'100%'}).animate({left:'0%'});

        current=nextId;
    }

});