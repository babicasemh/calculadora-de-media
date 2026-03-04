const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")

const button = document.getElementById("button")

function calcularMedia(){
    const valorNota1 = number(nota1.value)
    const valorNota2 = number(nota2.value)

    const media = (valorNota1 + valorNota2)/2

    console.log(media)
}

button.addEventLister("click", calcularMedia)