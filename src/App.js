import ToDo from "./ToDo";
import React,{ useState, useRef, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

const LSK = 'todoapp.ToDos'


function App() {

  const [ToDos, setToDos] = useState([])
  const NameRef = useRef()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(LSK))
    if (stored) setToDos(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem(LSK, JSON.stringify(ToDos))
  }, [ToDos])

  function toggle(id) {
    const newtodo = [...ToDos]
    const todo = newtodo.find(todo => todo.id === id)
    todo.Complete = !todo.Complete
    setToDos(newtodo)
  }

  function AddToDo(e){
    const name = NameRef.current.value
    if (name === '') return
    console.log(name)
    setToDos(prevToDos => {
      return [...prevToDos, {id: uuidv4(), name:name, Complete: false }]
    })
    NameRef.current.value = null
  }

  function ClearToDo() {
    const newtodo = ToDos.filter(todo => !todo.Complete)
    setToDos(newtodo)
  }

  return (
    <>
      <ToDo TD={ToDos} toggle={toggle} />
      <input ref={NameRef} type="text" />
      <button onClick={AddToDo}> Add to list</button>
      <button onClick={ClearToDo}> Empty list</button>
      <div>{ToDos.filter(todo => !todo.Complete).length} left to do</div>
    </>

  )
}

export default App;
