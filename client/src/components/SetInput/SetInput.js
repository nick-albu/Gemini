function SetInput(props) {

const handleInputChange = (e) => {
    props.handleChange (props.exerciseIndex, props.setIndex, e.target.name, e.target.value)
    }  

console.log(props);

return (
    <div className='workoutForm__setContainer'>
        <label className='workoutForm__label'>
            Weight
            <input className='workoutForm__input' name="weight"  onChange={handleInputChange} />
        </label>
        <label className='workoutForm__input' className='workoutForm__label'>
            Reps
        <input className='workoutForm__input' name="reps"  onChange={handleInputChange} />
        </label>
    </div>
    )};

export default SetInput;
