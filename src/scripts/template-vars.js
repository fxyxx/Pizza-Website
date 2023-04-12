export const pizzaOptions = `
  <div class="pizza-options">
    <div class="quantity__text">
      <h4 class="standartName">Select Pizza</h4>
      <div class="customize customize-standart">
        <p>Customize <span>></span></p>
      </div>
    </div>
    <div class="quantity__btn">
      <div id="minus" class="quantity__btn-block sign standart_minus">
        <img src="/images/minus_icon.svg" alt="" />
      </div>
      <div id="quantity" class="quantity__btn-block standart_quantity">0
      </div>
      <div id="plus" class="quantity__btn-block sign standart_plus">
        <img src="/images/plus_icon.svg" alt="" />
      </div>
    </div>
  </div>
`

export const pizzaForm = `
<div class="customize__wrapper-standart hideStandart">
  <div class="customize__item" data-price="19.99" data-name="Pepperoni Pizza">
    <img src="/images/Pepperoni_Pizza.jpg" alt="Pepperoni Pizza" />
    <p>Pepperoni Pizza</p>
  </div>
  <div class="customize__item" data-price="15.99" data-name="Margherita Pizza">
    <img src="/images/Margherita_Pizza.jpg" alt="Margherita Pizza" />
    <p>Margherita Pizza</p>
  </div>
  <div class="customize__item" data-price="22.99" data-name="Hawaiian Pizza">
    <img src="/images/Hawaiian_Pizza.jpg" alt="Hawaiian Pizza" />
    <p>Hawaiian Pizza</p>
  </div>
  <div class="customize__item" data-price="26.99" data-name="Veggie Pizza">
    <img src="/images/Veggie_Pizza.jpg" alt="Veggie Pizza" />
    <p>Veggie Pizza</p>
  </div>
</div>
`

export function createLetter(
  { templates_pizzas, templates_pizzas_quantity },
  custom_quantity,
  cost,
  discount,
  taxes,
  total
) {
  let pizzasName = []
  for (let obj of templates_pizzas) {
    let keys = Object.keys(obj)
    pizzasName.push(...keys)
  }

  let pizzasPrice = []
  for (let obj of templates_pizzas) {
    let values = Object.values(obj)
    pizzasPrice.push(...values)
  }

  return `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          font-size: 16px;
          color: #444;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        p {
          margin: 0 0 10px;
        }
        table {
          border-collapse: collapse;
          margin-bottom: 20px;
          width: 100%;
        }
        td, th {
          border: 1px solid #ccc;
          padding: 8px;
        }
        th {
          text-align: left;
          background-color: #f2f2f2;
        }
        .total {
          font-weight: bold;
        }
        .signature {
          margin-top: 30px;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
    <h1>Your Order</h1>
    <p>Hello,</p>
    <p>Your order includes the following pizzas:</p>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>Custom Pizza</td>
        <td> - </td>
        <td>${custom_quantity}</td>
      </tr>
      ${pizzasName
        .map(
          (item, index) => `
      <tr>
        <td>${item}</td>
        <td>$${pizzasPrice[index]} USD </td>
        <td>${templates_pizzas_quantity[index]}</td>
      </tr>
      `
        )
        .join('')}
      </tbody>
    </table>
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${cost} USD</td>
          </tr>
          <tr>
            <td>Discount (20%)</td>
            <td>${
              discount.textContent === '$0.00'
                ? 'Discount has not been applied'
                : discount.textContent
            } USD</td>
          </tr>
          <tr>
            <td>Tax (12%)</td>
            <td>${taxes} USD</td>
          </tr>
          <tr class="total">
            <td>Total cost</td>
            <td>${total} USD</td>
          </tr>
        </tbody>
      </table>
      <p class="signature">Best regards,<br>The pizza mania team</p>
    </body>
  </html>
`
}
