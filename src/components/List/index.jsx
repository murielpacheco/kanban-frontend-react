import { useState } from 'react';
import { api } from '../../services/api';
import {Card} from '../Card';
import {FormAdd} from '../FormAdd'
import { Container, ListTag, Header} from './styles';

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
    <>  
    <Container>
      <Header>
      <h2>{title}</h2>
      <ListTag tag={tag}/>
      </Header>
      <Card/>
      <FormAdd handleMessage={handleMessage} message={message} addMessage={addMessage}>
      </FormAdd>
    </Container>
    </>
  );
}

export default List;