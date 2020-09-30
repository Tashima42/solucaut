//Aparecer botão "voltar ao topo"
window.onscroll = function(){
    scroll();
}

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

function scroll(){
    let btn = document.getElementById("btnGoToTop");
    let nav = document.getElementById("navbar");
    let btn2 = document.getElementById("btnShowMenu");
    var largura = window.innerWidth;
    if(document.documentElement.scrollTop > 50){
        btn.style.display = "block";
        if(largura <= 1250){
            btn2.style.display = "block";
        }
    }
    else{
        btn.style.display = "none";
        btn2.style.display = "none";
    }
}
function backToTop(){
    document.documentElement.scrollTop = 0;
}
function showMenu(){
    var checkBox = document.getElementById("check");
    var linksNavbar = document.getElementById("linksNavbar");
    var navLinks = document.getElementById("navLinks");
    var btnCloseMenu = document.getElementById("btnCloseMenu");

    linksNavbar.style.top = '-3vh';
    linksNavbar.style.height = '110vh';
    navLinks.style.margin = '7vh';
    btnCloseMenu.style.display = "block";
    btnCloseMenu.style.transition = '.9s';
    checkBox.checked = true;
}
function closeMenu(){
    var checkBox = document.getElementById("check");
    var btnCloseMenu = document.getElementById("btnCloseMenu");
    var linksNavbar = document.getElementById("linksNavbar");
    var navLinks = document.getElementById("navLinks");

    linksNavbar.style.top = '13vh';
    linksNavbar.style.height = '100vh';
    navLinks.style.margin = '0';
    btnCloseMenu.style.display = "none";
    checkBox.checked = false;
}


//Aparecer navbar
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
});


//Animação do conteúdo
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeOnScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/3.4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }
        else{
            element.classList.remove(animationClass);
        }
    })
}

animeOnScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeOnScroll();
    }, 50));//tempopara a animação ocorrer
}

function deleteContent(){
    document.getElementById("allContentSite").style.display = "none";
}

function returnContent(){
    document.getElementById("allContentSite").style.display = "block";
}

window.addEventListener('resize', function () {
    var largura = window.innerWidth;
    var checkBox = document.getElementById("check");

    if (largura > 1250){
        document.getElementById("allContentSite").style.display = "block";
        checkBox.checked = false;
    }
});

$("#item1").click(function (){
    var checkBox = document.getElementById("check");
    checkBox.checked = false;
    document.getElementById("allContentSite").style.display = "block";
});
$("#item2").click(function (){
    var checkBox = document.getElementById("check");
    checkBox.checked = false;
    document.getElementById("allContentSite").style.display = "block";
});
$("#item3").click(function (){
    var checkBox = document.getElementById("check");
    checkBox.checked = false;
    document.getElementById("allContentSite").style.display = "block";
});
$("#item4").click(function (){
    var checkBox = document.getElementById("check");
    checkBox.checked = false;
    document.getElementById("allContentSite").style.display = "block";
});