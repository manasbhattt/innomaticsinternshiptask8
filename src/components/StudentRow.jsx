import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StudentRow = ({ student }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.class}</td>
      <td>
        <Link to={`/students/${student.id}`}>
          <Button variant="info">View</Button>
        </Link>
        <Link to={`/update/${student.id}`}>
          <Button variant="warning">Edit</Button>
        </Link>
      </td>
    </tr>
  );
};

export default StudentRow;
