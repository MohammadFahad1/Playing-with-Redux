import React, { useState } from 'react';

const SingleForm = () => {

    const [data, setData] = useState({});

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Welcome: " + data.name + "\nEmail: " + data.email)
    }

    // Change Handler
    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = {
            ...data,
            [name]: value,
        }
        setData(newData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" onChange={changeHandler} placeholder='Enter your full name...' />
                <input type="email" name="email" id="" onChange={changeHandler} placeholder='Enter your email address...' />
                <button>Submit</button>
            </form>
        </div>
    );
}
export default SingleForm;