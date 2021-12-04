document.querySelectorAll("li").forEach(
    el => el.onclick = (event) => {
    let li = document.querySelector('.orange')
        li.classList.remove('orange')
    event.target.classList.add('orange')
})