function burgerMenu() {
  const nav = document.querySelector('nav')
  const burger = document.querySelector('.burger')

  document.querySelector('.burger').addEventListener('click', function () {
    burger.classList.toggle('active')
    nav.classList.toggle('open')
  })

  document.querySelectorAll('.nav__list>li').forEach((li) =>
    li.addEventListener('click', () => {
      burger.classList.toggle('active')
      nav.classList.toggle('open')
    })
  )
}

export default burgerMenu
