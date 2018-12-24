import * as types from '../actions/actionTypes.js'

const initialState = {
    0: "Upon this Continent",
    1: "A new nation, conceived in liberty",
    2: "and under the preposition that all men are created equal",
}

const titleReducer = (state = initialState, action) => {
    switch(action.type){
        case types.REFRESH:
            let newState = {}
            console.log(action)
            for(let i in action.payload){
                newState[i] = action.payload[i].title;
            }
            
            return newState;
        default:
            return state;
    }
}

export default titleReducer;