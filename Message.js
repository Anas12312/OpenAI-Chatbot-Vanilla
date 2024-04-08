const UserMessage = (text) => {
    return `
        <!-- Chat Bubble -->
        <li class="py-2 sm:py-4">
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
        </div>
        </li>
        <!-- End Chat Bubble -->`;
}

const BotMessage = (text) => {
    return `
        <!-- Chat Bubble -->
        <li class="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
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
        </div>
        </li>
        <!-- End Chat Bubble -->`;
}
export const generateMessage = (text, type) =>  {
    if(type === 'user') return UserMessage(text);
    return BotMessage(text);
}