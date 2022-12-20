const form = document.getElementById("form")
const errorMessage = document.getElementById("error-message")

function validaFormulario(a, b) {
    return a > b
}

form.addEventListener('submit', (e) => {
    const numeroA = document.getElementById("numeroA").value;
    const numeroB = document.getElementById("numeroB").value;

    errorMessage.classList.remove("valid", "invalid")

    e.preventDefault()
    if (validaFormulario(numeroA, numeroB)) {
        errorMessage.classList.add("valid")
        errorMessage.innerHTML = "<p>O primeiro número é maior que o segundo.</p>"
    } else {
        errorMessage.classList.add("invalid")
        errorMessage.innerHTML = "<p>O primeiro número precisa ser maior que o segundo.</p>"
    }
})

errorMessage.addEventListener('click', () => {
    errorMessage.innerHTML = ''
    errorMessage.classList.remove("valid", "invalid")
})