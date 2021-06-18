import './WorkoutForm.scss';
import { Component } from 'react';
import axios from 'axios';
import ExerciseInput from '../ExerciseInput/ExerciseInput'
import Logo from '../../assets/logos/logo.svg';

class WorkoutForm extends Component {
    state = {
        name: "",
        id: "",
        exercises: []
    }
    // exercises should be an empty array ^
    // 
    componentDidMount() {
        axios.get("http://localhost:8080/templates/" + this.props.match.params.id)
        .then ((response) => {
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
            // we have to generate this object before it goes into state
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
    }

    render () {
        return (
            <section className='workoutForm'>
                <div className='workoutForm__headerContainer'>
                    <img className='workoutForm__logo' src={Logo} alt='logo'/>
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