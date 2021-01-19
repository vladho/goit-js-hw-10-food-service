const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.querySelector(".theme-switch__toggle")
const bodyRef = document.querySelector("body")

const checkTheme = () => {
    if (localStorage.getItem("Theme", Theme.DARK) === Theme.DARK) {
        bodyRef.classList.add(Theme.DARK)
        themeSwitchRef.checked = true
    }
}

checkTheme()
   
const changeTheme = () => {
    if (themeSwitchRef.checked) {
        bodyRef.classList.replace('light-theme', 'dark-theme')
        bodyRef.classList.add(Theme.DARK)
        localStorage.setItem("Theme", Theme.DARK)
    }
    if (themeSwitchRef.checked === false) {
        bodyRef.classList.replace('dark-theme', 'light-theme')
        localStorage.setItem("Theme", Theme.LIGHT)
    }
}

themeSwitchRef.addEventListener("change", changeTheme)