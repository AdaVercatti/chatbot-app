import {useState} from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'
import LoadingGif from '../assets/loading-spinner.gif'

function ChatInput({chatMessages,setChatMessages}) {
        const [inputText,setInputText] = useState('')
   
        function saveInputText(){
            setInputText(event.target.value)
        }

        const SendMessage = async ()=> {
          if(inputText !== '' && !chatMessages.some(chat => chat.message === 'Loading...')) {
            const newChatMessages = [...chatMessages,{
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID() 
            }]

            setChatMessages(newChatMessages)
            
            setInputText('')
            setChatMessages([...newChatMessages,{
                message: <img className='loading-image' src={LoadingGif}/>,
                sender: 'robot',
                id: crypto.randomUUID() 
            }])
            const result =  await Chatbot.getResponseAsync(inputText)
            setChatMessages([...newChatMessages,{
                message: result,
                sender: 'robot',
                id: crypto.randomUUID() 
            }])}
        }

        const eventKey = ()=> {
          if(event.key === 'Enter'){
            SendMessage()
          }
          if(event.key === 'Escape'){
            setInputText('')
          }
        }


        return (
          <div className="chat-input-container">
            <input className="chat-input" placeholder="send a message to chatbot" size="30" onChange={saveInputText} value={inputText} onKeyDown={eventKey}/>
            <button className="send-button" onClick={SendMessage}>Send</button>
          </div>
        );
      }


export default ChatInput