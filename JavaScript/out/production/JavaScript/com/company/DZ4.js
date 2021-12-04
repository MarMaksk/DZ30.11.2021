let pos = 0

document.querySelector("button").onclick = () => {
    console.log('1')
    let green = document.getElementsByClassName('sc')[0]
    let yellow = document.getElementsByClassName('sc')[1]
    let red = document.getElementsByClassName('sc')[2]
    if (pos === 0) {
        pos++
        red.classList.remove('red')
        green.classList.add('green')
    } else if (pos === 1) {
        pos++
        green.classList.remove('green')
        yellow.classList.add('yellow')
    } else if (pos === 2) {
        pos = 0
        yellow.classList.remove('yellow')
        red.classList.add('red')
    }
}