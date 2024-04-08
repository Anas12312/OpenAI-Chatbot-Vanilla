import { UserMessage } from './Message';
import './style.css'

let userMessage = null;

const chatEl = document.getElementById('chat');
const inputEl = document.getElementById('input-area')
const sendButtonEl = document.getElementById('send-button')

const handleInpur = () => {
    userMessage = inputEl.textContent.trim()
    if(!userMessage) return;
    inputEl.textContent = ""
    chatbox.appendChild(generateMessage(userMessage, "user"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        const incomingChatLi = generateMessage("Thinking...", "bot");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        // generateResponse(incomingChatLi);
    }, 600);
}


window.addEventListener('keypress', (e) => {
    if(e.key === 'a') {
        
        chatEl.innerHTML = chatEl.innerHTML + UserMessage('hello');
        chatEl.innerHTML = chatEl.innerHTML + UserMessage('hello');
        
        chatEl.innerHTML = chatEl.innerHTML + BotMessage('hi');
    }
})