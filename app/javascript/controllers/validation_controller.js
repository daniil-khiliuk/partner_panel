import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'input', 'btn' ]

  valid() {
    let inputs = this.inputTargets
    
    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      
      if(element.value == '') {
        this.btnTarget.classList.replace('btn-primary', 'btn-disabled')
        return
      }

      this.btnTarget.classList.replace('btn-disabled', 'btn-primary')
    }
  }
}