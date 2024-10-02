let nome=[]
let nota=[]
let media=0.0

for(let n=0;n<=4;n++){
    nome[n]=prompt("digite o nome:")
    nota[n]=parseFloat(prompt("digite a nota:"))
    media=media+nota[n]
}
    media=media/5
   
for(let n=0;n<=5;n++){
  if(media>nota[n]){
     alert(`${nome[n]} está abaixo da média`)
  }
}
