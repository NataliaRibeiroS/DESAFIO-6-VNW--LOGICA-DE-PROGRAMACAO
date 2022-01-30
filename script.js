//ESTRUTURA DE DADOS COMPLEXOS (OBJETO)

// Crie um objeto que receba ao menos três propriedades sobre você.
let eu = {
    nome: "Natalia",
    idade: 33,
    signo: "virgem"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.endereço = "Maré"

// Remova uma propriedade desse objeto.
delete eu.signo

//Mostre no console todas as propriedades desse objeto.
console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {
        nome: "Natalia",
        idade: 33,
        telefone:"56789-1234",
        amigos: ["Geovani", "Chanel", "Isabel", "Luke"]
    },
    {
        nome: "Mayara",
        idade: 31,
        telefone: "12345-6789",
        amigos: ["Gato", "Gatinho", "Caio", "Liliane"]
    },
    {
        nome: "Lucas",
        idade: 30,
        telefone:"98765-4321",
        amigos: ["Caio", "Liliane", "Gato", "Gatinho",]
    },
    {
        nome: "Ivan",
        idade: 29,
        telefone: "43215-6789",
        amigos: ["Tati", "Luan", "Samantha", "Wendel"]
    },
    {
        nome: "Veronica",
        idade: 31,
        telefone: "94837-2615",
        amigos: ["Samantha", "Wendel", "Tati", "Luan",]
    }
]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0], cadastro[1].amigos[0], cadastro[2].amigos[0], cadastro[3].amigos[0], cadastro[4].amigos[0])
