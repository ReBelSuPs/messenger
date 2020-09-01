import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Message from './Message';
import firebase from 'firebase';
import db from './firebase';

function App() {
  const [input, setInput] = useState('');
  const [user, setUser] = useState('');
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUser(prompt('Enter your name'));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      user: user,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='App'>
      <div className='messages-container'>
        {messages.map(({ id, message }) => {
          return <Message key={id} user={user} message={message}></Message>;
        })}
        <div ref={messagesEndRef}></div>
      </div>
      <form className='user-input'>
        <input
          value={input}
          placeholder='Type a message'
          onChange={(e) => setInput(e.target.value)}
          type='text'
        />
        <button disabled={!input} type='submit' onClick={sendMessage}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default App;
