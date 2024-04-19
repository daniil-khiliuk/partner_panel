document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.registration-form').querySelector('.btn-step')

    btn.addEventListener('click', () => {
        let icons = document.querySelectorAll('.step-icon')
        let lines = document.querySelectorAll('.step-line')

        if(icons.length > 0) {
            icons[0].classList.replace('step-icon', 'step-icon-fill')
        }
    
        if(lines.length > 0) {
            lines[0].classList.replace('step-line', 'step-line-fill')
        }
    })
})