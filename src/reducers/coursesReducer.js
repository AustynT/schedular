import { FETCH_COURSES, TOGGLED_ENROLLED } from '../actions/type';


export default function(state=[], action) {
    switch(action.type) {
        case FETCH_COURSES:
        return [
            ...state,
            ...action.payload
        ]
        case TOGGLED_ENROLLED:
        console.log(action.payload)
        return state
        default:
            return  state;
    }
}