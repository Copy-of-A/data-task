import React from 'react';
import validator from "validator";

function EmailField(props){
    const classN = props.requiredFields.includes(props.name) ? "form__input-wrapper required" : "form__input-wrapper"
    return (
        <div className={classN}>
            <input
                className="form__input"
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required={props.requiredFields.includes(props.name)}
            />
            {!validator.isEmail(props.value)? <div className='field__error'>E-mail должен быть в формате _@_.__</div> : null}
        </div>
    );
}

export default EmailField;