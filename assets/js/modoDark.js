const darkMode = document.querySelector('#modo-dark')
const body = document.querySelector('body')

darkMode.addEventListener('click', () => {
    const imgIcon = document.querySelector('#modo-img')
    const darkLight = document.querySelector('#darkLight')

    darkLight.classList.toggle('dark')
    darkLight.classList.toggle('light')
    
    imgIcon.classList.toggle('fa-moon')
    imgIcon.classList.toggle('fa-sun')

    darkMode.classList.toggle('modo-light')
    darkMode.classList.toggle('modo-dark')

    body.classList.toggle('bodyDark')

})