import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Car Technical Assistant',
    initialMessages: [
        createChatBotMessage("Hello! I am a Car Technical assistant, how can I help you today?")
    ]
}

export default config;