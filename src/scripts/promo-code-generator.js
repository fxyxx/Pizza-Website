function generatePromoCode() {
  const promo_link = document.getElementById('promo-code')

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    code += chars[randomIndex]
  }
  promo_link.textContent = code
  return code
}

export default generatePromoCode
