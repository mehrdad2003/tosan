import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>کد محصول روا وارد کنید</Form.Label>
          <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
        </Form.Group>
     
       
      </Form.Row>
    </Form>
  )
}