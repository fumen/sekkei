var sideBar = document.getElementById('sideBar');
var closeBtn = document.getElementById('closeBtn');
var openBtn = document.getElementById('openBtn');
var contentHolder = document.getElementById('contentHolder');

var navBar = document.getElementById('navBar');
window.onresize = function () {
    var height = navBar.offsetHeight;
    console.log(height);
    contentHolder.style.paddingTop = height + "px";
};

window.onload = function () {
    var height = navBar.offsetHeight;
    contentHolder.style.paddingTop = height + "px";
};

openBtn.onclick = function () {
    sideBar.style.display = "block";
};

closeBtn.onclick = function () {
    sideBar.style.display = "none";
};

$(document).ready(function () {
    $('.flowy').slick({ variableWidth: true });
});