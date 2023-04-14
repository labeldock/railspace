import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  click(event) {
    alert("제 Alert 이벤트를 지워 보세요")
    this.element.setAttribute("contenteditable", "true")
    this.element.focus()
  }

  blur(event) {
    this.element.removeAttribute("contenteditable")
    this.save()
  }

  keydown(event) {
    if (event.keyCode == 13) {
      event.preventDefault()
      this.element.removeAttribute("contenteditable")
    }
  }

  save() {
    // TODO
  }
}