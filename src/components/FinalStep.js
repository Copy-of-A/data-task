import React from 'react';

function FinalStep(props){
    if (props.currentStep !== 3) {
        return null;
    }
    const { email, userName, password, date, additionalInfo } = props.fields
    return (
        <div>
            <h3>Введенные данные:</h3>
            {<p>Email: {email}</p>}
            {<p>Пароль: {password}</p>}
            {<p>Имя: {userName}</p>}
            {<p>Дата рождения: {date}</p>}
            {additionalInfo ? <p>Дополнительная информация: {additionalInfo}</p> : null}
        </div>
    );
}

export default FinalStep;