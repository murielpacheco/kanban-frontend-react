import React, { useContext, useState } from 'react';
import { MessageContext } from '../../contexts/MessageContext';

import { Container,NewTask, AddTask, TextArea} from './styles';

export function FormAdd() {
  const {message, handleMessage, addMessage} = useContext(MessageContext)
  
  const [addTask, setAddTask] = useState(true)

  function handleFormTask() {
    setAddTask(false)
  }
  return (
    <Container>
      {addTask ? <NewTask>
        <span>Add a new task</span>
        <button onClick={handleFormTask}>+</button>
      </NewTask> 
      : (
        <>
        <TextArea onChange={handleMessage} value={message}/>
        <AddTask onClick={addMessage}>+</AddTask>
        </>
      )
      }
    </Container>
  );
}