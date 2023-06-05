const t = document.querySelector('.modo-dark')

t.addEventListener('click', () => {
    const imgIcon = document.querySelector('#modo-img')
    const darkLight = document.querySelector('#darkLight')

    t.classList.toggle('teste')
    darkLight.classList.toggle('dark')
    darkLight.classList.toggle('light')
    
    imgIcon.classList.toggle('fa-moon')
    imgIcon.classList.toggle('fa-sun')

})