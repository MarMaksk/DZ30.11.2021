document.querySelectorAll("ul > li").onclick = (event) => {
    console.log('event.target')
    console.log(event.target)
    let li = document.querySelector(event.target)
    li.innerHTML = 'blue'
}
