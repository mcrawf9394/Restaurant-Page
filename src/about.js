import img from './chef.png';
function aboutContent() {
    const aboutContainer = document.createElement('div')
    const topOfPage = document.createElement('h2')
    topOfPage.textContent = "Serving the community since 2024"
    const aboutInfo = document.createElement('p')
    aboutInfo.textContent = "Although we have not been serving food for very long, we have been shutdown by the health department about 5 times. We are tired of starting restaurants under new aliases and wearing silly little costumes. So we are happy to annouce that we are serving our food on street corners that we have not been caught selling at."
    const chef = document.createElement('div')
    const chefLabel = document.createElement('h3')
    chefLabel.textContent = "Our Chef!"
    const chefImg = new Image ()
    chefImg.id = "chefImg"
    chefImg.src = img;
    chef.appendChild(chefLabel)
    chef.appendChild(chefImg)
    aboutContainer.appendChild(topOfPage)
    aboutContainer.appendChild(aboutInfo)
    aboutContainer.appendChild(chef)
    return aboutContainer
}
export default aboutContent();