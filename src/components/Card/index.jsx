import { useState, useEffect, useContext } from 'react';
import { MessageContext } from '../../contexts/MessageContext';
import { api } from '../../services/api';
import { CardWrapper } from './styles';

export function Card() {
  const {messages} = useContext(MessageContext)

  return (
    <>
      {messages.map((message) => (
        <CardWrapper key={message._id}>
          <button>X</button>
          <span>{message.message}</span>
        </CardWrapper>
      ))}
    </>  
  );
}
;