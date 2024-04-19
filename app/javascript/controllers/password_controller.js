import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ 'inputPassword', 'toggle' ]

    showToggle() {
        this.inputPasswordTarget.classList.add('input-password')
        this.toggleTarget.classList.remove('d-none')
    }

    togglePassword() {
        if(this.inputPasswordTarget.type === 'password') {
            this.inputPasswordTarget.type = 'text'
            this.toggleTarget.setAttribute("aria-label", "Hide password.")
        } else {
            this.inputPasswordTarget.type = 'password'
            this.toggleTarget.setAttribute(
                "aria-label",
                "Show password as plain text. " +
                "Warning: this will display your password on the screen."
            );
        }
    }

    checkPassword() {
        let pass = this.inputPasswordTarget.value

        if (is_pass_lv4(pass)) {
            set_pass_lv4()
        } else if(is_pass_lv3(pass)) {
            set_pass_lv3()
        } else if (is_pass_lv2(pass)) {
            set_pass_lv2()
        } else if (is_pass_lv1(pass)) {
            set_pass_lv1()
        } else {
            set_pass_lv0()
        }
    }
}

// длина >= 8 && две буквы и две цифры2
function is_pass_lv1(pass) {
    if(pass.match(/.{8}/) && pass.match(/(?=.*[0-9].*)/) && (pass.match(/(?=.*[a-z].*)/) || pass.match(/(?=.*[A-Z].*)/))) {
        return true
    } else {
        return false
    }
}

function is_pass_lv2(pass) {
    if(is_pass_lv1(pass) && pass.match(/(?=.*[A-Z].*)/) && pass.match(/(?=.*[a-z].*)/)) {
        return true
    } else {
        return false
    }
}

function is_pass_lv3(pass) {
    if(is_pass_lv1(pass) && is_pass_lv2(pass) && pass.match(/(?=.*[!@#$&*])/) ) {
        return true
    } else {
        return false
    }
}

function is_pass_lv4(pass) {
    if(is_pass_lv1(pass) && is_pass_lv2(pass) && is_pass_lv3(pass) && pass.length > 16) {
        return true
    } else {
        return false
    }
}

function set_pass_lv4() {
    let pass_lines = document.querySelectorAll('.password .password-line')
    let pass_capt = document.querySelector('.password .password-caption')

    clear_pass_line(pass_lines)

    pass_lines[0].classList.add('green-bg')
    pass_lines[1].classList.add('green-bg')
    pass_lines[2].classList.add('green-bg')
    pass_lines[3].classList.add('green-bg')

    pass_capt.textContent = 'Пароль очень надежный'
}

function set_pass_lv3() {
    let pass_lines = document.querySelectorAll('.password .password-line')
    let pass_capt = document.querySelector('.password .password-caption')

    clear_pass_line(pass_lines)

    pass_lines[0].classList.add('blue-bg')
    pass_lines[1].classList.add('blue-bg')
    pass_lines[2].classList.add('blue-bg')
    pass_lines[3].classList.add('disable-bg')

    pass_capt.textContent = 'Пароль надежный'
}

function set_pass_lv2() {
    let pass_lines = document.querySelectorAll('.password .password-line')
    let pass_capt = document.querySelector('.password .password-caption')

    clear_pass_line(pass_lines)

    pass_lines[0].classList.add('yellow-bg')
    pass_lines[1].classList.add('yellow-bg')
    pass_lines[2].classList.add('disable-bg')
    pass_lines[3].classList.add('disable-bg')

    pass_capt.textContent = 'Пароль нормальный'
}

function set_pass_lv1() {
    let pass_lines = document.querySelectorAll('.password .password-line')
    let pass_capt = document.querySelector('.password .password-caption')

    clear_pass_line(pass_lines)

    pass_lines[0].classList.add('red-bg')
    pass_lines[1].classList.add('disable-bg')
    pass_lines[2].classList.add('disable-bg')
    pass_lines[3].classList.add('disable-bg')

    pass_capt.textContent = 'Пароль слабый'
}

function set_pass_lv0() {
    let pass_lines = document.querySelectorAll('.password .password-line')
    let pass_capt = document.querySelector('.password .password-caption')

    clear_pass_line(pass_lines)

    pass_lines[0].classList.add('disable-bg')
    pass_lines[1].classList.add('disable-bg')
    pass_lines[2].classList.add('disable-bg')
    pass_lines[3].classList.add('disable-bg')

    pass_capt.textContent = 'Пароль очень слабый'
}

function clear_pass_line(pass_lines) {
    let state_classes = ['disable-bg', 'red-bg', 'yellow-bg', 'green-bg']

    for (let index = 0; index < state_classes.length; index++) {
        pass_lines[0].classList.remove(state_classes[index])
        pass_lines[1].classList.remove(state_classes[index])
        pass_lines[2].classList.remove(state_classes[index])
        pass_lines[3].classList.remove(state_classes[index])
    }
}
