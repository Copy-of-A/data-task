import React, {Component} from 'react';
import eyeSvg from "../images/eye.svg"
import eyeCrossedSvg from "../images/eye-crossed.svg"

class PasswordComponent extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            showPassword: false
        }
    }
    handleClick() {
        this.setState(prevState => {
            return {
                showPassword: !prevState.showPassword
            }
        });
    }
    render() {
        const classN = this.props.requiredFields.includes(this.props.name) ? "form__input-wrapper required" : "form__input-wrapper"
        return (
            <div className={classN}>
                <input
                    name={this.props.name}
                    className="form__input"
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    required={this.props.requiredFields.includes(this.props.name)}
                />
                <img
                    className="eye_svg"
                     style={this.state.showPassword ? {display : "none"} : {display : "block"}}
                     src={eyeSvg} alt="eyeSvg"
                     onClick={this.handleClick}
                />
                <img
                    className="eye_svg"
                    style={this.state.showPassword ? {display : "block"} : {display : "none"}}
                    src={eyeCrossedSvg} alt="eyeCrossedSvg"
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default PasswordComponent;