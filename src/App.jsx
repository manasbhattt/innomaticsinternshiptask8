import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFoundPage from './pages/404Page';
import Dashboard from './pages/Dashboard';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import useStudents from './utils/data';


const App = () => {
  const [students, setStudents] = useState(useStudents);
  
  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents((prevStudents) => 
      prevStudents.map((student) => 
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents((prevStudents) => 
      prevStudents.filter((student) => student.id !== id)
    );
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard students={students} />} />
          <Route 
            path="/students" 
            element={
              <StudentList 
                students={students} 
                onDelete={deleteStudent} 
                onUpdate={updateStudent} 
              />
            } 
          />
          <Route 
            path="/register" 
            element={<StudentForm onSubmit={addStudent} />} 
          />
          <Route 
            path="/edit/:id" 
            element={<StudentForm students={students} onUpdate={updateStudent} />} 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
