import * as types from '../actions/actionTypes.js';

const initialState = {

}

const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case(types.READCOMMENTS):
            console.log(action.payload)
            const newState = {...state};
                newState[action.payload.id - 1] = action.payload.comments;
            
            
            return newState;
        default:
            return state;
    }
}

export default commentReducer;