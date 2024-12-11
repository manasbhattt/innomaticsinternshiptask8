import React from 'react';
import StudentRow from './StudentRow';
import { Table } from 'react-bootstrap';

const StudentList = ({ students }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Class</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow key={student.id} student={student} />
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
