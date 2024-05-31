import axios from 'axios';
import React, { useState } from 'react';
import './create.css'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [dob, setDob] = useState('');
  const [about, setAbout] = useState('');

  const Navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    if (!firstname || !lastname || !location || !email || !education || !dob) {
      return alert("Please Fill The All Details Expert About")
    }

    axios.post('http://localhost:8080/add-student', {
      firstname,
      lastname,
      location,
      email,
      education,
      dob,
      about
    }).then((response) => {
      console.log(response.data);
      alert(`Successfully Data Is Added`)
      Navigate(`/`)
    }).catch((err) => {
      console.error(err);
      alert(`Failed To Add`)
    })


  }

  return (
    <div>
      <h3 className='text-center text-success mb-4'>ADD-STUDENTS</h3>
      <form onSubmit={handlesubmit} className=''>

        <div className='firstname'>
          <label>First Name:</label>
          <input type='text' onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className='lastname'>
          <label>Last Name:</label>
          <input type='text' onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className='location'>
          <label className='me-2'>Location:</label>
          <input type='text' onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input className='ms-5' type='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='education'>
          <label className='ms-4'>Education:</label>
          <input type='text' onChange={(e) => setEducation(e.target.value)} />
        </div>
        <div>
          <label>DOB:</label>
          <input className='ms-5' type='text' placeholder='DDD-MMM-YYY' onChange={(e) => setDob(e.target.value)} />
        </div>
        <div>
          <label className='my-5'>About:</label>
          <textarea className='p-5' onChange={(e) => setAbout(e.target.value)} />
        </div>
        <div>
          <button className='btn btn-success text-center' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
