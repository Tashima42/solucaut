//Aparecer botão "voltar ao topo"
window.onscroll = function(){
    scroll();
}

function scroll(){
    let btn = document.getElementById("btnGoToTop");
    let nav = document.getElementById("navbar");
    if(document.documentElement.scrollTop > 50){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}
function backToTop(){
    document.documentElement.scrollTop = 0;
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
    var checkBox = document.getElementById("check");
    if(checkBox.checked == true){
        document.getElementById("allContentSite").style.display = "none";
    }
    else{
        document.getElementById("allContentSite").style.display = "block";
    }
}