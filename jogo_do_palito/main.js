console.log("Oi mundo")

document.getElementById("btn-1").addEventListener("click", () => {
    console.log("Cricou botão")
    let valorPalpite = document.getElementById("cxaPalpite").value
    valorPalpite = parseInt(valorPalpite)
    console.log("valor palpite: ", valorPalpite)
})
