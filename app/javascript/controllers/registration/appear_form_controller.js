import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    setTimeout(() => {
      this.element.classList.remove('animated-before')
      this.element.classList.add('animated-after')
    }, 100)
  }
}
