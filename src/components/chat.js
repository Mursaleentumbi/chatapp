import React from 'react';
import { connect } from 'react-redux';



class Chat extends React.Component {
    


    render(){
        return(
            <div>
                <h1>Chat</h1>
            </div>
        )
    }
}
function mapStateToProp(state) {
    return ({
        
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        // signUp: (userDetails) => {
        //     dispatch(signupAction(userDetails));
        // }      
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Chat);
