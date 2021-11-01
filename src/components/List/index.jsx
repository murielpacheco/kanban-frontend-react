import { useContext, useState } from 'react';
import { MessageContext } from '../../contexts/MessageContext';
import { api } from '../../services/api';
import {Card} from '../Card';
import {FormAdd} from '../FormAdd'
import { Container, ListTag, Header, ListContainer} from './styles';

function List({title, tag}) {
  const {message, handleMessage, addMessage} = useContext(MessageContext)

  return (
    <ListContainer>  
    <Container>
      <Header>
      <h2>{title}</h2>
      <ListTag tag={tag}/>
      </Header>
      <Card/>
    </Container>
      <FormAdd>
      </FormAdd>
    </ListContainer>
  );
}

export default List;