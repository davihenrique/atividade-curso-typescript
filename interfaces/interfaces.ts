interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any;
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
  //console.log(pessoa.altura);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: "Jonas", altura: 1.75 });
