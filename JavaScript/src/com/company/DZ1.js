document.querySelector('.checkTask1').onkeyup = event => {
    let ev = event.target
    let reg = new RegExp('[0-9]')
    if (event.key.match(reg)) {
        ev.value = ev.value.slice(ev.value-1)
    }
}