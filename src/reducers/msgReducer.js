
import {Data} from '../data/Data'
//Reducer for character information Initialize State
const initState = [{
    name: "Alamgir Hossain",
    id:1,
    msg:[],
}]

//Define Actions
const convReducer = (state = initState, action) => {
    switch (action.type) {
            //Change character name
        case 'ADD_CONV':
            return {
                ...state,
                name: action.payload
            }

        case 'CHANGE_OCCUPATION':
            return {
                ...state,
                occupation: action.payload
            }
        case 'CHANGE_AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
            return state
    }
}

export default convReducer;