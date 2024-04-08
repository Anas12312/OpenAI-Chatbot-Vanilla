import { generateMessage } from './Message';
import './style.css'

const chatEl = document.getElementById('chat');

window.addEventListener('keypress', (e) => {
    if (e.key === 'a') {
        chatEl.appendChild(generateMessage('gi', 'user'))
    }
})