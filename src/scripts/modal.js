import MicroModal from 'micromodal'

function мodal() {
  MicroModal.init()

  document.getElementById('discount-btn').addEventListener('click', () =>
    MicroModal.show('modal', {
      onClose: function () {
        document.body.classList.remove('modal-is-open')
      },
      onShow: function () {
        document.body.classList.add('modal-is-open')
      },
    })
  )
}

export default мodal
