const container = document.querySelector('main');
const title = document.querySelector('.title');
const cards = document.querySelector('.cards');
const navBar = document.querySelector('.searchLine');
const selector = document.querySelector('.selections');

const id = localStorage.getItem('idCurso');
console.log(id);

const fetchAlunos = async () => {
    const response = await fetch(`http://localhost:8080/alunos/${id}`);
    const json = await response.json()
    return json;
}


const fetchCurso = async () => {
    const response = await fetch(`http://localhost:8080/curso/${id}`);
    const json = await response.json()
    return json;
}


const fetchAnosConclusao = async () => {
    const response = await fetch(`http://localhost:8080/curso/anoFinalization/${id}`);
    const json = await response.json();
    return json;
}


let anos = await fetchAnosConclusao();
const response = await fetchAlunos();
let curso = await fetchCurso();



const createCardAlunos = (data) => {

    curso = curso.cursoInfos;


    const name = curso[0];
    const h1 = document.createElement('h1');
    
    const nomeSanitized = name.nome.replace(/[0-9-]/g, '');

    h1.textContent = nomeSanitized;

    title.appendChild(h1)

    container.appendChild(title);

    
    

    
    const alunos = data.alunos
    const ul = document.createElement('ul');
    alunos.forEach(aluno => {

        const li = document.createElement('li');
        li.classList.add('card');
        li.setAttribute('id', aluno.matricula);
        

        const img = document.createElement('img');
        img.setAttribute('src', aluno.foto);
        img.setAttribute('id', aluno.matricula);


        if (aluno.status === 'Finalizado') {
            li.style.backgroundColor = '#E5B657';
        }

        const span = document.createElement('span');
        span.textContent = aluno.nome;
        span.setAttribute('id', aluno.matricula);


        cards.append(ul);
        ul.append(li);
        li.append(img);
        li.append(span);
        container.append(cards);
    })
    // location.href = '';
}



createCardAlunos(response);


cards.addEventListener('click',(e) =>{
    console.log(e.target.id);
    localStorage.setItem('matricula', e.target.id);
    location.href = '../html/infos.html';
} )
