import optionOne from './tasty_food.jpg';
import optionTwo from './yummy_hot_dog.jpg';
import optionThree from './CornDog.jpg';
function menuContent() {
    const menuContainer = document.createElement('div')
    const topOfPage = document.createElement('h2')
    topOfPage.textContent = "Take a look at our world class dishes."
    const menuOption = document.createElement('div')
    menuOption.id = "options"
    const optionOneDiv = document.createElement('div')
    optionOneDiv.className = "option"
    const optionOneImg = new Image ()
    optionOneImg.src = optionOne
    optionOneImg.id = "optionOneImg"
    const optionOneName = document.createElement('h3')
    optionOneName.textContent = "Yummy Spaghetti"
    optionOneDiv.append(optionOneImg, optionOneName)
    const optionTwoDiv = document.createElement('div')
    optionTwoDiv.className = "option"
    const optionTwoImg = new Image ()
    optionTwoImg.src = optionTwo
    optionTwoImg.id = "optionTwoImg"
    const optionTwoName = document.createElement('h3')
    optionTwoName.textContent = "Hot Diggity Dog"
    optionTwoDiv.append(optionTwoImg, optionTwoName)
    const optionThreeDiv = document.createElement('div')
    optionThreeDiv.className = "option"
    const optionThreeImg = new Image ()
    optionThreeImg.src = optionThree
    optionThreeImg.id = "optionThreeImg"
    const optionThreeName = document.createElement('h3')
    optionThreeName.textContent = "Corn Dog"
    optionThreeDiv.append(optionThreeImg, optionThreeName)
    menuOption.append(optionOneDiv, optionTwoDiv, optionThreeDiv)
    menuContainer.append(topOfPage, menuOption)
    return menuContainer
}
export default menuContent();