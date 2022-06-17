window.onload = function(){


    $("#scrollTop").click(function (){
        console.log("click");
        $("html, body").animate({ scrollTop: 0 }, 1000);});

    var mouseCursor = document.querySelector(".cursor");    
    function myCursor(e){
        mouseCursor.style.left = e.pageX + "px";
        mouseCursor.style.top = e.pageY + "px";
        gsap.to(mouseCursor, { duration: 0.5, left: e.pageX - 15, top: e.pageY - 15 });
        }
        window.addEventListener("mousemove", myCursor);
        
        const clockSet = document.createElement("div");
        clockSet.setAttribute('id', 'clock');    
        var span1 = document.createElement("span");
        span1.setAttribute('id', 'hour');
        var span2 = document.createElement("span");
        span2.setAttribute('id', 'minute');
        var span3 = document.createElement("span");
        span3.setAttribute('id', 'second');
        var span4 = document.createElement("span");
        span4.setAttribute('id', 'clock_center');
}

$(window).scroll(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});

window.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY>200){
            document.getElementById("text1").classList.add("active");
            document.getElementById("text2").classList.add("active");
            document.getElementById("text3").classList.add("active");
            document.getElementById("text4").classList.add("active");
        } else {
            document.getElementById("text1").classList.remove("active");
            document.getElementById("text2").classList.remove("active");
            document.getElementById("text3").classList.remove("active");
            document.getElementById("text4").classList.remove("active");
        }
    }
});
