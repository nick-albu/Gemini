import './TemplateInput.scss';

function TemplateInput(props) {

const ExerciseInput = (props) => {
    const handleInputChange = (e) => {
    props.handleChange (props.index, e.target.name, e.target.value)
    }  
}

return (
    <div>
        <label>
            Name
            {/* <input name="name"  onChange={handleInputChange} /> */}
        </label>
        <label>
            Sets
        {/* <input name="sets"  onChange={handleInputChange} /> */}
        </label>
    </div>
    )};

export default TemplateInput;
