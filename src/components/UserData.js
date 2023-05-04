import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const UserData = () => {
    const dispatch = useDispatch();
    const [eventDetails, setEventDetails] = useState({
        name: '',
        cars: '',
        date: '',
        location: '',
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setEventDetails({
            name: '',
            date: '',
            location: '',
            description: ''
        });

        const newTodo = {
            eventDetails: eventDetails,
        }

        console.log(newTodo);
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEventDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className='wrapper'>
            <h1>Form Data</h1>
            <form
                className="general_form"
                onSubmit={handleSubmit}
            >
                <div className='d_flex'>
                    <label htmlFor="name">Event Name:</label>
                    <input placeholder='Enter Name' className='input_field' type="text" id="name" name="name" value={eventDetails.name} onChange={handleChange} />
                </div>

                <div className='d_flex'>
                    <label htmlFor="name">Category:</label>
                    <select className='input_field' name="cars" id="cars" style={{ textAlign: "center" }}>
                        <option value="volvo">sports</option>
                        <option value="saab">music</option>
                        <option value="opel">general</option>
                        <option value="audi">children</option>
                        <option value="audi">school</option>
                    </select>
                </div>

                <div className='d_flex'>
                    <label htmlFor="date">Date:</label>
                    <input className='input_field' type="date" id="date" name="date" value={eventDetails.date} onChange={handleChange} />
                </div>

                <div className='d_flex'>
                    <label htmlFor="location">Location:</label>
                    <input placeholder='Enter Location' className='input_field' type="text" id="location" name="location" value={eventDetails.location} onChange={handleChange} />
                </div>

                <div className='d_flex'>
                    <label htmlFor="description">Description:</label>
                    <textarea placeholder='Enter description' id="description" name="description" value={eventDetails.description} onChange={handleChange} />
                </div>
                <button className='add_btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default (UserData);