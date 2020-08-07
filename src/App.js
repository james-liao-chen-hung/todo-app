import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from "./Todo";
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Write Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} variant="contained" type="submit" onClick={addTodo}>ADD Todo</Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />

        ))}
      </ul>
    </div>
  );
}

export default App;
