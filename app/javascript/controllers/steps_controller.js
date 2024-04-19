import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  next() {
    let form = document.querySelector('.needs-validation')

    if(form.checkValidity()) {
      fille_line()
    }
  }

  next_otp() {
    let otp_fields = document.querySelector('#otp').querySelectorAll('.otp-control')
    
    for (let index = 0; index < otp_fields.length; index++) {
      if(otp_fields[index].value != '1') {
        event.preventDefault()
        return
      }
    }

    fille_line()
  }

  back() {
    let icons = document.querySelectorAll('.step-icon-fill')
    let lines = document.querySelectorAll('.step-line-fill')
    
    if(icons.length > 0) {
      icons[icons.length - 1].classList.replace('step-icon-fill', 'step-icon')
    }

    if(lines.length > 0) {
      lines[lines.length - 1].classList.replace('step-line-fill', 'step-line')
    }
  }
}

function fille_line() {
  let icons = document.querySelectorAll('.step-icon')
  let lines = document.querySelectorAll('.step-line')

  if(icons.length > 0) {
    icons[0].classList.replace('step-icon', 'step-icon-fill')
  }

  if(lines.length > 0) {
      lines[0].classList.replace('step-line', 'step-line-fill')
  }
}
