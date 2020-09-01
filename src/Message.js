import React from 'react';
import './Message.css';

function Message(props) {
  const isUser = props.message.user === props.user;

  return (
    <div
      className={`message-box ${isUser ? 'user-message' : 'others-message'}`}
    >
      {!isUser && <p>{props.message.user}</p>}
      <h4>{props.message.text}</h4>
    </div>
  );
}

export default Message;
