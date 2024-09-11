import { resumos } from './resumo.js';

const containerdocard = document.getElementById('container_card');

const elementosdocard = resumos.map(card => {
    return `
        <div class="card">
            <a href="${card.link}" class="a">
            <h3>${card.chamada}</h3>
            <img src="${card.imageUrl}" alt="${card.descricao}">
            <h4>${card.descricao}</h4>
            <p>${card.local}</p>
            </a>
        </div>
    `;

}).join('');

containerdocard.innerHTML = elementosdocard;
