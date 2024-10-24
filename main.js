const alunos = [
  { nome: 'Lucas', nota: '8' },
  { nome: 'Maria', nota: '10' },
  { nome: 'Otávio', nota: '4' },
  { nome: 'Renan', nota: '7' },
  { nome: 'André', nota: '5' },
  { nome: 'João', nota: '3' }
]

const notasMaioresQueOito = alunos.filter(function(aluno) {
  return aluno.nota >= 6
})

console.log(notasMaioresQueOito)