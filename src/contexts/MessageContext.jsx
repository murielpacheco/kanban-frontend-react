import { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';
export const MessageContext = createContext(null);

export function MessageProvider(props) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('')

  useEffect(() => {
    api.get('messages').then(({ data }) => {
      setMessages(data.messages);
    });
  }, []);

  function handleMessage(event) {
    setMessage(event.target.value)
  }

  function addMessage() {
    const newMessage = {
      message
    }
    api.post('messages', newMessage)
    setMessage('')
  }


  return (
    <MessageContext.Provider value={{
      messages,
      setMessages,
      message,
      setMessage,
      handleMessage,
      addMessage,
    }}>
      {props.children}
    </MessageContext.Provider>
  );
}
