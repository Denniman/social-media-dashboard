const checkbox = document.querySelector(".checkbox")
let getDarkMode = localStorage.getItem('darkMode')

const enableDarkMode = () => {
    document.body.classList.add('darktheme-bg')
    localStorage.setItem('darkMode', 'enabled')
}
const disableDarkMode = () => {
    document.body.classList.remove('darktheme-bg')
    localStorage.setItem('darkMode', null)
}

if(getDarkMode === 'enabled') {
    enableDarkMode()
}






checkbox.addEventListener('change', () => {
    getDarkMode = localStorage.getItem('darkMode')

    if(getDarkMode !== 'enabled') {
        enableDarkMode() 
    } else {
        disableDarkMode()
    }
})



