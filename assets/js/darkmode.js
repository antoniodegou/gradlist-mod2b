//Functions to change the classes on dark or light mode
const addDarkMode = () => {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode')
}

const addLightMode = () => {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
}

// function to toggle theme
const toggleTheme = () => !document.body.classList.contains('dark-mode') ? addDarkMode() : addLightMode()

// function to check system dark/light preferences
const checkPreference = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? addDarkMode() : addLightMode()

// event listener for system preferences and button
document.getElementById('my_switch').addEventListener('change', toggleTheme)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkPreference)

// immediately check for system preferences so it starts in the right dark/light theme
{(() => checkPreference())()}