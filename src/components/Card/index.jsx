import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { CardWrapper } from './styles';

export function Card() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    api.get('messages').then(({data}) => {
      setMessages(data.messages)
    })
  },[])

  return (
    <>
      {messages.map((message) => (
        <CardWrapper key={message._id}>
          <span>{message.message}</span>
        </CardWrapper>
      ))}
    </>  
  );
}
;