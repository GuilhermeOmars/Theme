
const tradeTheme = () => {
    body = document.body
    bodyStyle = window.getComputedStyle(body)
    bodyColor =  bodyStyle.getPropertyValue('background-color')
    if (bodyColor == 'rgba(0, 0, 0, 0)' || bodyColor == 'rgb(255, 255, 255)') {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }
}