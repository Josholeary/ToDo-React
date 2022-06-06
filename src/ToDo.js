import React from 'react'
import TDC from './TDC'

export default function ToDo({TD}) {
  return (
        TD.map(todo => {
            return <TDC key={todo.id} todo={todo} />
        })
  )
}
