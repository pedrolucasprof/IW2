var total //global
let num1 //local
const total = 0 //local



let num1 = 3
let num2 = 2 

function soma (){
    //console.log(num1+num2)
    return num1+num2
}
function sub (){
    //console.log(num1+num2)
    return num1-num2
}

function mult (){
    //console.log(num1*num2)
    return num1*num2 
}

function div (){
    //console.log(num1/num2)
    return num1/num2
}

console.log("a soma é:" + soma()+ "\n") 
           "a subtração é :" + sub() + "\n"
           "a divisão é:" + div() + "\n"
           "a multiplicação é :" + mult()

           //if

           function se (n){
            if(n==1){
                console.log("Voce escolheu 1")
            } else if (n==2){
                console.log("Voce escolheu 2")
            }   else if (n==3){
                console.log("Voce escolheu 3")
            } else {
                console.log("Numero inexistente!")
            }
           }       

           //para for 
           function lacofor(n){
            for(let i=0;i<10;i++){
                if(n==1){
                    console.log("Voce escolheu 1")
                    break
                } else {
                    console.log("Numero inexistente")
                }
            }
           }

           lacofor(1)

           //lacoenquanto
           function lacowhile(n){
            let i = 0
            while(i<10){
                i++

                if(n==10){
                    console.log("Voce escolheu 1")
                    break 
                } else {
                    console.log("Numero inexistente")
                }
            }
           }

           lacowhile(1)

           //laco fazer.. enquanto (do while)

           function lacofacaenquanto (n){
            let i=0
            do{
                1++
                if(n==1){
                    console.log("voce escolheu 1")
                    break 
                } else {
                    console.log("Numero inexistente!")
                }
            } while(i<10)
        }
        lacofacaenquanto(1)