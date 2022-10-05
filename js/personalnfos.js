const main = document.querySelector('main');
const holdContainers = document.querySelector('.holdContainers');
const profile = document.querySelector('.profile');
const stats = document.querySelector('.stats');

const matricula = localStorage.getItem('matricula');

const fetchInfoAluno = async() => {
    const response = await fetch(`https://lionsschoolenzodpproject.netlify.app/.netlify/functions/api/aluno/${matricula}`);
    const json = await response.json();
    return json;
}

const fetchDisciplinas = async() => {
    const response = await fetch(`https://lionsschoolenzodpproject.netlify.app/.netlify/functions/api/disciplinas/${matricula}`);
    const json = await response.json();
    return json;
}

let {AlunoInfos} = await fetchInfoAluno();
console.log(AlunoInfos)
let {disciplinas} = await fetchDisciplinas();
console.log(disciplinas);

const getSiglasMaterias = (nomeDisciplina = '') => {
    const sigla = []
    const arrayStr = nomeDisciplina.split(' ')
    console.log(arrayStr)

    arrayStr.forEach(filter => {
        const letra = filter.slice(0, 1);
        sigla.push(letra.toUpperCase())
    })

    return sigla.join('')
    
}

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
    
    const ul = document.createElement('ul');
    disciplinas.forEach(matter => {
        const li = document.createElement('li');

        const spanProgress = document.createElement('span');
        spanProgress.setAttribute('id', 'progressPorcentage');
        spanProgress.textContent = matter.media;

        const spanMatter = document.createElement('span');
        spanMatter.setAttribute('id', 'matterName');
        spanMatter.textContent = getSiglasMaterias(matter.nome);

        const bar = document.createElement('div');
        bar.classList.add('bar');

        const progress = document.createElement('div');
        progress.classList.add('progress');
        if(matter.media <= 30){
            progress.style.backgroundColor = '#FF0000'
            progress.style.boxShadow = '0px 0px 24px #FF0000'
        }else if(matter.media > 30 && matter.media <= 50){
            progress.style.backgroundColor = '#FFFF00'
            progress.style.boxShadow = '0px 0px 24px #FFFF00'
        }else{
            progress.style.backgroundColor = '#3347B0'
            progress.style.boxShadow = '0px 0px 24px #3347B0'
        }
        

        progress.style.height = `${matter.media}%`



        

        holdContainers.appendChild(stats);
        stats.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(spanMatter);
        li.appendChild(bar);
        bar.appendChild(progress);
        li.appendChild(spanProgress);
    })



  
    
    



}

create();