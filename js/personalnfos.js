const main = document.querySelector('main');
const holdContainers = document.querySelector('.holdContainers');
const profile = document.querySelector('.profile');
const stats = document.querySelector('.stats');

const matricula = localStorage.getItem('matricula');

const fetchInfoAluno = async() => {
    const response = await fetch(`http://localhost:8080/aluno/${matricula}`);
    const json = await response.json();
    return json;
}

const fetchDisciplinas = async() => {
    const response = await fetch(`http://localhost:8080/disciplinas/${matricula}`);
    const json = await response.json();
    return json;
}

let {AlunoInfos} = await fetchInfoAluno();
console.log(AlunoInfos)
let {disciplinas} = await fetchDisciplinas();

const create = () =>{
    
    //Parte da box da foto com o nome

    const info = AlunoInfos[0];

    const img = document.createElement('img');
    img.setAttribute('src', info.foto);

    const span = document.createElement('span');
    span.textContent = info.nome;

    holdContainers.appendChild(profile);
    profile.appendChild(img);
    profile.appendChild(span);

    //Parte com as descriçoes das materias
    
}

create();