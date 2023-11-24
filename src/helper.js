const provaTemplate = ` <div class="card p-1 mb-4" style="max-width: 300px">
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
              src="../src/static/padella.jpg"
              class="img-fluid mb-4"
              alt="Responsive image"
            />
            <h4 class="card-title">###NOME</h4>
            <!--price-->
            <h2 class="card-title text-success">29,99$</h2>
            <select class="form-control mb-4">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
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
function render(array, element) {
    let html = '';
    array.forEach((item) => {
        let computedString = populateRenderedObject(item);
        html += `${item}`;
    });
    element.innerHTML = html;
    console.log(html);
}
function populateRenderedObject(object) {
    let template = objectToTemplate(typeof object); // todo: non so se funzioni con typeof
    for (const key in object) {
        template += template.replace(`{{${key}}}`, object[key]);
    }
    return template;
}
function objectToTemplate(objectName) {
    let template = provaTemplate; //? di prova
    // cerca tra i template quello che ha il nome uguale a quello dell'oggetto e restituiscilo
    // arrayDiTemplate.find(template => template.name === objectName)
    return template;
}
export { render };
