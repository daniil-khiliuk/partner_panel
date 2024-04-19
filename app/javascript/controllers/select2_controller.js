import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    $(this.element).ready(function() {
      $('.js-example-basic-single').select2({
          theme: 'bootstrap-5',
          dropdownPosition: 'below'
      });
  });
  }
}
