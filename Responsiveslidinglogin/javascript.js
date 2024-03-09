document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("RightToLeft").addEventListener("click", function () {
        document.getElementById("slide").style.marginLeft = "0";
        document.querySelector(".top").style.marginLeft = "100%";
    });

    document.getElementById("LeftToRight").addEventListener("click", function () {
        document.getElementById("slide").style.marginLeft = "50%";
        document.querySelector(".top").style.marginLeft = "0";
    });
});
