const change = document.querySelector(".change");
function changeColor() {
    if (change.style.background === "crimson"){
        change.style.background = "white";
        change.style.boxshadow = "0 0 10px 0 red";
    } else {
        change.style.background = "crimson";
        change.style.boxshadow = "0 0 10px 0 red";
    }
}
const tocBtn = document.getElementById ("tocBtn");
const toc = document.getElementById ("toc");
    tocBtn.addEventListener("click", function(){
        document.getElementById("toc").style.position = "fixed";
        document.getElementById("toc").style.bottom = "0";
        
            if (toc.style.display === "block" ){
                toc.style.display = "none";
            } else {
                toc.style.display = "block"
            }
    });
