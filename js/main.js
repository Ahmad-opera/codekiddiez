function hamburgerToggle(){
    var hamburger = document.querySelector('.hamburger');
    var navlist = document.querySelector('nav');
    hamburger.classList.toggle('hamburger-expanded');
    
    if(navlist.classList.contains('nav-collapsed')){
        navlist.classList.replace('nav-collapsed', 'nav-expanded');
    }else if(navlist.classList.contains('nav-expanded')){
        navlist.classList.replace('nav-expanded', 'nav-collapsed');
    }
    
}