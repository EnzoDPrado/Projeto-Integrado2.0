const container = document.querySelector('#cursoList');

const fetchCursos = async () => {
    const response = await fetch('http://localhost:8080/cursos');
    const json = await response.json()
    return json;
}

const data = await fetchCursos();



const createCard = (data) => {
    const cards = data.cursosInfos
    cards.forEach(card => {

        const a = document.createElement('a')
        a.setAttribute('href', '');
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = card.icone;
        img.classList.add('cursoIMG');


        const span = document.createElement('span');
        span.textContent = card.sigla;

        
        li.append(img);
        li.append(span);
        a.appendChild(li);
        

        container.append(a);
    });
}

createCard(data);