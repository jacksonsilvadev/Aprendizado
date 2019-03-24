

// Iniciando uma Classe Animal
class Animal {
// Iniciando um constructor aonde se define que os parametros recebidos são tal variável dentro de nossa class
    constructor(tipo, pernas){
        this.tipo = tipo;
        this.pernas = pernas;
    }

    // Inicia uma function aonde receb um parametro e retorna ela
    falar(som = 'Som qualquer'){
        return som
    }
    // Criando uma função com a propriedade get que transforma essa function em um dado então assim que chamado
    // ela ja te retorna o valor do return por exemplo.
    get dados() {
        return `Tipo: ${this.tipo}, Pernas: ${this.pernas}`;
    }
}

// Iniciando uma classe com as propriedades de outra class

class Gato extends Animal {
    // Construindo um novo constructor
    constructor(pernas,cor) {
        // Super faz com que você chame as propriedades do constructor da classe extendida
        super('Gato', pernas);

        this.cor = cor
    }
    // Recriando a function falar com o som de um gato.
    falar(som = 'Miau'){
        return som;
    }
    // Transformando a função cor em um dado da classe
    get Cor(){
        return `Cor: ${this.cor}`
    }
}

// Teste
class Cachorro extends Animal {
    constructor (pernas,cor,som) {
        super('Cachorro', pernas)

        this.cor = cor;
        this.som = som
    }

    get falar(){
        return this.som
    }
}