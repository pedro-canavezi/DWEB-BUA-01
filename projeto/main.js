/*
for(i=0; i<10; i++){
    console.log("Corinthians", +i)
}
*/

//let idade = 20
//console.log("idade ",idade)

//function fazAlgo(valor){
//    console.log("Corinthians")
//    console.log("Coringão")
//    return valor+1
//}

//console.log(fazAlgo)

//let outro = fazAlgo

//let x = fazAlgo(5)
//let y = outro(8)

//console.log("x", x)
//console.log("y", y)

let contador = 0

let id = setInterval(function(){
    contador++
    console.log(contador)
}, 400)

setTimeout(() => {
    clearInterval(id)
}, 4000)

server.get("/", (req,res) => {
    
})