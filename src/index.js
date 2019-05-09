import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  Input,
  InputGroup
} from 'reactstrap'

const initialTodoList = [
  'Teach Intro to React Hooks',
  'Get coffee',
  'Fix all the bugs'
]

function TodoApp() {
  const {
    todo,
    todoList,
    handleInputChange,
    handleRemoveClick,
    handleSubmit
  } = useTodoState()

  return (
    <section>
      <h1>TODO</h1>
      <ListGroup>
        {todoList.map((item, i) => {
          return (
            <ListGroupItem key={i}>
              {item}
              <Button onClick={() => handleRemoveClick(i)} close />
            </ListGroupItem>
          )
        })}
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input value={todo} onChange={handleInputChange} />
          <Button>Add</Button>
        </InputGroup>
      </Form>
    </section>
  )
}

function useTodoState() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodolist] = useState(initialTodoList)

  function handleInputChange(e) {
    setTodo(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTodolist([...todoList, todo])
    setTodo('')
  }

  function handleRemoveClick(todoIndex) {
    const newTodolist = todoList.filter((_, i) => i !== todoIndex)
    setTodolist(newTodolist)
  }

  return { todo, todoList, handleInputChange, handleRemoveClick, handleSubmit }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<TodoApp />, rootElement)

// Complete hooks demo
// https://fb.me/f8-react-hooks-complete

// Class example
// https://fb.me/f8-react-hooks-class
