$(document).ready(function(){
    $('.popup').click(function(e){
        preventDafault();

        $('.banner').prepend('<div class="win"><a href="#" class="close>창닫기</a></div>')
    });
    $('.close').click(function(e){
        $('.win').remove();
    })
})