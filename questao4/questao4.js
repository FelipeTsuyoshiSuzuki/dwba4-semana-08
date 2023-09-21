class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    if (this.media() > 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
}

const alunos = [
  new Aluno("João", "Silva", 7.5, 5.8),
  new Aluno("Maria", "Santos", 6.8, 8.2),
  new Aluno("Pedro", "Ferreira", 4.5, 6.7),
  new Aluno("Ana", "Lima", 8.9, 7.3),
  new Aluno("Lucas", "Oliveira", 5.2, 3.9)
];

function showAlunos() {
  for (const aluno of alunos) {
      alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
  }
}

showAlunos();
