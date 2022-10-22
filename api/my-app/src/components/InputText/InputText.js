import './inputText.css';

const InputText = (props) => {
    return (
        <div className="input-text">
            <h1>teste</h1>
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}/>
            <br></br>
            <br></br>
            <input type="text" placeholder={props.placeholder}/>

        </div>
    )
}

export default InputText;