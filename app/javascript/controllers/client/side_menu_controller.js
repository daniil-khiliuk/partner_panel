import { Controller } from "@hotwired/stimulus"
import { Collapse } from "bootstrap"


export default class extends Controller {
    static targets = [ 'controller' ]

    toggle() {
        this.controllerTarget.classList.toggle('show')

        if(this.controllerTarget.classList.contains('show')) {
            this.controllerTarget.classList.replace('col-1', 'col-2')
        } else {
            this.controllerTarget.classList.replace('col-2', 'col-1')
        }
    }

    toggleSubMenu() {
        // let el = document.querySelector(`#${event.params['collapse']}`)
        // let collapse_el = new Collapse(el)
        // collapse_el.toggle()
    }
}