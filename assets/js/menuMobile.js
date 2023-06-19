const menuM = () => {

    const menuMobile = document.querySelector('.fa-bars')
    
    menuMobile.addEventListener('click', () => {
        const menuContent = document.querySelector('.nav-mobile-content')
        
        menuContent.classList.toggle('hide')
    })
}