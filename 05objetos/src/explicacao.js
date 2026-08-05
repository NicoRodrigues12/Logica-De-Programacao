import leia from 'readline-sync'

var usuarios = []

for(var i = 0; i < 3; i++){

    var usuario = {

        nome : "",

        idade : "",

        email : "",
}

usuario.nome = leia.question("Qual seu nome, neguinho ? : ")
usuario.idade = leia.questionFloat("Qual sua idade, " + usuario.nome + " ? : ")
usuario.email = leia.question("Digita seu Email ai " + usuario.nome +  " : ")
usuarios.push(usuario)
}

console.log(usuarios[2].email)

usuarios.forEach(user => {
    mostrarUsuario(user)
})

export function mostrarUsuario(usuario){

console.log("Falae " + usuario.nome + " voce tem " + usuario.idade + " anos, e seu email eh : " + usuario.email)
}