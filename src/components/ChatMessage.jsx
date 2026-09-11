import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

function ChatMessage({ message, sender }) {
  return (
    (sender === "user" && (
      <div className="chat-message-user">
        <div className="chat-message-text">{message}</div>
        <img src={UserProfileImage} className="chat-message-profile" />
      </div>
    )) ||
    (sender === "robot" && (
      <div className="chat-message-robot">
        <img src={RobotProfileImage} className="chat-message-profile" />
        <div className="chat-message-text">{message}</div>
      </div>
    ))
  );
}

export default ChatMessage;
