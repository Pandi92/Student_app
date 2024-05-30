import React, { useEffect, useState } from 'react';
import axios from 'axios';


const View = () => {
    const [view, setView] = useState([]);

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

    return (
        <div>
            <table className='table table-dark text-center table table-hover'>
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
                            <tr  key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.location}</td>
                                <td>{data.email}</td>
                                <td>{data.dob}</td>
                                <td>{data.education}</td>
                                <td><button className='btn btn-warning '>Edit</button></td>
                                <td><button className='btn btn-danger bi bi-trash'>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default View;
