import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function CreateUser() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        username: ''
    });

    const onChangeUsername = (e) => {
        setState({
            username: e.target.value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username: state.username,
        }
        console.log(user);

        const response = await axios.post('http://localhost:5000/users/add', user)

        console.log(response.data);

        setState({
            username: ''
        });

        navigate('/');
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={state.username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

