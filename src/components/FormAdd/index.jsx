import React, { useState } from 'react';

import { Container,NewTask, AddTask, TextArea} from './styles';

export function FormAdd({handleMessage, message,addMessage}) {
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