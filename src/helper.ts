import type {
  Address,
  Customer,
  Order,
  OrderLineItems,
  Product,
} from './data.js'
import { OBJECT_TO_TEMPLATE, avaibleProducts, costumers } from './data.js'

function render(array: any[], element: HTMLElement): void {
  let html = ''
  array.forEach((item) => {
    // popola template con i dati dell'array
    let computedString = populateRenderedObject(item)
    html += computedString
  })
  element.innerHTML = html
}

function populateRenderedObject(object: any): string {
  console.log('type of object: ', typeof object)
  let template = ''
  template = OBJECT_TO_TEMPLATE.get(object.type) || ''
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
  }
  return template
}

function populateOptions(variants: Array<string>): string {
  const option = `<option>###option</option>`
  let computedOptions = ''

  variants.forEach((variant) => {
    computedOptions += option.replace(/###option/g, variant)
  })

  return computedOptions
}

export { render }
