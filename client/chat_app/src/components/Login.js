import React, { useRef } from "react"
import { Button, Container, Form } from "react-bootstrap"

import { v4 as uuidv4 } from "uuid"

const Login = ({ onIdSubmit }) => {
  const idRef = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    onIdSubmit(idRef.current.value)
  }

  const CreateIdHandler = (e) => {
    e.preventDefault()
    onIdSubmit(uuidv4())
  }

  return (
    <Container className="align-item-center d-flex" style={{ height: "100vh" }}>
      <Form onSubmit={submitHandler} className="w-100">
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          login
        </Button>
        <Button onClick={CreateIdHandler} variant="secondary">
          Create a new Id
        </Button>
      </Form>
    </Container>
  )
}

export default Login
