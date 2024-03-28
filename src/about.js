function aboutContent() {
    const aboutContainer = document.createElement('div')
    const topOfPage = document.createElement('h2')
    topOfPage.textContent = "Serving the community since 2024"
    aboutContainer.appendChild(topOfPage)
    return aboutContainer
}
export default aboutContent();