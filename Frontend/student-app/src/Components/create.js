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
      return alert("Please Fill The All Details")
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
      <h3 className='text-center fw-bolder shadow-sm border-bottom'>ADD-STUDENTS</h3>
      <form onSubmit={handlesubmit} className='form'>

        <div>
          <label className='label'>First Name:</label>
          <input className='input' type='text' onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div>
          <label className='label'>Last Name:</label>
          <input className='input' type='text' onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div>
          <label className='label'>Location:</label>
          <input className='input' type='text' onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label className='label'>Email:</label>
          <input className='input' type='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className='label'>Education:</label>
          <input className='input' type='text' onChange={(e) => setEducation(e.target.value)} />
        </div>
        <div>
          <label className='label'>DOB:</label>
          <input className='input' type='text' placeholder='DDD-MMM-YYY' onChange={(e) => setDob(e.target.value)} />
        </div>
        <div>
          <label className='label'>About:</label>
          <textarea className='textarea' onChange={(e) => setAbout(e.target.value)} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
