import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinAction } from '../actions/action'

class Signin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            userName: '',
            password: ''
        }
    }


    _onChangeEmail(ev) {
        this.setState({
            email: ev.target.value
        })
    }
    _onChangePassword(ev) {
        this.setState({
            password: ev.target.value
        })
    }
    signin(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            email: '',
            userName: '',
            password: ''
        })
        console.log(this.state);
        this.props.signin(user)
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Sign In</h1>
                <br />
                <br />

                <form onSubmit={this.signin.bind(this)}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input value={this.state.email} type="email" onChange={this._onChangeEmail.bind(this)} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={this.state.password} type="password" onChange={this._onChangePassword.bind(this)} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary inline" onClick={this.signin.bind(this)}>Submit</button>

                    {/* <button className="btn inline"><Link to="/signin">Sign In</Link></button> */}
                </form>
                <br /> 
                <br /> 

                {
                    (this.props.isLoading) ?
                    <p>{this.props.loader}</p>
                    : ''
                }

                {
                    (this.props.signinErrorState) ?
                        <div className="alert alert-danger" role="alert">
                            {this.props.signinError}
                        </div>
                : ''


                }

            </div>
        )
    }
}

function mapStateToProp(state) {
    console.log(state.root)
    return ({
        // signupErrorState: state.root.signupErrorState,
        // signupError: state.root.signupError,
        // currentUser: state.root.currentUser,
        signinError: state.root.signinError,
        signinErrorState: state.root.signinErrorState,
        loader: state.root.loading,
        isLoading: state.root.isLoading
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        // signUp: (userDetails) => {
        //     dispatch(signupAction(userDetails));
        // }
        signin: (userDetails) => {
            dispatch(signinAction(userDetails));
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signin);
