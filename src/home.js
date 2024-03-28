function homeContent () {
    const allContent = document.createElement('div')
    const titleOfHomePage = document.createElement('h2')
    titleOfHomePage.textContent = "Come and support our local business!"
    const discription = document.createElement('p')
    discription.textContent = "The health inspectors might have said that we were in \" violation of several laws \" and that \" our restaurant is getting shutdown permanently\" but that's not stopping us from serving our community. Come and find us for food that is so delicious that the government has banned it."
    allContent.appendChild(titleOfHomePage)
    allContent.appendChild(discription)
    return allContent
}
export default homeContent();