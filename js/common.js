//커서
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
}


document.addEventListener("DOMContentLoaded", function (){
    //패럴랙스
    window.onscroll = function(){
        if(window.scrollY > 10){
            document.getElementById("maintext1").classList.add("active");
            document.getElementById("maintext2").classList.add("active");
        }
        else{
            document.getElementById("maintext1").classList.remove("active");
            document.getElementById("maintext2").classList.remove("active");
        }
        if(window.scrollY > 10){
            document.getElementById("bubble1").classList.add("active");
            document.getElementById("bubble2").classList.add("active");
            document.getElementById("bubble3").classList.add("active");
            document.getElementById("bubble4").classList.add("active");
        }
        else{
            document.getElementById("bubble1").classList.remove("active");
            document.getElementById("bubble2").classList.remove("active");
            document.getElementById("bubble3").classList.remove("active");
            document.getElementById("bubble4").classList.remove("active");
        }
    }

        

    //헤더
    window.onmousemove = function (e) {
        if (e.clientY < 200) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-80px";
        }
    };

    //타이핑
    const content = "우리 상상해 봐요!"
    const text = document.querySelector(".text")
    let index = 0;

    function typing(){
        text.textContent += content[index++];
        if(index > content.length){
            text.textContent = ""
            index = 0;
            sleep(3000);
        }
    }
    setInterval(typing, 200)
    })