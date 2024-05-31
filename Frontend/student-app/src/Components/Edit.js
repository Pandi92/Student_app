import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [view, setView] = useState([]);
    const { viewid } = useParams();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [dob, setDob] = useState('');
    const [about, setAbout] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        console.log(`Fetching data for viewid: ${viewid}`);
        axios.get(`http://localhost:8080/getdata/${viewid}`)
            .then((response) => {
                console.log('Response data:', response.data);
                const data = response.data[0];
                setView(data);

                // Set initial state for the form fields
                setFirstname(data.firstname);
                setLastname(data.lastname);
                setLocation(data.location);
                setEmail(data.email);
                setEducation(data.education);
                setDob(data.dob);
                setAbout(data.about);
            }).catch((err) => {
                console.error("There was an error fetching the data!", err);
            });
    }, [viewid]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!firstname || !lastname || !location || !email || !education || !dob) {
            alert("Please Fill The All Details Expert About")
        }
        axios.put(`http://localhost:8080/edit-student/${viewid}`, {
            firstname,
            lastname,
            location,
            email,
            education,
            dob,
            about
        }).then((response) => {
            console.log(response.data);
            alert(`Successfully Updated`);
            navigate('/');
        }).catch((err) => {
            console.error(err);
            alert(`Failed To Update`);
        });
    }

    return (
        <div>
            <h3 className='text-center fw-bolder shadow-sm border-bottom'>EDIT STUDENT</h3>
            <form onSubmit={handleSubmit} className=''>
                <div className='firstname'>
                    <label>First Name:</label>
                    <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className='lastname'>
                    <label>Last Name:</label>
                    <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className='location'>
                    <label className='me-2'>Location:</label>
                    <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input className='ms-5' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='education'>
                    <label className='ms-4'>Education:</label>
                    <input type='text' value={education} onChange={(e) => setEducation(e.target.value)} />
                </div>
                <div>
                    <label>DOB:</label>
                    <input className='ms-5' type='text' value={dob} placeholder='DD-MM-YYYY' onChange={(e) => setDob(e.target.value)} />
                </div>
                <div>
                    <label className='my-5'>About:</label>
                    <textarea className='p-5' value={about} onChange={(e) => setAbout(e.target.value)} />
                </div>
                <div>
                    <button className='btn btn-success text-center' type="submit">Update</button>
                </div>
            </form>
        </div>
    );
}

export default Edit;
