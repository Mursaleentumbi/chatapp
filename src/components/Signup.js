import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupAction } from '../actions/action'

class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            userName: '',
            password: ''
        }
    }


    _onChangeUserInput(ev) {
        this.setState({
            userName: ev.target.value
        })
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
    signup(e) {
        console.log(this.state);
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.userName,
            password: this.state.password
        }

        this.setState({
            email: '',
            userName: '',
            password: ''
        })
        console.log(this.state);
        this.props.signUp(user);
        
    }



    render() {
        { console.log(this.props) }
        return (
            <div>

                <div className="margin">
                    <h2 className="heading">Sign Up</h2>

                    <br />

                    <form onSubmit={this.signup.bind(this)}>
                        <div className="form-group">
                            <label> Name</label>
                            <input value={this.state.userName} type="text" onChange={this._onChangeUserInput.bind(this)} name="userName" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter User Name" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input value={this.state.email} type="email" onChange={this._onChangeEmail.bind(this)} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input value={this.state.password} type="password" onChange={this._onChangePassword.bind(this)} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary inline" onClick={this.signup.bind(this)}>Submit</button>

                        <button className="btn inline"><Link to="/signin">Sign In</Link></button>
                    </form>
                </div>
                <br />
                {
                (this.props.isLoading) ?
                <p>{this.props.loader}</p>
                : ''
            }

                {
                    (this.props.signupErrorState) ?
                        <div className="alert alert-danger" role="alert">
                            {this.props.signupError}
                        </div>
                        :
                        ''
                }
                
            </div>
        )
    }
}

function mapStateToProp(state) {
    console.log(state.root)
    return ({
        signupErrorState: state.root.signupErrorState,
        signupError: state.root.signupError,
        currentUser: state.root.currentUser,
        loader: state.root.loading,
        isLoading: state.root.isLoading
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        signUp: (userDetails) => {
            dispatch(signupAction(userDetails));
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signup);