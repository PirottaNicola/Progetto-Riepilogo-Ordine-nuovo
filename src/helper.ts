import type {
  Address,
  Customer,
  Order,
  OrderLineItems,
  Product,
} from "./data.js";
import { avaibleProducts, costumers } from "./data.js";

const provaTemplate = `<div class="card p-1 mb-4" style="max-width: 300px">
          <div class="card-header">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Add to cart
              </label>
            </div>
          </div>
          <div class="card-body bg-light">
            <img
              src="../src/static/###img"
              class="img-fluid mb-4"
              alt="Responsive image"
            />
            <h4 class="card-title">###name</h4>
            <!--price-->
            <h2 class="card-title text-success">###price</h2>
            <select id="options" class="form-control mb-4">
            ###options
            </select>
            <h6 class="card-title">Select quantity</h6>
            <input
              type="number"
              class="form-control"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              value="1"
              onkeydown="return false"
              style="caret-color: transparent"
            />
          </div>
        </div>`;

function render(array: any[], element: HTMLElement): void {
  let html = "";
  array.forEach((item) => {
    // popola template con i dati dell'array
    let computedString = populateRenderedObject(item);
    html += computedString;
  });
  element.innerHTML = html;
}

function populateRenderedObject(object: any): string {
  let template = objectToTemplate(typeof object); // todo: typeof?
  for (const key in object) {
    template = template.replace(`###${key}`, object[key]);
  }
  // chiama la funzione che popola le opzioni del select se l'oggetto ha una proprietà variants
  if (object.hasOwnProperty("variants")) {
    template = template.replace(
      `###option`,
      populateOptions(object["variants"])
    );
  }
  return template;
}

function populateOptions(variants: Array<string>): string {
  const option = `<option>###option</option>`;
  console.log("variants", variants);

  let computedOptions = "";

  variants.forEach((variant) => {
    computedOptions += option.replace(/###option/g, variant);
  });
  console.log("computedOptions", computedOptions);

  // popola template con i dati del
  return computedOptions;
}

function objectToTemplate(objectName: string): string {
  let template = provaTemplate; //? di prova
  // cerca tra i template quello che ha il nome uguale a quello dell'oggetto e restituiscilo
  // arrayDiTemplate.find(template => template.name === objectName)
  return template;
}

export { render };
