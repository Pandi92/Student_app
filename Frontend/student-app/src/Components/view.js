import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const [view, setView] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/getdata')
            .then((response) => {
                setView(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
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

    const edit=(id)=>{
        Navigate(`/edit/${id}`)
    }

    return (
        <div>
            <h3 className='text-center fw-bolder shadow-sm border-bottom'>STUDENT CURD APPLICATIONS</h3>
            <button className='btn btn-success' onClick={Adddata}>AddData</button>
            <table className='table table-dark text-center table-hover m-0'>
                <thead>
                    <tr className='p-5'>
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
                        view.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.location}</td>
                                <td>{data.email}</td>
                                <td>{data.dob}</td>
                                <td>{data.education}</td>
                                <td><button className='btn btn-warning'onClick={()=>edit(data.id)}>Edit</button></td>
                                <td><button className='btn btn-danger' onClick={() => deleteData(data.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default View;
