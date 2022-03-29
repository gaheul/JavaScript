$(document).ready(function(){
    $('.notice > div').hide();
    $('.notice > div').eq(0).show();
    

    $('.btns > li').click(function(){
        var tabNumber=$(this).index();
        $('.notice > div').hide();
        $('.notice > div').eq(tabNumber).show();
        

    })
});