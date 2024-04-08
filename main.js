
import './style.css'

let userMessage = null;

const chatEl = document.getElementById('chat');
const inputEl = document.getElementById('input-area')
const sendButtonEl = document.getElementById('send-button')


const handleInput = () => {
    userMessage = inputEl.value.trim()
    if (!userMessage) return;
    inputEl.value = ""
    chatEl.appendChild(generateMessage(userMessage, "user"));
    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = generateMessage("Thinking...", "bot");
        chatEl.appendChild(incomingChatLi);
        window.scrollTo(0, document.body.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}
const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer sk-8IcVsAImqrk7JJKaeebBT3BlbkF` + "JN7obCHhZeUPJt86EyiYf"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => window.scrollTo(0, document.body.scrollHeight));
}

const UserMessage = (text) => {
    const liEl = document.createElement('li');
    liEl.className = "py-2 sm:py-4";
    liEl.innerHTML = `
            <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div class="max-w-2xl flex gap-x-2 sm:gap-x-4">
                    <span class="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                        <span class="text-sm font-medium text-white leading-none">AZ</span>
                    </span>

                    <div class="grow mt-2 space-y-3">
                        <p class="text-gray-800">
                            ${text}
                        </p>
                    </div>
                </div>
            </div>`;
    return liEl;
}

const BotMessage = (text) => {
    const liEl = document.createElement('li');
    liEl.className = "max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4";
    liEl.innerHTML = `
            <svg class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="38" rx="6" fill="#2563EB"/>
            <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5"/>
            <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5"/>
            <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
            </svg>

            <div class="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
                <!-- Card -->
                <div class="space-y-3">
                <p class="text-sm text-gray-800">
                    ${text}
                </p>
                </div>
                <!-- End Card -->
            </div>`;
    return liEl;
}

const generateMessage = (text, type) => {
    if (type === 'user') return UserMessage(text);
    return BotMessage(text);
}
inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleInput();
    }
})
sendButtonEl.addEventListener("click", () => {
    handleInput()
})