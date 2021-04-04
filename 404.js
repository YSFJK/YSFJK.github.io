$(document).ready(function(){
    setTimeout(function(){
        $('.url').text($('.url').text()+location.href);
    },1000);
    setTimeout(function(){
       window.location.href = "index.html";
    },11200);
});