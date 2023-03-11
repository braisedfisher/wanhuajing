window.onload=function () {
    var imgs = document.getElementById("div2").getElementsByTagName("img");
    num=0;
    function fadeIn() {
        imgs[num].className="";//淡出
    }
    function fadeOut() {
        imgs[num].className="img2";//淡入
    }
    function slideshow() {
        fadeIn();
        var id=Math.random();
        num=Math.floor(id*27);
        fadeOut();

    }setInterval(slideshow,12000);
}