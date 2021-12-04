

let regex = /[0-9]/g;
let name = document.querySelector('.checkTask1').addEventListener("keyup",
    function (e) {
    this.value = this.value.replace(regex, '');
});
