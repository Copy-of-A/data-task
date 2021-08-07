import React, {Component} from "react";
import AuthStep from "./AuthStep";
import InfoStep from "./InfoStep";
import FinalStep from "./FinalStep";
import validator from 'validator'

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            userName: '',
            email:  '',
            password: '',
            passwordAgain: '',
            additionalInfo: '',
            date: '',
            passwordsEqual: true,
        }
        this.requiredFields1 = ["email", "password", "passwordAgain"];
        this.requiredFields2 = ["userName", "date"];
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        if (event.target.name === "passwordAgain") {
            if (value === this.state.password) {
                this.setState({
                    passwordsEqual: true
                })
            }
            else {
                this.setState({
                    passwordsEqual: false
                })
            }
        }
        else if (event.target.name === "password") {
            if (value === this.state.passwordAgain) {
                this.setState({
                    passwordsEqual: true
                })
            }
            else {
                this.setState({
                    passwordsEqual: false
                })
            }
        }
    }

    isValid = () => {
        if (this.state.currentStep === 1) {
            return this.state.email && validator.isEmail(this.state.email) && this.state.password && this.state.passwordAgain && this.state.passwordsEqual
        }
        else if (this.state.currentStep === 2) {
            return this.state.userName && this.state.date
        }
        else return true;
    }

    handleSubmit = event => {
        event.preventDefault()
        alert("Отправлено!");
        this.setState({
            currentStep: 1,
            userName: '',
            email:  '',
            password: '',
            passwordAgain: '',
            additionalInfo: '',
            date: '',
            passwordsEqual: true,
        })
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return (
                <button type="button" onClick={this._prev}>Назад</button>
            )
        }
        return null;
    }

    nextButton(){
        let currentStep = this.state.currentStep;
        // let isDisabled =
        if(currentStep < 3){
            return (
                <button type="button" disabled={!this.isValid()} onClick={this._next}>Вперед</button>
            )
        }
        return null;
    }

    sendButton(){
        let currentStep = this.state.currentStep;
        if (currentStep === 3){
            return (
                <button>Отправить</button>
            )
        }
        return null;
    }

    render() {
        return (
            <div className="form-wrapper">
                <h1>Форма входа</h1>
                <p>Шаг {this.state.currentStep} </p>

                <form className="form" onSubmit={this.handleSubmit}>
                    <AuthStep
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                        password={this.state.password}
                        passwordAgain={this.state.passwordAgain}
                        requiredFields={this.requiredFields1}
                        passwordsEqual={this.state.passwordsEqual}
                    />
                    <InfoStep
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.userName}
                        date={this.state.date}
                        additionalInfo={this.state.additionalInfo}
                        requiredFields={this.requiredFields2}
                    />
                    <FinalStep
                        currentStep={this.state.currentStep}
                        fields={this.state}
                    />
                    <div className="button-wrapper">
                        {this.previousButton()}
                        {this.nextButton()}
                        {this.sendButton()}
                    </div>
                </form>
            </div>
        );
    }
}

export default UserForm