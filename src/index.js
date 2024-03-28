import _, { forEach } from 'lodash';
import './style.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';
const changingDisplay = {
    displayContainer: document.getElementById('content'),
    intialDisplay () {
        this.displayContainer.appendChild(home)
    },
    displayPush (moduleFile){
        while (this.displayContainer.firstChild) {
            this.displayContainer.removeChild(this.displayContainer.firstChild)
        }
        this.displayContainer.appendChild(moduleFile)
    }
}
changingDisplay.intialDisplay()
const buttons = {
    homeButton: document.getElementById('home'),
    menuButton: document.getElementById('menu'),
    aboutButton: document.getElementById('about')
}
buttons.homeButton.addEventListener('click', (button) => {
    button.preventDefault()
    changingDisplay.displayPush(home)
})
buttons.menuButton.addEventListener('click', (button) => {
    button.preventDefault()
    changingDisplay.displayPush(menu)
})
buttons.aboutButton.addEventListener('click', (button) => {
    button.preventDefault()
    changingDisplay.displayPush(about)
})
