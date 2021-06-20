import './PreviousWorkouts.scss';
import { Component } from 'react';
import axios from 'axios';
import Logo from '../../assets/logos/logo.svg';
import ExerciseInput from '../ExerciseInput/ExerciseInput';

class PreviousWorkouts extends Component {
    state = {
        workouts: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/workouts')
        .then((response) => {
            console.log(response)
            this.setState({
                workouts: response.data
            })
        })
    }

    render () {
        console.log(this.state.workouts)
        return (
        <section className='previousWorkouts'>
            <h1 className='previousWorkouts__header'>Previous Workouts</h1>
            {this.state.workouts.map((workout) => (
                <div className='previousWorkouts__workoutContainer'>
                    <h2 className='previousWorkouts__workoutHeader'>{workout.name}</h2>
                    {workout.exercises.map((exercise) => (
                        <div className='previousWorkouts__exerciseContainer'>
                            <p className='previousWorkouts__exerciseName'>{exercise.name}</p>
                            {exercise.sets.map((set) => (
                                <div className='previousWorkouts__setsContainer'>
                                    <p className='previousWorkouts__setsLabel'>Weight</p>
                                    <p className='previousWorkouts__setsValue'>{set.weight}</p>
                                    <p className='previousWorkouts__setsLabel'>Reps</p>
                                    <p className='previousWorkouts__setsValue'>{set.reps}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </section>
        )
    }
}

export default PreviousWorkouts;
