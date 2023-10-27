const alunos = [
    {nome: 'João', nota: 4.7 },
    {nome: 'Ana', nota: 6.0 },
    {nome: 'Manoel', nota: 5.9 },
    {nome: 'Gustavo', nota: 9.9 },
    {nome: 'Luiz', nota: 4.7 },
    {nome: 'Marcela', nota: 5.9 },
    {nome: 'Junior', nota: 10 },
    {nome: 'Eliza', nota: 9.9 },
];



function filtrarAlunos(alunos, notaMinima) {
    return alunos.filter(aluno => aluno.nota >= notaMinima);
}

console.log("Alunos Aprovados");
const alunosComNota6 = filtrarAlunos(alunos, 6);
console.log(alunosComNota6);


