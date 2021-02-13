var projPath = "http://127.0.0.1:8080/phy";

function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); return null; 
}

$(function(){
    $(".disabled").attr("disabled","disabled");
})