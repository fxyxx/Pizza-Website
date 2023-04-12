function changeTheme() {
  const themeBtn = document.getElementById('theme_btn')

  themeBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const body = document.body

    const mainElements = document.querySelectorAll(
      '.header h1, .header h2, .header a'
    )
    const mainElements2 = document.querySelectorAll(
      '.menu h3, .menu h4, .menu p'
    )
    const mainElements3 = document.querySelectorAll(
      '.month-offer h2, .month-offer li'
    )
    const mainElements4 = document.querySelectorAll('.contact-us h3')
    const mainElements5 = document.querySelectorAll(
      '.take-order h4, .take-order p, .take-order button'
    )

    const secondElements = document.querySelectorAll('.header p')
    const secondElements2 = document.querySelectorAll('.menu h2')
    const secondElements3 = document.querySelectorAll('h2 span, .diagonal-line')
    const secondElements4 = document.querySelectorAll(
      '.contact-us p, .form__wrapper label'
    )
    const secondElements5 = document.querySelectorAll(
      '.order-info__customize label, .order-info__customize h4, .order-info__bill-details h3, .take-order__logo h2'
    )
    const secondElements5_1 = document.querySelectorAll(
      '.take-order__list li a'
    )
    const secondElements5_2 = document.querySelectorAll('.quantity__price p')
    const secondElements5_3 = document.querySelectorAll(
      '.quantity__btn-block p'
    )
    const secondElements5_4 = document.querySelectorAll(
      '.order-info__customize > p'
    )

    const buttons = document.querySelectorAll('button')
    const buttons4 = document.querySelectorAll('.contact-us button')
    const buttons5 = document.querySelectorAll('.take-order button')

    const inputs = document.querySelectorAll('input')
    const inputs4 = document.querySelectorAll('.form__wrapper input')

    const helpers3 = document.querySelectorAll('.month-offer h2')
    const helpers4 = document.querySelectorAll('.contact-us__card')
    const helpers5 = document.querySelectorAll(
      '.user-info__item, .take-order__order-info'
    )
    const helpers5_1 = document.querySelectorAll('.item__img-container')

    const bar = document.querySelectorAll('.take-order__bar')

    if (body.classList.value === 'dark_theme') {
      body.classList.value = 'light_theme'

      themeBtn.querySelector('img').src = '/images/light-theme_icon.svg'
      document
        .querySelectorAll('.logo_img')
        .forEach((logo) => (logo.src = '/images/logo_light.svg'))

      document.getElementById('contact-us').style.backgroundImage =
        "url('/images/contact-us_light.png')"

      mainElements.forEach((el) => (el.style.color = 'var(--color-orange-W)'))
      secondElements.forEach((el) => (el.style.color = 'var(--color-brown-W)'))
      buttons.forEach(
        (el) => (
          (el.style.color = 'var(--color-background-W)'),
          (el.style.backgroundColor = 'var(--color-orange-W)'),
          (el.style.borderColor = 'var(--color-orange-W)')
        )
      )
      inputs.forEach((el) => (el.style.borderColor = 'var(--color-orange-W)'))
      mainElements2.forEach((el) => (el.style.color = 'var(--color-brown-W)'))
      secondElements2.forEach(
        (el) => (el.style.color = 'var(--color-orange-W)')
      )
      mainElements3.forEach((el) => (el.style.color = 'var(--color-brown-W)'))
      secondElements3.forEach(
        (el) => (
          (el.style.color = 'var(--color-orange-W)'),
          (el.style.borderColor = 'var(--color-orange-W)')
        )
      )
      mainElements4.forEach((el) => (el.style.color = 'var(--color-orange-W)'))
      secondElements4.forEach(
        (el) => (el.style.color = 'var(--color-background-B)')
      )
      buttons4.forEach(
        (el) => (
          (el.style.color = 'var(--color-background-B)'),
          (el.style.backgroundColor = 'var(--color-orange-W)')
        )
      )
      inputs4.forEach(
        (el) => (
          (el.style.borderColor = 'var(--color-background-B)'),
          (el.style.color = 'var(--color-background-B)')
        )
      )
      helpers4.forEach(
        (el) => (el.style.backgroundColor = 'var(--color-grey-W)')
      )
      mainElements5.forEach(
        (el) => (el.style.color = 'var(--color-background-B)')
      )
      secondElements5.forEach(
        (el) => (el.style.color = 'var(--color-orange-W)')
      )
      secondElements5_1.forEach((el) => (el.style.color = 'var(--color-white)'))
      secondElements5_2.forEach((el) => (el.style.color = '#ff4141'))
      secondElements5_3.forEach((el) => (el.style.color = '#019310'))
      secondElements5_4.forEach((el) => (el.style.color = '#c55e90'))

      buttons5.forEach(
        (el) => (
          (el.style.color = 'var(--color-background-B)'),
          (el.style.backgroundColor = 'transparent')
        )
      )
      helpers5.forEach(
        (el) => (el.style.backgroundColor = 'var(--color-grey-W)')
      )
      helpers5_1.forEach(
        (el) => (el.style.backgroundColor = 'var(--color-background-B)')
      )
      bar.forEach((el) => (el.style.backgroundColor = '#212121'))
    } else {
      body.classList.value = 'dark_theme'

      themeBtn.querySelector('img').src = '/images/dark-theme_icon.svg'
      document
        .querySelectorAll('.logo_img')
        .forEach((logo) => (logo.src = '/images/logo_dark.svg'))

      document.getElementById('contact-us').style.backgroundImage =
        "url('/images/contact-us.png')"

      mainElements.forEach((el) => (el.style.color = 'var(--color-orange-B)'))
      secondElements.forEach((el) => (el.style.color = 'var(--color-orange-B)'))
      buttons.forEach(
        (el) => (
          (el.style.backgroundColor = 'var(--color-orange-B)'),
          (el.style.borderColor = 'var(--color-orange-B)')
        )
      )
      inputs.forEach((el) => (el.style.borderColor = 'var(--color-orange-B)'))
      mainElements2.forEach((el) => (el.style.color = 'var(--color-beige-B)'))
      secondElements2.forEach(
        (el) => (el.style.color = 'var(--color-orange-B)')
      )
      mainElements3.forEach((el) => (el.style.color = 'var(--color-beige-B)'))
      secondElements3.forEach(
        (el) => (
          (el.style.color = 'var(--color-orange-B)'),
          (el.style.borderColor = 'var(--color-orange-B)')
        )
      )
      helpers3.forEach((el) => (el.style.color = 'var(--color-white)'))
      mainElements4.forEach((el) => (el.style.color = 'var(--color-white)'))
      secondElements4.forEach((el) => (el.style.color = 'var(--color-white)'))
      buttons4.forEach(
        (el) => (
          (el.style.color = 'var(--color-white)'),
          (el.style.backgroundColor = 'var(--color-orange-B)')
        )
      )
      inputs4.forEach(
        (el) => (
          (el.style.borderColor = 'var(--color-white)'),
          (el.style.color = 'var(--color-white)')
        )
      )
      helpers4.forEach(
        (el) => (el.style.backgroundColor = 'rgba(255, 255, 255, 0.05)')
      )
      mainElements5.forEach((el) => (el.style.color = 'var(--color-white)'))
      secondElements5.forEach(
        (el) => (el.style.color = 'var(--color-orange-B)')
      )
      secondElements5_1.forEach((el) => (el.style.color = 'var(--color-white)'))
      secondElements5_2.forEach((el) => (el.style.color = '#ff4141'))
      secondElements5_3.forEach((el) => (el.style.color = '#019310'))
      secondElements5_4.forEach((el) => (el.style.color = '#c55e90'))
      buttons5.forEach(
        (el) => (
          (el.style.color = 'var(--color-white)'),
          (el.style.backgroundColor = 'transparent')
        )
      )
      helpers5.forEach(
        (el) => (el.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')
      )
      helpers5_1.forEach(
        (el) => (el.style.backgroundColor = 'var(--color-white)')
      )
      bar.forEach(
        (el) => (el.style.backgroundColor = 'rgba(255, 255, 255, 0.05)')
      )
    }
  })
}

export default changeTheme
