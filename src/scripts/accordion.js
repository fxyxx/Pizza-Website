function accordion() {
  const items = document.querySelectorAll('.user-info__item')

  items.forEach((item) => {
    const content = item.querySelector('.user-info__item__content')
    content.addEventListener('click', (event) => {
      event.stopPropagation()
    })
    item.addEventListener('click', () => {
      content.classList.toggle('hide')
    })
  })
}

export default accordion
