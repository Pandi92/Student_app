import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const [view, setView] = useState([]);
    const [search, setsearch] = useState('');
    console.log(search);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/getdata')
            .then((response) => {
                setView(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Failed To Fetch Data!", error);
            });
    }, []);

    const deleteData = (id) => {
        if (window.confirm("Are you sure to delete")) {
            axios.delete(`http://localhost:8080/delete-student/${id}`)
                .then((response) => {
                    console.log(`Deleted ID is ${id}`);
                    alert(`Deleted ${id}`);
                    setView(view.filter(item => item.id !== id));
                })
                .catch((error) => {
                    console.error("There was an error deleting the data!", error);
                });
        }
    };
    const Adddata = () => {
        Navigate("/create")
    }

    const edit = (id) => {
        Navigate(`/edit/${id}`)
    }
    const mystyle = {
        color: "white",
        backgroundColor: "green",
        padding: "5px",
        borderRadius: "5px",
        textAlign: "center"
    }

    return (
        <div>
            <h3 className='text-center fw-bolder shadow-sm border-bottom'>STUDENT CURD APPLICATIONS</h3>
            <input placeholder='Search Contacts' className='me-4 ms-1 rounded' onChange={(e) => setsearch(e.target.value)} />
            <button style={mystyle} onClick={Adddata}>Add Data</button>
            <table className='table text-center table-hover border mt-3'>
                <thead className='px-5 py-5'>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>DOB</th>
                        <th scope='col'>Education</th>
                        <th scope='col'>Action</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.firstname.toLowerCase().includes(search)
                        }).map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.location}</td>
                                <td>{data.email}</td>
                                <td>{data.dob}</td>
                                <td>{data.education}</td>
                                <td><button className='btn btn-warning' onClick={() => edit(data.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg></button></td>
                                
                                <td><button className='btn btn-danger' onClick={() => deleteData(data.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg></button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default View;
