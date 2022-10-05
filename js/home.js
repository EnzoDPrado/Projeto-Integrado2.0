const container = document.querySelector('#cursoList');

const fetchCursos = async () => {
    const response = await fetch('https://lionsschoolenzodpproject.netlify.app/.netlify/functions/api/cursos');
    const json = await response.json()
    return json;
}

const data = await fetchCursos();
let cursoInfo = await fetchCursos;

const createCard = (data) => {
  
    cursoInfo = cursoInfo.cursoInfo;
    
    const cards = data.cursosInfos
    cards.forEach(card => {

        const a = document.createElement('a');

        const li = document.createElement('li');
        li.setAttribute('id', card.sigla);
        li.addEventListener('click', linkPageDS)

        const img = document.createElement('img');
        img.src = card.icone;
        img.classList.add('cursoIMG');
        img.setAttribute('id', card.sigla);


        const span = document.createElement('span');
        span.textContent = card.sigla;
        span.setAttribute('id', 'sigla');
        span.setAttribute('id', card.sigla);

        
        li.append(img);
        li.append(span);
        a.appendChild(li);
        

        container.append(a);
    });
}

const linkPageDS = (e) => {
    const cardId = e.target.id;
    localStorage.setItem('idCurso', cardId);
    location.href = '/Projeto-Integrado2.0/html/alunos.html';
}

createCard(data);





 