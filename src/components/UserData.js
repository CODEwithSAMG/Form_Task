import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const UserData = () => {
    const dispatch = useDispatch();
    const [eventDetails, setEventDetails] = useState({
        name: '',
        category: '',
        date: '',
        location: '',
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setEventDetails({
            name: '',
            category: '',
            date: '',
            location: '',
            description: ''
        });

        const newTodo = {
            eventDetails: eventDetails,
        }

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
        <form onSubmit={handleSubmit} className="row g-3 form_wrapper">
            <div className="col-12">
                <label htmlFor="name" placeholder='Event Name:' className="form-label">Event Name:</label>
                <input className="form-control" placeholder='Enter Name' classNameName='input_field' type="text" id="name" name="name" value={eventDetails.name} onChange={handleChange} />
            </div>

            <div className="col-12">
                <label htmlFor="category" class="form-label">Category</label>
                <select name="category" id="category" style={{ textAlign: "center" }} className="form-select"
                    onChange={handleChange}
                >
                    <option selected>sports</option>
                    <option value="saab">music</option>
                    <option value="opel">general</option>
                    <option value="audi">children</option>
                    <option value="audi">school</option>
                </select>
            </div>

            <div className="col-12">
                <label htmlFor="date" className="form-label">Date:</label>
                <input type="date" id="date" name="date" value={eventDetails.date}
                    onChange={handleChange} className="form-control" />
            </div>

            <div className="col-12">
                <label htmlFor="location" className="form-label">Location:</label>
                <input placeholder='Enter Location' type="text" className="form-control" id="location" name="location" value={eventDetails.location} onChange={handleChange} />
            </div>

            <div className="col-12">
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" placeholder='Enter description' id="description" name="description" value={eventDetails.description} onChange={handleChange} />
                </div>
            </div>


            <div className="col-12 btn_container">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default (UserData);