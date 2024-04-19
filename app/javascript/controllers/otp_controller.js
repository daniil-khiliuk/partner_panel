import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const inputs = document.querySelectorAll('#otp input[type="text"]');
        OTPInput(inputs)
    }

    send() {
        countdown(event.target)
        event.preventDefault()
    }
}

function OTPInput(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function(event) { 
            if (event.key==="Backspace" ) { 
                inputs[i].value='' ; 
                if (i !==0) inputs[i - 1].focus(); 
            } else { 
                if (i===inputs.length - 1 && inputs[i].value !=='' ) { 
                    return true; 
                } else if (event.keyCode> 47 && event.keyCode < 58) { 
                    inputs[i].value=event.key; 
                    if (i !==inputs.length - 1) inputs[i + 1].focus(); 
                    event.preventDefault(); 
                } else if (event.keyCode> 64 && event.keyCode < 91) { 
                    inputs[i].value=String.fromCharCode(event.keyCode); 
                    if (i !==inputs.length - 1) inputs[i + 1].focus(); 
                    event.preventDefault(); 
                } 
            } 
        }); 
    } 
}

function countdown(el) {
    let sec = 60

    let timerID = setInterval(() => {
        if (sec <= 0) {
            el.classList.replace('btn-disabled', 'btn-primary')
            el.textContent = 'Отправить код'
            return
        } else {
            if(sec != 60) {
                el.classList.replace('btn-primary', 'btn-disabled')
                el.textContent = sec;
            } 
            sec = sec - 1
        }
    }, 1000)

    setTimeout(() => { clearInterval(timerID); }, 61000);
}
