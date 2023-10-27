const text = 'Logan Pritchett';
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector('.typing-effect').textContent += text[index];
        index++;
        setTimeout(typeEffect, 150); // 150ms delay between characters
    } else {
        // Once typing is finished, introduce a delay before removing the blinking cursor
        setTimeout(() => {
            document.querySelector('.typing-effect').style.borderRight = 'none';
        }, 2000); // 2s delay before removing cursor
    }
}

// Call the function when the document loads
document.addEventListener('DOMContentLoaded', typeEffect);