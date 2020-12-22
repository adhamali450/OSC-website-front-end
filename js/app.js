//sticky haeder
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


//horizontal slider
x = 0;
ele_width = document.getElementsByClassName('committee')[0];

////////////////////////////////////////////////////////////
/////////////////  HAMBURGER BUTTON  ///////////////////////
////////////////////////////////////////////////////////////
var ham_menu = document.getElementById('hamburger-nav')
var ham_btn = document.getElementById('btn-hamburger')
var hamburger_dropdown_menu = document.getElementById('commmittees-ham-nav');

ham_btn.addEventListener("click", toggleHamburger)

function toggleHamburger() {
    ham_menu.classList.toggle("show-ham-nav")
    ham_btn.classList.toggle("showClose")
    hamburger_dropdown_menu.style.left = '-100%'
    ham_menu.style.left = '0'
}


////////////////////////////////////////////////////////////
//////////////////  DROPDOWN MENU  /////////////////////////
////////////////////////////////////////////////////////////

//////////////  REGULAR DROPDOWN MENU  /////////////////////
var btn_dropdown = document.getElementById('btn-committees');
var dropdown_menu = document.querySelector('.dropdown');

//in order to change the color or the arrow of the button
function activateBtnDropDown() {
    btn_dropdown.classList.add('active');
    document.getElementById('down-arrow').style.color = '#fff';
    console.log('adham');
}
function deactivateBtnDropDown() {
    btn_dropdown.classList.remove('active');
    console.log('adham');
    document.getElementById('down-arrow').style.color = '#FF8B14';
}

//closes the menu whenever we click outside the menu
window.addEventListener('mouseup', function (event) {
    if ((event.target != dropdown_menu &&
        event.target.parentNode != dropdown_menu) ||
        (event.target == btn_dropdown)) {

        dropdown_menu.classList.remove('dropdown-active');
        deactivateBtnDropDown();
    }
    console.log('adham');

});

//opens the menu when when the button in clicked
btn_dropdown.onclick = function () { toggleDropDown() };

function toggleDropDown() {
    dropdown_menu.classList.add('dropdown-active');
    activateBtnDropDown();
}

/////////////  HAMBURGER DROPDOWN MENU  ///////////////////
var ham_btn_dropdown = document.getElementById('ham-btn-committees');
var btn_back = document.getElementById('btn-back');

ham_btn_dropdown.onclick = function () { toggleHamburgerDropDownOn() };

function toggleHamburgerDropDownOn() {
    ham_menu.style.left = '102%';
    hamburger_dropdown_menu.style.left = '0';
}

btn_back.onclick = function () { toggleHamburgerDropDownOff() };

function toggleHamburgerDropDownOff() {
    ham_menu.style.left = '0';
    hamburger_dropdown_menu.style.left = '-102%';
}