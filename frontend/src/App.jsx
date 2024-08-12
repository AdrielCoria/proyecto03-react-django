import React, { useState, useEffect } from "react";
import axios from 'axios';
import './main.css';


const app = () => {

  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    firt_name: "",
    last: '',
    age: '',
    gender: '',
    grade: '',
    address: '',
    contact_number: ''
  });


  const [selectedStudents, setSelectedStudents] = useState(null);

  const [toView, setToView] = useState({
    firt_name: "",
    last: '',
    age: '',
    gender: '',
    grade: '',
    address: '',
    contact_number: ''
  });


  const [openView, setOpenView] = useState(false);


  // Load students
  const fetchStudents = () => {
    axios.get('http://127.0.0.1:8000/api/students/')
      .then(response => {
        // console.log(response.data);
        setStudents(response.data);
      })
      .catch(error => console.error(error))
  }



  useEffect(() => {
    fetchStudents();
  }, [])


  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  }


  const handleAddStudent = () => {
    axios.post('http://127.0.0.1:8000/api/students/', newStudent)
      .then(response => {
        setStudents([...students, response.data]);
        setNewStudent({
          firt_name: "",
          last: '',
          age: '',
          gender: '',
          grade: '',
          address: '',
          contact_number: ''
        })
      }).catch(error => console.error(error));
  }

  return (
    <div className="app-container">
      <h1>Students Management System</h1>
      <div className="form-container">
        <div className="form-inputs">
          <input type="text" name="firt_name" placeholder="First Name" value={newStudent.firt_name} onChange={handleInputChange} />
          <input type="text" name="last" placeholder="Last Name" value={newStudent.last} onChange={handleInputChange} />
          <input type="text" name="age" placeholder="Age" value={newStudent.age} onChange={handleInputChange} />
          <input type="text" name="gender" placeholder="Gender" value={newStudent.gender} onChange={handleInputChange} />
          <input type="text" name="grade" placeholder="Grade" value={newStudent.grade} onChange={handleInputChange} />
          <textarea name="address" placeholder="address" value={newStudent.address} onChange={handleInputChange} />
          <input type="text" name="contact_number" placeholder="Contact Number" value={newStudent.contact_number} onChange={handleInputChange} />

          <div className="form-buttons">
            {
              selectedStudents ? (
                <>
                  <button>Update</button>
                  <button>Cancel</button>
                </>
              ) : (
                <button onClick={handleAddStudent}>Add New Student</button>
              )
            }
          </div>





        </div>
      </div>
    </div>
  )
}

export default app
