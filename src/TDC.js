import React from 'react'
import ToDo from './ToDo'

export default function TDC({todo}) {
  return (
    <div>
        <label>
            {todo.name}
            <input type='checkbox' checked={todo.complete} />
        </label>
    </div>
  )
}
