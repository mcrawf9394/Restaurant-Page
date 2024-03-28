function menuContent() {
    const menuContainer = document.createElement('div')
    const topOfPage = document.createElement('h2')
    topOfPage.textContent = "Take a look at our world class dishes."
    menuContainer.appendChild(topOfPage)
    return menuContainer
}
export default menuContent();