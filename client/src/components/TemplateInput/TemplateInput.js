import './TemplateInput.scss';

function TemplateInput(props) {

const handleInputChange = (e) => {
    props.handleChange (props.index, e.target.name, e.target.value)
    }  


return (
    <div className='templateForm__inputContainer'>
        <label className='templateForm__label'>
            Name
            <input placeholder='ex/ Bench Press' className='templateForm__input' name="name"  onChange={handleInputChange} />
        </label>
        <label className='templateForm__label'>
            Sets
        <input className='templateForm__setInput' placeholder='#' name="sets"  onChange={handleInputChange} />
        </label>
    </div>
    )};

export default TemplateInput;
