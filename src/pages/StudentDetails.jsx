import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  return (
    <Card>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Email: {student.email}</Card.Text>
        <Card.Text>Age: {student.age}</Card.Text>
        <Card.Text>Class: {student.class}</Card.Text>
        <Card.Text>Address: {student.address}</Card.Text>
        <Card.Text>Phone: {student.phone}</Card.Text>
        <Link to={`/update/${student.id}`}>
          <Button variant="warning">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default StudentDetails;
