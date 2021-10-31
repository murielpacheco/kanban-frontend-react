import { useState } from 'react';
import { api } from '../../services/api';
import {Card} from '../Card';
import { Container, ListTag, Header, Footer, Addtask} from './styles';

function List({title, tag}) {
  const [message, setMessage] = useState('')
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
    <Container>
      <Header>
      <h2>{title}</h2>
      <ListTag tag={tag}/>
      </Header>
      <Card/>

      <Footer onChange={handleMessage} value={message}/>
      <Addtask onClick={addMessage}>+</Addtask>
    </Container>
  );
}

export default List;