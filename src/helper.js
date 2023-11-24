import { OBJECT_TO_TEMPLATE } from './data.js';
//***************** RENDER FUNCTIONS ******************/
//* Funzione per popolare il DOM
// passo un array di oggetti e un elemento del DOM, la funzione popola l'elemento con i dati dell'array
function render(array, element) {
    let html = '';
    array.forEach((item) => {
        // popola template con i dati dell'array
        let computedString = populateRenderedObject(item);
        html += computedString;
    });
    element.innerHTML = html;
}
//* Funzione per popolare il template con i dati dell'oggetto
function populateRenderedObject(object) {
    let template = OBJECT_TO_TEMPLATE.get(object.type) || '';
    // sostituisci i placeholder con i dati dell'oggetto
    for (const key in object) {
        template = template.replace(`###${key}`, object[key]);
    }
    // chiama la funzione che popola le opzioni del select
    if (object.hasOwnProperty('variants')) {
        template = template.replace(`###option`, populateOptions(object['variants']));
    }
    return template;
}
// Funzione per popolare le opzioni del select
function populateOptions(variants) {
    const option = `<option>###option</option>`;
    let computedOptions = '';
    variants.forEach((variant) => {
        computedOptions += option.replace(/###option/g, variant);
    });
    return computedOptions;
}
//***************** OTHERS ******************/
function diFilippo(selectedProducts) {
    const prodottiSelezionati = document.querySelectorAll('.form-check-input:checked');
    const prodSelected = [];
    prodottiSelezionati.forEach((prodotto) => {
        const card = prodotto.closest('.card');
        const titolo = card.querySelector('.card-title').innerText;
        const select = card.querySelector('.form-control');
        const quantita = select.value;
        prodSelected.push({
            titolo: titolo,
            quantita: quantita,
        });
    });
    if (prodSelected.length === 0) {
        alert('Nessun prodotto selezionato!');
        return;
    }
    console.log('Elementi selezionati:', prodSelected);
    const newButton = document.createElement('button');
    newButton.id = 'nextButton';
    newButton.textContent = 'Next';
    newButton.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block');
    document.body.appendChild(newButton);
}
export { diFilippo, render };
