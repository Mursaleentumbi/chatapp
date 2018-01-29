import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    currentUser: '',
    signupErrorState: false,
    signupError: '',
    signinError: '',
    signinErrorState: '',    
    isLoading : false,
    loading: ''
}

export default (state = INITIAL_STATE, action) => {
    // console.log(state)
    switch (action.type) {

        case ActionTypes.CURRENTUSERDATA:
        return({
            ...state,
            currentUser: action.payload
        })
        case ActionTypes.SIGNUPERROR:
        return({
            ...state,
            signupError: action.payload
        })
        case ActionTypes.SIGNINERROR:
        return({
            ...state,
            signinError: action.payload
        })
        case ActionTypes.SIGNINERRORSTATE:
        return({
            ...state,
            signinErrorState: action.payload
        })
        case ActionTypes.SIGNUPERRORSTATE:
        return({
            ...state,
            signupErrorState: action.payload
        })
        case ActionTypes.LOADING:
        return({
            ...state,
            loading: action.payload
        })
        case ActionTypes.ISLOADING:
        return({
            ...state,
            isLoading: action.payload
        })

        default:
            return state;

    }
}