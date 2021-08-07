import React from 'react';
import PasswordComponent from "./PasswordComponent";
import EmailField from "./EmailField";

function AuthStep(props){
    if (props.currentStep !== 1) {
        return null;
    }
    return (
        <div>
            <EmailField
                name="email"
                placeholder="Введите email"
                value={props.email}
                onChange={props.handleChange}
                requiredFields={props.requiredFields}
            />
            <PasswordComponent
                name="password"
                placeholder="Введите пароль"
                onChange={props.handleChange}
                requiredFields={props.requiredFields}
            />
            <PasswordComponent
                name="passwordAgain"
                placeholder="Повторите пароль"
                onChange={props.handleChange}
                requiredFields={props.requiredFields}
            />
            {!props.passwordsEqual ? <div className="form__error">Пароли не совпадают!</div> : null}
        </div>
    );
}

export default AuthStep;