import React from 'react';

function TextAreaField(props) {
    return (
        <div>
            <textarea
                name={props.name}
                cols="30"
                rows="10"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                maxLength={props.max}
            />
            <div>{props.max - props.value.length} / {props.max}</div>
        </div>
    );
}

export default TextAreaField;