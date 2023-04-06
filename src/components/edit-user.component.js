import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function EditUser() {
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
            <h3>Edit Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <select ref={userInputRef}
                        required
                        className="form-control"
                        value={username}
                        onChange={onChangeUsername}>
                        {
                            users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={onChangeDuration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            className="form-control"
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );

}

