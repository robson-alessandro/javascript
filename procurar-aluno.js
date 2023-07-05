const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosComSuasMedias = [alunos, medias];

function mostraAluno(aluno){
    if (listaAlunosComSuasMedias[0].includes(aluno)){
        const indice = listaAlunosComSuasMedias[0].indexOf(aluno);

        const media = listaAlunosComSuasMedias[1][indice];

        console.log(`o aluno ${aluno} tem media ${media}`)
    } else {
        console.log("aluno nao encontrado")
    }
}

mostraAluno("Ana")

// segunda versão

function mostraAluno2(aluno){
    if (listaAlunosComSuasMedias[0].includes(aluno)){

        const [alunos, medias] = listaAlunosComSuasMedias;

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`o aluno ${aluno} tem media ${mediaDoAluno}`)
    } else {
        console.log("aluno nao encontrado")
    }
}

mostraAluno2("Caio")