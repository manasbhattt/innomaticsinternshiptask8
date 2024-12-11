import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section text-center text-white">
        <div className="container">
          <h1 className="display-4">Welcome to the Student Management Portal</h1>
          <p className="lead">Manage your students efficiently and effortlessly.</p>
          <a href="/register" className="btn btn-light btn-lg">Register a Student</a>
        </div>
      </div>
      <div className="features-section mt-5">
        <div className="container">
          <h2 className="text-center">Features</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="feature-box text-center p-3">
                <h3>Student Registration</h3>
                <p>Easily register new students with our simple form.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box text-center p-3">
                <h3>View Student List</h3>
                <p>Quickly access and manage the list of registered students.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box text-center p-3">
                <h3>Edit and Delete</h3>
                <p>Update student information or remove them from the list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
