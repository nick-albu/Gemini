import './WorkoutForm.scss';
import { Component } from 'react';
import axios from 'axios';
import ExerciseInput from '../ExerciseInput/ExerciseInput'
import Back from '../../assets/images/chevron-left.svg';
import { Link } from "react-router-dom";

class WorkoutForm extends Component {
    state = {
        name: "",
        id: "",
        exercises: []
    }

    // Gets a template by id and sets it into state
    componentDidMount() {
        axios.get("http://localhost:8080/templates/" + this.props.match.params.id)
        .then ((response) => {
            console.log(response.data)
            const newState = {
                name: response.data.name,
                id: response.data.id,
                exercises: []
            }
            response.data.exercises.forEach(exercise => {
                const newExercise = {
                    name: exercise.name,
                    sets:[]
                }
                for (let i = 0; i < exercise.sets; i++) {
                    newExercise.sets.push(
                        {weight: "", reps: 0}
                    )
                }
                newState.exercises.push(newExercise)
            });
            this.setState(newState);
        })
    }

    handleWorkoutChange = (exerciseIndex, setIndex, key, value) => {
        const workoutCopy = [...this.state.exercises];
        const set = workoutCopy[exerciseIndex].sets[setIndex];
        set[key] = value;
        this.setState({exercises: workoutCopy})
    }

    sendForm = (e) => {
        const newWorkout = {
        name: this.state.name,
        id: this.state.id,
        exercises: this.state.exercises
        }
        e.preventDefault();
        axios.post('http://localhost:8080/workouts', newWorkout)
        .then((_response) => {
            this.props.history.push("/profile")
        })
    }

    render () {
        return (
            <section className='workoutForm'>
                <div className='workoutForm__headerContainer'>
                    <Link to='/profile'><img className='workoutForm__back' src={Back} alt='logo'/></Link>
                    <h1 className='workoutForm__header'>{this.state.name}</h1>
                </div>
                <form className='workoutForm__form'>
                    {this.state.exercises.map((exercise, i) => (
                        <ExerciseInput
                            key={i}
                            exerciseIndex={i}
                            exercise={exercise}
                            handleChange={this.handleWorkoutChange}/>
                    ))}
                    <div className='workoutForm__buttonContainer'>
                        <button className='workoutForm__button' onClick={this.sendForm}>DONE</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default WorkoutForm;