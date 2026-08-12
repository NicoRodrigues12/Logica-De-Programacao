import leia from 'readline-sync'

var assentos = [];

for (let i = 0; i < 20; i++) {
    let assento = {
        numero: (i < 10) ? "A" + (i + 1) : "B" + (i + 1),
        ocupado: false,
        tipo: (i % 5 === 0) ? "Preferencial" : "Normal",
    }

    assentos.push(assento)
}

function MostrarAssentos() {
    console.log("CADEIRAS!!!")
    assentos.forEach(assento => {
        var livres = assento.ocupado === true ? "OCUPADA" : "LIVRE"

        console.log("ASSENTO : " + assento.numero + " | " + assento.tipo + " | " + livres)
    })
}


function reservarAssento() {
    var reserva = leia.question("Onde tu quer dar uma sentada ? [A1 - A10 & B11 - B20] : ").toUpperCase()
    var encontrou = false;
    assentos.forEach((assento) => {
        if (assento.numero === reserva) {
            encontrou = true;
            if (assento.ocupado === true) {
                console.log("CADEIRA JÁ OCUPADA, VAZA!")
            } else {
                assento.ocupado = true
                console.log("CADEIRA RESERVADA COM SUCESSO!!!")
            }


            return
        }
    }
    )
    if (encontrou === false) {
        console.log("CADEIRA NAO EXISTE, VAI ENGANAR OUTRO")
    }

}


function cancelarCadeira() {
   MostrarAssentos()

   var cancelar = leia.question("Qual cadeira quer cancelar ? : ").toUpperCase()
   var encontrou = false
   
   console.log("CANCELAR")
   assentos.forEach((assento) => {
        if (assento.numero === cancelar){
            encontrou = true
           if(assento.ocupado === true){
            assento.ocupado = false
            console.log("CADEIRA CANCELADA")
           }else{
            console.log("CADEIRA NAO ESTA RESERVADA")
           }
           return
        }
   })

   if(encontrou === false){
    console.log("CADEIRA NAO EXISTE!!!")
   }
}

function mostrarLivres(){
    
}

var opcao;
do {
    console.log("\n CINEMA ")
    console.log("1 - MOSTRAR ASSENTOS")
    console.log("2 - RESERVAR ASSENTOS")
    console.log("3 - CANCELAR ASSENTOS")
    console.log("4 - MOSTRAR ASSENTOS LIVRES")
    console.log("5 - MOSTRAR ASSENTOS OCUPADOS")
    console.log("0 - SAIR")




    opcao = leia.questionInt("Informe a opcao : ")


    if (opcao === 1) {
        MostrarAssentos()
    } else if (opcao === 2) {
        //RESERVAR ASSENTOS
        reservarAssento()
    } else if (opcao === 3) {
        //CANCELAR ASSENTOS
        cancelarCadeira()
    } else if (opcao === 4) {
        //MOSTRAR ASSENTOS LIVRES

    } else if (opcao === 5) {
        //MOSTRAR ASSENTOS OCUPADOS

    } else {
        console.log("Sistema Encerrado, betinha")
    }
} while (opcao !== 0);