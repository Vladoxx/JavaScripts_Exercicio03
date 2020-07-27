function Pessoa(nome, idade, corFavorito) {
    this.nome = nome
    this.idade = idade
    this.corFavorito = corFavorito
}

function verificaMenosVelho(pessoas) {
    let menorIdade = undefined
    let pessoaMenosVelha = undefined

    for (let pessoa of pessoas) {
        if (typeof menorIdade == 'undefined') {
            menorIdade = pessoa.idade
            pessoaMenosVelha = pessoa
        } else {
            if (pessoa.idade < menorIdade) {
                menorIdade = pessoa.idade
                pessoaMenosVelha = pessoa
            }
        }
    }

    return pessoaMenosVelha
}


function listaRegistros(registros) {
    

     }
    console.log('Esses são os registros que foram feitos:')
    registros.forEach( registro => {
        console.log(`${registro.nome} possui ${registro.idade} anos`)
    } )
}

let registros = []

while (true) {
    
    
    let nome = prompt('Digite seu nome:')
    let idade = Number(prompt('Digite seu idade:'))
    let corFavorito = prompt('Digite seu cor favorito:')

    
    let pessoa = new Pessoa(nome, idade, corFavorito)

    
    registros.push(pessoa)

    let resposta = prompt("Deseja registrar outra pessoa? ")
    if (resposta == 'n' || resposta == 'não') {
        break;
    }
}

console.log(registros)
console.log(verificaMenosVelho(registros))

listaRegistros(registros)
let menosVelha = verificaMenosVelho(registros)
console.log(`A pessoa menos velha é ${menosVelha.nome} com ${menosVelha.idade}`)
