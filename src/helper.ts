//* funzione render:
// prende in input un array di oggetti e l'elemento html in cui renderizzarli

function render(array: any[], element: HTMLElement): void {
  let html = ''
  array.forEach((item) => {
    html += `${item.render}`
  })
  element.innerHTML = html
}
