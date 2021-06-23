import SetInput from '../SetInput/SetInput'

function ExerciseInput(props) {

return (
    <div className='workoutForm__exerciseContainer'>
        <h2 className='workoutForm__exerciseHeader'>{props.exercise.name}</h2>
        {props.exercise.sets.map((_set, i) => (
            <SetInput
            key={i}
            setIndex={i}
            exerciseIndex={props.exerciseIndex}
            handleChange={props.handleChange}/>
        ))}
    </div>
    )};

export default ExerciseInput;
