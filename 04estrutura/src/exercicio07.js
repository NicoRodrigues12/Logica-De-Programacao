import leia from 'readline-sync'



export function exercicio07(){

var pai = []
var mae = []
var filho = []

for (var i = 0; i < 50; i++){

pai[i] = Math.floor(Math.random() * 100);
mae[i] = Math.floor(Math.random() * 100);


}
for(var i = 0; i <50; i++){
if (i % 2 == 0) {
        filho[i] = pai[i]
    } 
    else{
        filho[i] = mae[i]
    }   
}

    console.log("Mae : " + mae)
    console.log("Pai : " + pai)
    console.log("Filho : " + filho)

}

    

    exercicio07()