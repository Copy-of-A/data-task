import React, {Component} from 'react';
import TextAreaField from "./TextAreaField";

class InfoStep extends Component {

    getTodayDate = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if(dd < 10){
            dd='0'+dd
        }
        if(mm < 10){
            mm='0'+mm
        }

        today = yyyy+'-'+mm+'-'+dd;
        return today
    }

    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }

        return (
            <div>
                <div className="form__input-wrapper required">
                    <input
                        className="form__input"
                        name="userName"
                        type="text"
                        placeholder="Введите имя"
                        value={this.props.username}
                        onChange={this.props.handleChange}
                        required={this.props.requiredFields.includes("userName")}
                    />
                </div>

                <div className="form__input-wrapper required">
                    <label style={{position: "absolute", top: "-20px"}}>Дата рождения</label>
                    <input
                        className="form__input"
                        name="date"
                        type="date"
                        max={this.getTodayDate()}
                        value={this.props.date}
                        onChange={this.props.handleChange}
                        required={this.props.requiredFields.includes("date")}
                    />
                </div>

                <TextAreaField
                    name="additionalInfo"
                    placeholder="Дополнительная информация"
                    value={this.props.additionalInfo}
                    onChange={this.props.handleChange}
                    max={512}
                />
            </div>
        );
    }
}

export default InfoStep;