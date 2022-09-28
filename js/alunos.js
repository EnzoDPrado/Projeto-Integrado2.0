const container = document.querySelector('main');
const cards = document.querySelector('.cards')
const id = localStorage.getItem('idCurso');
console.log(id);

const fetchAlunos = async () => {
    const response = await fetch(`http://localhost:8080/alunos/${id}`);
    const json = await response.json()
    return json;
}

const response = await fetchAlunos();

const createCardAlunos = (data) =>{
    const alunos = data.alunos
    alunos.forEach(aluno => {

        

        const ul = document.createElement('ul');

        const li = document.createElement('li');
        li.setAttribute('id', 'card')

        const img = document.createElement('img');
        img.setAttribute('src', aluno.foto);


        if(aluno.status === 'Finalizado'){
            li.style.backgroundColor = '#E5B657';
        }

        const span = document.createElement('span');
        span.textContent = aluno.nome;

       cards.append(ul);
       ul.append(li);
       li.append(img);
       li.append(span);
     container.append(cards);
    })
}

createCardAlunos(response);
