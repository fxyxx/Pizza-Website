import './src/styles/style.scss'
import мodal from './src/scripts/modal'
import accordion from './src/scripts/accordion'
import changeTheme from './src/scripts/theme-switcher'
import generatePromoCode from './src/scripts/promo-code-generator'
import burgerMenu from './src/scripts/burger-menu'
import {
  pizzaOptions,
  pizzaForm,
  createLetter,
} from './src/scripts/template-vars'

const promoCode = generatePromoCode()
accordion()
мodal()
changeTheme()
burgerMenu()

let checkCode = false
const checkPromoCode = () => {
  const promo_input = document.getElementById('coupon_code')

  if (promoCode === promo_input.value) {
    promo_input.setCustomValidity('')
    promo_input.classList.add('valid')

    checkCode = true

    return calcTotal()
  } else {
    promo_input.setCustomValidity('Неверное значение')
    promo_input.classList.add('invalid')

    promo_input.classList.add('shake')
    promo_input.addEventListener('animationend', () => {
      promo_input.classList.remove('shake')
    })

    checkCode = false

    return calcTotal()
  }
}

const quantityField = document.querySelector('.first_q')

const order_data = {
  size: '',
  toppings: [],
  crust: '',
  templates_pizzas: [],
  templates_pizzas_quantity: [],
}

const calcTotal = () => {
  const pizza_data = {
    size: [{ Small: 1.2 }, { Medium: 1.5 }, { Large: 2 }],
    toppings: [
      { Pepperoni: 1.5 },
      { Mushroom: 2.4 },
      { Sausage: 2.7 },
      { 'Black olives': 3.1 },
      { Bacon: 2.5 },
      { Onions: 1.1 },
      { Chicken: 2.3 },
      { Peppers: 2.1 },
    ],
    crust: [{ Stuffed: 4.3 }, { Cracker: 4.6 }, { Thin: 5.2 }, { Cheese: 6.2 }],
  }
  const result = {
    size: null,
    toppings: null,
    crust: null,
    templates_pizzas: null,
  }

  for (const key in order_data) {
    if (key === 'size') {
      for (const item of pizza_data.size) {
        if (item.hasOwnProperty(order_data.size)) {
          result.size = item[order_data.size]
          break
        }
      }
    } else if (key === 'toppings') {
      let total = 0
      for (const topping of order_data.toppings) {
        for (const item of pizza_data.toppings) {
          if (item.hasOwnProperty(topping)) {
            total += item[topping]
            break
          }
        }
      }
      result.toppings = total
    } else if (key === 'crust') {
      for (const item of pizza_data.crust) {
        if (item.hasOwnProperty(order_data.crust)) {
          result.crust = item[order_data.crust]
          break
        }
      }
    }
  }

  const stanRes = standartTotal()
  let standartPrice = 0

  if (stanRes.length > 0) {
    if (
      stanRes.every((element) => typeof element === 'number' && !isNaN(element))
    ) {
      standartPrice = stanRes.reduce((sum, num) => (sum += num))
    }
  }

  const sum = Number(
    quantityField.textContent *
      (result.size * (result.toppings + result.crust)) +
      +standartPrice
  )
  const taxes = sum * 0.12
  const discount = checkCode ? sum - sum * 0.8 : 0

  return (
    (document.getElementById('cost').textContent = '$' + sum.toFixed(2)),
    (document.getElementById('discount').textContent =
      '-$' + discount.toFixed(2)),
    (document.getElementById('taxes').textContent = '$' + taxes.toFixed(2)),
    (document.getElementById('total').textContent =
      '$' + (sum - discount + taxes).toFixed(2))
  )
}

const decrementPizza = () => {
  if (+quantityField.textContent > 0) {
    quantityField.textContent -= 1

    calcTotal()
  } else {
    return false
  }
}

const incrementPizza = () => {
  quantityField.textContent = +quantityField.textContent + 1

  calcTotal()
}

document.getElementById('size-select').addEventListener('change', (e) => {
  order_data.size = e.target.value

  calcTotal()
})

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const checkedCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    )
    const arr = []

    checkedCheckboxes.forEach((el) => {
      arr.push(el.value)
      order_data.toppings = arr
    })

    calcTotal()
  })
})

document.getElementById('crust-select').addEventListener('change', (e) => {
  order_data.crust = e.target.value

  calcTotal()
})

const createNewPizza = () => {
  const container = document.querySelector('.pizza-options__container')
  container.insertAdjacentHTML('beforeend', pizzaOptions)

  const quantityBtn = container.lastElementChild
  quantityBtn
    .querySelector('.customize')
    .insertAdjacentHTML('beforeend', pizzaForm)

  document.querySelectorAll('.customize-standart').forEach((customizeItem) => {
    const customizeStandart = customizeItem.lastElementChild

    customizeItem.removeEventListener('click', handleCustomizeStandartClick)

    if (!customizeItem.hasAttribute('data-click-handler')) {
      customizeItem.setAttribute('data-click-handler', true)
      customizeItem.addEventListener('click', handleCustomizeStandartClick)
    }

    function handleCustomizeStandartClick() {
      if (customizeStandart.classList.contains('hideStandart')) {
        customizeStandart.classList.remove('hideStandart')
      } else {
        customizeStandart.classList.add('hideStandart')
      }

      const pizzaName = this.previousElementSibling
      Array.from(this.lastElementChild.children).forEach((el) => {
        el.addEventListener('click', () => {
          pizzaName.textContent = el.dataset.name
          pizzaName.setAttribute('data-name', el.dataset.name)
          pizzaName.setAttribute('data-price', el.dataset.price)

          order_data.templates_pizzas.splice(
            0,
            order_data.templates_pizzas.length
          )
          document.querySelectorAll('.standartName').forEach((el) => {
            order_data.templates_pizzas.push({
              [el.dataset.name]: el.dataset.price,
            })
          })
        })
      })
      calcTotal()
    }
  })

  quantityBtn.querySelectorAll('.standart_plus').forEach((button) => {
    button.addEventListener('click', function (e) {
      const actualQuantity = this.previousElementSibling

      actualQuantity.textContent = +actualQuantity.textContent + 1

      checkQuntity()
    })
  })

  quantityBtn.querySelectorAll('.standart_minus').forEach((button) => {
    button.addEventListener('click', function (e) {
      const actualQuantity = this.nextElementSibling

      if (+actualQuantity.textContent > 0) {
        actualQuantity.textContent = +actualQuantity.textContent - 1
      }

      checkQuntity()
    })
  })
}

function checkQuntity() {
  order_data.templates_pizzas_quantity.splice(
    0,
    order_data.templates_pizzas_quantity.length
  )

  document.querySelectorAll('.standart_quantity').forEach((el) => {
    order_data.templates_pizzas_quantity.push(el.textContent)
  })
  calcTotal()
}

function standartTotal() {
  const resultStandart = order_data.templates_pizzas.map((pizza, index) => {
    const price = parseFloat(Object.values(pizza)[0])
    const quantity = parseInt(order_data.templates_pizzas_quantity[index])
    return price * quantity
  })
  return resultStandart
}

document
  .getElementById('check-promo__btn')
  .addEventListener('click', checkPromoCode)
document.querySelector('.first_m').addEventListener('click', decrementPizza)
document.querySelector('.first_p').addEventListener('click', incrementPizza)
document
  .getElementById('new-pizza__btn')
  .addEventListener('click', createNewPizza)

//submitting order data to email
document.getElementById('pay__btn').addEventListener('click', async () => {
  const msg = createLetter(
    order_data,
    +quantityField.textContent,
    document.getElementById('cost').textContent,
    document.getElementById('discount'),
    document.getElementById('taxes').textContent,
    document.getElementById('total').textContent
  )
  const response = await fetch('http://localhost:8080/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg),
  })
  console.log(await response.json())
})
