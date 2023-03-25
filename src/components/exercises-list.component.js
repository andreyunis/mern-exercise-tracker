import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{new Date(props.exercise.date).toLocaleDateString()}</td>
        <td>
            <Link to={`/edit/${props.exercise._id}`} state={{ id: props.exercise._id }}>
                edit
            </Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)

export default function ExercisesList() {
    const [exercises, setExercises] = useState([]);

    useState(() => {
        const getExercises = async () => {
            const response = await fetch('http://localhost:5000/exercises/')
            const data = await response.json()

            setExercises(data)
        };
        getExercises();
    })


    const deleteExercise = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log(res.data));
        setExercises(exercises.filter(el => el._id !== id))
    }

    const exerciseList = () => {
        return exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id} />;
        })
    }


    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    );

}
