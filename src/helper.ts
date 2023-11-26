import { OrderLineItems } from "./data.js";

//***************** RENDER FUNCTIONS ******************/
//* Funzione per popolare il DOM
// passo un array di oggetti e un elemento del DOM, la funzione popola l'elemento con i dati dell'array
function render(array: any[], element: HTMLElement): void {
  let html = "";
  array.forEach((item) => {
    // popola template con i dati dell'array
    let computedString = populateProduct(item);
    html += computedString;
  });
  element.innerHTML = html;
}

//* Funzione per popolare il template con i dati dell'oggetto
function populateProduct(object: any): string {
  /*   let template = OBJECT_TO_TEMPLATE.get(object.type) || ''
  // sostituisci i placeholder con i dati dell'oggetto
  for (const key in object) {
    template = template.replace(`###${key}`, object[key])
  }
  // chiama la funzione che popola le opzioni del select
  if (object.hasOwnProperty('variants')) {
    template = template.replace(
      `###option`,
      populateOptions(object['variants'])
    )
  } */
  const template = `<div id="${
    object.code
  }" class="card p-1 mb-4" style="  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: calc(25% - 20px);
  margin: 10px;
  min-width: 400px;
  max-width: calc(25% - 100px);">
          <div class="card-header">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="defaultCheckProduct${object.code}"
                
              />
              <label class="form-check-label" for="defaultCheck1">
                Add to cart
              </label>
            </div>
          </div>
          <div class="card-body bg-light">
            <img
              src="../src/static/${object.img}"
              class="img-fluid mb-4"
              alt="Responsive image"
            />
            <h4 class="card-title">${object.name}</h4>
            <!--price-->
            <h2 class="card-title text-success">${object.price}</h2>
            <select id="options" class="form-control mb-4">
            ${populateOptions(object.variants)}
            </select>
            <h6 class="card-title">Select quantity</h6>
            <input
              type="number"
              class="form-control"
              id="quantityProduct${object.code}"
              name="quantity"
              min="1"
              max="5"
              value="1"
              onkeydown="return false"
              style="caret-color: transparent"
            />
          </div>
        </div>`;
  return template;
}

// Funzione per popolare le opzioni del select
function populateOptions(variants: Array<string>): string {
  const option = `<option>###option</option>`;
  let computedOptions = "";
  variants.forEach((variant) => {
    computedOptions += option.replace(/###option/g, variant);
  });
  return computedOptions;
}

//***************** OTHERS ******************/
function diFilippo(selectedProducts: OrderLineItems[]) {
  const prodottiSelezionati = document.querySelectorAll(
    ".form-check-input:checked"
  );

  const prodSelected = [];

  prodottiSelezionati.forEach((prodotto) => {
    const card = prodotto.closest(".card");
    const titolo = card.querySelector(".card-title").innerText;
    const select = card.querySelector(".form-control");
    const quantita = select.value;

    prodSelected.push({
      titolo: titolo,
      quantita: quantita,
    });
  });

  if (prodSelected.length === 0) {
    alert("Nessun prodotto selezionato!");
    return;
  }

  console.log("Elementi selezionati:", prodSelected);

  const newButton = document.createElement("button");

  newButton.id = "nextButton";
  newButton.textContent = "Next";
  newButton.classList.add("btn", "btn-primary", "btn-lg", "btn-block");

  document.body.appendChild(newButton);
}

export { diFilippo, render };
