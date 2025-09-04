var ImgBox = document.querySelector('.img-box');
var ImgWrap = document.querySelector('.img-wrap');  
var line = document.getElementById("line");

originlImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace=ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    var x = (e.pageX - leftSpace)+ "px";
    ImgWrap.style.width = boxWidth;
    ImgWrap.style.left = boxWidth;
};

