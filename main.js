import { UserMessage } from './Message';
import './style.css'

const chatEl = document.getElementById('chat');

window.addEventListener('keypress', (e) => {
    if(e.key === 'a') {
        
        chatEl.innerHTML = chatEl.innerHTML + UserMessage('hello');
        chatEl.innerHTML = chatEl.innerHTML + UserMessage('hello');
        
        chatEl.innerHTML = chatEl.innerHTML + BotMessage('hi');
    }
})