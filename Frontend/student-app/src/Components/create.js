import axios from 'axios';
import React, { useState } from 'react';
import './create.css'

const Create = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [dob, setDob] = useState('');
  const [about, setAbout] = useState('');

    function handlesubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8080/add-student',{
            firstname,
            lastname,
            location,
            email,
            education,
            dob,
            about
        })
    }

  return (
    <div>
      <form onSubmit={handlesubmit} className=''>

        <div className='firstname'>
          <label>First Name:</label>
          <input type='text' required onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className='lastname'>
          <label>Last Name:</label>
          <input type='text' required onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type='text' required onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type='email' required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Education:</label>
          <input type='text' required onChange={(e) => setEducation(e.target.value)} />
        </div>
        <div>
          <label>DOB:</label>
          <input type='date' required onChange={(e) => setDob(e.target.value)} />
        </div>
        <div>
          <label>About:</label>
          <textarea required onChange={(e) => setAbout(e.target.value)} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
