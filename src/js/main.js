const menu_button = document.querySelector('.hamburger');
const mobile_nav_menu = document.querySelector('.mobile_nav_container');

window.onload = function() {
    menu_button.addEventListener('click', function() {
        menu_button.classList.toggle('is_active');
        mobile_nav_menu.classList.toggle('is_active');
    });
    
}

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    const nav_menu = document.querySelector('.nav_container');

    if(!mobile_nav_menu.classList.contains('is_active')){
        if(prevScrollPos > currentScrollPos) {
            nav_menu.style.top = "0"
        } else {
            nav_menu.style.top = "-110px"
        }
    }
      
    prevScrollPos = currentScrollPos;
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}