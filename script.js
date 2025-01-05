const fullDarkModeCheckbox = document.querySelector('#full-dark-mode')
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container')

const isfullDarkModeCheckbox = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'))
const isContainedDarkModeCheckbox = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'))

if(isfullDarkModeCheckbox){
    fullDarkModeCheckbox.checked = true
    changeFullDarkMode()
}
if(isContainedDarkModeCheckbox){
    containedDarkModeCheckbox.checked =true
    changeContainedDarkMode()
}

fullDarkModeCheckbox.addEventListener('change', () => {
    changeFullDarkMode()
    changeContainedDarkMode()
})

function changeFullDarkMode(){
    // if(fullDarkModeCheckbox.checked){
    //     document.body.classList.add('dark')
    //     localStorage.setItem('fullDarkModeCheckbox', true)
    // } else{
    //     document.body.classList.remove('dark')
    //     localStorage.setItem('fullDarkModeCheckbox', false)
    // }
    
    changeTheme(fullDarkModeCheckbox, document.body, 'fullDarkModeCheckbox')
}

function changeContainedDarkMode(){
    // if(containedDarkModeCheckbox.checked){
    //     container.classList.add('dark')
    //     localStorage.setItem('containedDarkModeCheckbox', true)
    // } else{
    //     container.classList.remove('dark')
    //     localStorage.setItem('containedDarkModeCheckbox', false)
    // }

    changeTheme(containedDarkModeCheckbox, container, 'containedDarkModeCheckbox')
}

function changeTheme(checkbox, element, key){
    if(checkbox.checked){
        element.classList.add('dark')
        localStorage.setItem(key, true)
    } else{
        element.classList.remove('dark')
        localStorage.setItem(key, false)
    }
}

containedDarkModeCheckbox.addEventListener('change', changeContainedDarkMode)