'use client'
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "../config";
import ActionProvider from "../Actionprovider";
import MessageParser from "../MessageParser";
import AutoComplete from './AutoComplete';

const suggestions = [
  'How to change a tire?',
  'What is the best oil for my car?',
  'How to check engine oil level?',
  'What does the check engine light mean?',
  'How to jump-start a car?',
  'How to replace windshield wipers?',
  'What is the recommended tire pressure?',
  'How to change car battery?',
  'How to fix a flat tire?',
  'What is the maintenance schedule for my car?'
];
 

const ChatComponent = () => {
    const handleSelectSuggestion = (suggestion) => {
        actionProvider.handleSuggestion(suggestion);
    };

    return (
        <div className="chatbot-icon">
            <AutoComplete suggestions = {suggestions} onSelect = {handleSelectSuggestion} />
            <Chatbot
             config = {config}
             actionProvider = {ActionProvider}
             messageParser = {MessageParser}   
            />
        </div>
    )
    
}

export default ChatComponent;