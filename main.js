

// var iceCream = 'chocolate'
// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// } else {
//     alert('Awwww, but chocolate is my favorite...');
// }
function func() {
    window.open("file:///C:/Users/csousa/Documents/Estudando%20JS/Untitled-2.html");
}


paragrafo = document.querySelector('p').onclick = function () {
    var myName = prompt("Insira seu nome");
    this.innerHTML = document.textContent = "Ola " + myName;
}

const Paragrafo = document.querySelector('p.neymar').onclick = function () {
    let comprimento = {
        bd: "bom dia",
        bt: "boa tarde",
        bn: "boa noite"
    };
    hoje = new Date();
    hora = hoje.getHours();
    if (hora > 5 && hora < 13) {
        this.innerHTML = document.textContent = comprimento.bd + " agora são " + hora + " horas";
    } else if (hora >= 13 && hora < 19) {
        this.innerHTML = document.textContent = comprimento.bt + " agora são " + hora + " horas";
    } else {
        this.innerHTML = document.textContent = comprimento.bn + " agora são " + hora + " horas";
    }
}

const para = document.getElementById('para').onclick = function () {
    console.log("olá");
    document.write("insira o endereço novamente");
    window.location.reload();
}

var multiplica1234 = function () {
    return (12 * 3) * 4
}

Para = document.getElementById('Para').onclick = function () {
    this.innerHTML = document.textContent = multiplica1234();
}

var Retangulo = class {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    setValores(oForm) {
        console.log(oForm);
        this.altura = oForm.elements[0].value;
        this.largura = oForm.elements[1].value;
        if (isNaN(this.altura * this.largura) || this.altura * this.largura == 0) {
            alert("valor inválido")
        } else if (this.altura == this.largura) {
            alert("QUADRADO!!!\n" + ret.toString() + "   Área:" + this.altura ** 2);
        } else
            alert(ret.toString() + "   Área:" + this.altura * this.largura);
    }
    toString() {
        return "Altura: " + this.altura + "   Largura: " + this.largura;
    }
}
ret = new Retangulo(2, 3);

testandoEscopos = () => {
    //teste escopo let
    function escLet() {
        try {
            console.log(a)
            let a = 1;
        } catch (e) {
            console.log('let não aplica hoisting')
        }
    }
    escLet();
    //teste escopo var
    function escVar() {
        try {
            if (a == undefined) {
                console.log("a foi 'ancorâdo' ao para inicio, mas seu valor não", a)
            }
            var a = 1;
        } catch (e) {
            console.log('var não aplica hoisting')
        }
    }
    escVar();
    //teste escopo função
    function escFunc() {
        function testa() {
            return "primeira chamada"
        }
        return testa()
        function testa() {
            return "segunda chamada"
        }
    }
    console.log(escFunc());
}

function brincandoArrays() {
    //brincando com Arrays
    var vetNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    vetNums.length = 15;
    console.log(vetNums);
    vetNums.pop();
    vetNums.shift();
    vetNums.forEach(function (item, index) {
        console.log("Valor: " + item, "  Índice: " + index)
    });
    console.log(vetNums.length)
    //copia array
    var copiaNums = vetNums.slice()
    //concatena um array no final deste
    console.log(copiaNums.concat(vetNums))
    //retorna o construtor
    console.log(copiaNums.constructor)
    //função para validar valores <=5
    checkValor = (valor) => {
        return valor <= 5;
    }
    //função que retorna valores validados nos arrays
    funcCheckando = () => {
        console.log(copiaNums.concat(vetNums).filter(checkValor))
    }
    funcCheckando()
    //retornando array como string ao contrário
    console.log(vetNums.reverse().toString())
}



//---------------------------------Default, Rest e Spread----------------------------------
testandoChamadas = () => {
    vetor = [1, 2, 3]
    //função que recebe 3 parâmetros, sendo uns deles cm valor default 5
    f = (x, y, z = 5) => {
        return x + y + z
    }
    //invocando função usando vetor como parâmetros
    console.log('vetor: ' + vetor, 'soma: ' + f(...vetor))
    //apagando ultimo valor do vetor
    vetor.pop()
    //invocando função usando vetor como parâmetros, mas dessa vez só são passado dois parâmetros, e o último é preenchido pelo valor default 
    console.log('vetor: ' + vetor, 'soma: ' + f(...vetor))
}


//----------------------------------Exemplo de iterator-------------------------------------- 
iterando = () => {
    let fibonacci = {
        //declaração de objeto iterador
        [Symbol.iterator]() {
            //declarando variáveis locais: pre e current
            let pre = 0, cur = 1;
            return {
                //retorna uma chamada ao método next() com os novos valores para próxima iteração
                next() {
                    [pre, cur] = [cur, pre + cur];
                    //retorna done como falso, para que haja uma próxima iteração e o valor atual(current)
                    //esse retorno falso para done se dá por conta de que quando o iterator completa uma iteração ele seta done para true, mas na verdade isso não afetou em nada na prática
                    //se setar o done para true o value é omitido
                    return { done: false, value: cur }
                }
            }
        }
    }

    //para valor n retornado por fibonacci
    for (var n of fibonacci) {
        //setando teto para a função 
        if (n > 1000)
            break;
        console.log(n);
    }
}

//--------------------------------Função Geradora--------------------------------
geradora = () => {
    //função geradora que sempre terá um próximo
    function* geradorContinuo() {
        var index = 1;
        while (true)
            yield index++;
    }
    var ger = geradorContinuo();
    console.log(ger.next().value)
    console.log(ger.next().value)
    console.log(ger.next().value)

    //função geradora que recebe um valor, e dentro dela os valores devolvidos quando chamar o método next serão o valor recebido +1,+2 e +3 respectivamente
    function* outroGerador(i) {
        yield i + 1;
        yield i + 2;
        yield i + 3;
    }
    //função geradora que recebe um valor e quando chamar o método next() devolverá o valor, um outro generator, e depois o valor + 10 respectivamente
    function* gerador(i) {
        yield i;
        yield* outroGerador(i);
        yield i + 10;
        yield* geradorOutro(a);//exemplo de hoisting, o valor de a está undefined, mas a está declarado, e geradorOutro está no final mas o hoisting ancora funções para o inicio
        var a = 20;
    }
    // chamando a função geradora passando o valor 10 como parâmetro
    var gen = gerador(10);

    //percorendo gerador pelo método next(), enquanto chamar next ele irá devolver algo, mesmo que não tenha nada. CUIDADO WHILE
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);

    //geradores são iterables
    for (let o of gerador(50)) {
        console.log("percorrendo gerador com for of: " + o);
    }
    //função geradora com valor default para o parâmetro a, para fazer teste de hoisting
    function* geradorOutro(a = 10) {
        yield a + 100;
    }
}
//-------------------------------------Map, Set, WeakMap, WeakSet-------------------------

estruturasTeste = () => {
    console.log('---------------------Set------------------------')
    var s = new Set()
    s.add('hello').add('caio').add('felipe')//adicionando manualmente valores ao set
    console.log(s.size)//pegar o tamanho do set
    var opa = ['neymar', 'patolino']
    s.add(...opa)//adicionando valores do array opa ao set
    console.log(s)//apenas o primeiro valor foi adicionado ao array
    console.log(s.has('caio') === true)//buscar no set
    var arr = [1, 1, 5, 7, 3, 2, 1, 8, 6, 5, 3, 56, 3, 1,];
    var seto = new Set(arr)//utilizando construtor de set com o array arr
    console.log(seto)


    //set é iterable
    for (var o of seto) {
        console.log(o);
    }
    console.log('---------------------Map------------------------')
    var mapa = new Map()
    var stringChave = 'chave'
    var objetoChave = {}
    var funcChave = function () { }
    mapa.set(stringChave, 'valor da string chave')
    mapa.set(objetoChave, 'valor associado ao objeto chave')
    mapa.set(funcChave, 6)
    console.log(mapa.size)
    console.log(mapa.get(stringChave))
    console.log(mapa.get(objetoChave))
    console.log(mapa.get(funcChave) + 5)//somando valor ao que está salvo no mapa
    console.log(mapa.get('chave'))
    console.log(mapa.get({}))//objetoChave != {}
    console.log(mapa.get(function () { }))//funcChave != function(){}

    console.log('-----------------WeakSet------------------------')
    //pode ser garbage collected
    var ws = new WeakSet()
    try {
        ws.add('caio')
    } catch (e) {
        console.log('WeakSet aceita apenas Objetos')
    }
    var ff = { f: 'caio' }
    ws.add(ff)
    console.log(ws)
    console.log(ws.has(ff))




    console.log('-----------------WeakMap------------------------')
    //pode ser garbage collected 
    var wm = new WeakMap
    var chave = window
    wm.set(chave, 'caio')
    console.log(wm.get(chave))
}


//-------------------------------Proxies e Promises---------------------------------------

testeProxy = () => {
    //handler é um objeto que contém as funções 'traps' que definem o comportamento do proxy
    //o handler abaixo tem um trap get, que recebe um objeto e a propriedade dele, caso não encontre a propriedade então ele escreve caio  
    var handler = {
        get: function (obj, prop) {
            //ele checa se tem uma propriedade declarada, se tiver ele retorna o valor dela, se não imprime caio
            //if com sintaxe diferente, estrutura é condição ? comando true : comando false
            console.log('objeto' + obj, 'prop: ' + prop)
            return prop in obj ? obj[prop] : 'caio';
        }
    }
    //declarando objeto que será virtualizado com proxy
    var target = [1, 2, 3, 4, 5]
    //proxy é composto por um objeto alvo que será virtualizado e um objeto handler o qual irá definir o comportamento do proxy
    var p = new Proxy(target, handler)
    p.a = { caio: 'caio' };
    p.b = 2;
    console.log(p.a, p.b)
    console.log('d' in p, p.d)

    //com proxy é possivel fazer a validação dos valores passados a um objeto
    let validatorHandler = {
        set: function (obj, property, value, receiver) {
            obj[property] = value
            typeof obj[property] === "number" ? console.log('número: ' + obj[property]) :
                typeof obj[property] === "string" ? console.log('string: ' + obj[property]) : console.log('nem número nem string ' + obj[property])

            return true;//indicando sucesso
        }
    }

    //Promises é uma proxy para um valor o qual ainda não se tem total conhecimento, oque permite trabalhar com handlers de maneira assincrona, com um método executor que recebe
    //dois parâmetros, resolve e reject, que são funções que ou dão uma resolução ou rejeitam a Promise, o executor faz seu trabalho de maneira asincrona até que resolva ou rejeite 
    //a promessa   
    tempo = new Promise((resolve, reject) => {
        //método setTimeout(comando de oque fazer, tempo de espera)
        setTimeout(() => {
            resolve('caio');
        }, 1000);
    })
    tempo.then((valor) => {
        console.log(valor);
    });
    console.log(tempo)


    let entrada = new Proxy({}, validatorHandler)
    entrada.a = 10;
    entrada.a = 'caio'
    entrada.a = {};
}

testandoRegExp = () => {
    var re = /(\w+)\s(\w+)/;
    var str = 'John Smith';
    console.log(str.replace(re, '$2, $1'))
    var filmeTitulo = prompt("insira um nome de filme");
    if (filmeTitulo != null) {
        filmeTitulo.replace(/ /g, '%20')
        filmeTitulo = 'Shrek'
    }
    var left = screen.width / 2 - 200
    var top = screen.height / 2 - 200
    window.open('http://www.omdbapi.com/?t=' + filmeTitulo + '&apikey=f74f16b0', 'Retorno IMDB', 'height=200, width = 200, top=' + top + ', left=' + left)
}

errando = () => {
    var x = new Error('Objeto erro')
    console.log(x)
    try {
        throw new Error('Whoops!');
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
    var y = new EvalError('Erro global')
    y instanceof EvalError ? console.log('Nome: ' + y.name + '\nMensagem: ' + y.message) : console.log('suave')

    //Criando classe de erro customizada
    //Não entendi ao certo. Perguntar depois
    class ErroNovo extends Error {
        constructor(teste = 'caio', ...params) {
            super(...params)


            if (Error.captureStackTrace) {
                Error.captureStackTrace(this.ErroNovo);
            }
            this.teste = teste;
            this.date = new Date();
        }
    }
    try {
        throw new ErroNovo('testando', 'mensagem teste')
    } catch (e) {
        console.log(e.teste);
        console.log(e.message);
        console.log(e.stack);
    }
    console.log(v)
}

debuga = () => {
    debugger;
}

trechoEstrito = () => {
    'use strict';
    //excessão: x não declarado
    const metodo1 = () => {
        try {
            x = 10
            console.log(x)
        } catch (e) {
            console.log(e);
        }
    }
    const metodo2 = () => {
        try {
            var x = 10;
            console.log(x);
        } catch (e) {
            console.log(e);
        }
    }
    try {
        metodo3 = () => { }
        metodo3();
    } catch (e) {
        console.log(e);
    }
    function metodo4(a, b) {
        try {
            var v = 12 + a +
                b
            console.log(v)
        } catch (e) {
            console.log(e);
        }
    }
    metodo1();
    metodo2();
    metodo4(3, 1);
}

javascriptOO=()=>{
    'use strict';
    function Pessoa(primeiroN, sobreN, idade, registro){
        this.nomePessoa = primeiroN;
        this.sobreNome = sobreN;
        this.idadePessoa = idade;
        this.rg = registro;
    }
    Pessoa.prototype.filo = "Cordados";
    var pessoaA = new Pessoa("João","Almeida", 32, '138439206');
    var pessoaB = new Pessoa("Gilmar","Lee", 74, '185206706');
    console.log(pessoaA, pessoaB);
    console.log(pessoaA.filo)

    Pessoa.prototype.nome= function(){
        return this.nomePessoa +" "+this.sobreNome;
    }
    console.log(pessoaA.nome());

    function Aluno(primeiroN, sobreN, idade, registro, curso){
        Pessoa.call(this, primeiroN, sobreN, idade, registro);
        this.graduacao = curso;
    }
    Aluno.prototype = Object.create(Pessoa.prototype);
    var pessoaC = new Aluno("Caio","Sousa", 21, "869306528", "SI");
    console.log(pessoaC, pessoaC.filo, pessoaC.nome());

    Aluno.prototype.nome = function(){
        return this.nomePessoa +" "+this.sobreNome+" "+this.graduacao;
    }
    console.log(pessoaC.nome());
}