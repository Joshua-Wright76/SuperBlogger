import * as types from '../actions/actionTypes.js'

const initialState = {
    0: "Four Score And",
    1: "Seven Years Ago",
    2: "Our Fathers Brought Forth",
}

const bodyReducer = (state = initialState, action) => {
    switch(action.type){
        case types.REFRESH:
            let newState = {}
            console.log(action)
            for(let i in action.payload){
                newState[i] = action.payload[i].body;
            }
            
            return newState;
        default:
            return state;
    }
}

export default bodyReducer;