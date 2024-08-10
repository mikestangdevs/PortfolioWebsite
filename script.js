// switch to dark/light theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('dark');
    document.getElementById("body").classList.toggle("dark");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    console.log('dark');
    document.getElementById("body").classList.toggle("dark");
});



function setTheme() {
    // localStorage.clear();
    console.log('settheme called')
    var theme = localStorage.getItem('theme');
    console.log('theme gotten')
    console.log(theme)


    if (theme) {
        console.log('yes theme')
        if (theme == "dark-theme") {
            document.getElementById('body').classList.add('dark-theme');
            console.log('existing, set to dark-theme')
            document.getElementById("theme-button").innerText = "Change to light theme"
        }

        if (theme == "light-theme") {
            document.getElementById('body').classList.add('light-theme');
            console.log('existing, set to light-theme')
            document.getElementById("theme-button").innerText = "Change to dark theme"
        }
    } else {
        console.log('no theme')
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById('body').classList.add('dark-theme');
            console.log('new, set to dark-theme')
            document.getElementById("theme-button").innerText = "Change to light theme"
        } else {
            document.getElementById('body').classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
            console.log('new, set to light-theme')
            document.getElementById("theme-button").innerText = "Change to dark theme"
        }
    }
}

setTheme();

function changeTheme() {
    if (document.getElementById('body').classList.contains('light-theme')) {
        document.getElementById('body').classList.remove('light-theme');
        document.getElementById('body').classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        console.log('user change, set to dark-theme')
        document.getElementById("theme-button").innerText = "Change to light theme"
    } else {
        document.getElementById('body').classList.remove('dark-theme');
        document.getElementById('body').classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        console.log('user change, set to light-theme')
        document.getElementById("theme-button").innerText = "Change to dark theme"
    }
}
