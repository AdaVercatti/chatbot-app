import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';


function App() {
  const [chatMessages,setChatMessages] = useState([])
  return (
    chatMessages.length === 0 ? (
    <div>
      <p className="initial-text">Welcome to the chatbot project! Send a message using the textbox below.</p>
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>):
    (<div className="app-container">
      <ChatMessages chatMessages={chatMessages}/>
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  )
  );
}

export default App
