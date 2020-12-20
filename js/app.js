window.onscroll = function () { stick_header() };

var header = document.getElementById("myHeader")
var main = document.getElementById("myMain")

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky"
// when you leave the scroll position
function stick_header() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.style.background = "rgba(255, 255, 255, 0.95)";
        main.style.paddingTop = "100px";
    } else {
        header.classList.remove("sticky");
        main.style.paddingTop = 0;
        header.style.background = "rgba(255, 255, 255, 0)";
    }
}


x = 0;
ele_width = document.getElementsByClassName('committee')[0];

function Move_Menu_left() {
    if (x < 0) {
        x += 1;
        var mar_left = (x * (window.screen.width));
        document.getElementById('committees-contaiener').style.left = mar_left;
    }
    else {
        console.log('cant move left');
    }
}

function Move_Menu_right() {
    num = 14
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        num = 15
    }
    if (x == 0 || ((x - 1) * window.screen.width - 100) > -(ele_width.offsetWidth * num)) {
        x -= 1;
        var mar_right = (x * (window.screen.width - 100));
        document.getElementById('committees-contaiener').style.left = mar_right;

    }

}