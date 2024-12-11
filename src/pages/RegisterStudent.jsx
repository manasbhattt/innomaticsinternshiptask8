import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterStudent = ({ setStudents }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prev) => [...prev, { id: Date.now(), ...formData }]);
    setFormData({
      name: '',
      email: '',
      age: '',
      class: '',
      address: '',
      phone: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formClass">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" name="class" value={formData.class} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">Register</Button>
    </Form>
  );
};

export default RegisterStudent;
