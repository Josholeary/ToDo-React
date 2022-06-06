import React from 'react'
import TDC from './TDC'

export default function ToDo({TD, toggle}) {
  return (
        TD.map(todo => {
            return <TDC key={todo.id} toggle={toggle} todo={todo} />
        })
  )
}
