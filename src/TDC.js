import React from 'react'
import ToDo from './ToDo'

export default function TDC({todo, toggle}) {
  function todoclick() {
      toggle(todo.id)
  }

  return (
    <div>
        <label>
            {todo.name}
            <input type='checkbox' checked={todo.complete} onChange={todoclick} />
        </label>
    </div>
  )
}
