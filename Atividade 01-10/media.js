let nome=[]
let nota=[]
let media,soma

for(let n=0;n<=2;n++){
    nome.push(prompt("digite o nome:"))

}
for(let m=0;m<=2;m++){
    let nota1=nota.push(Number(prompt("digite a nota:")))
    soma=media+nota1
    media=soma/3
   console.log(media)
}
