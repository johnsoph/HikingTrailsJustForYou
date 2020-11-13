import { INIT_HIKES, TOGGLE_USER } from "../redux/action-types";

const initialState = {
    hikes: [],
    user: '',
};

export default function(state = initialState, action) {
    debugger;
    switch (action.type) {
        case INIT_HIKES: {
            debugger;
            // desrtucture the hikes
            // const {  } = action.payload;
            return {
                ...state,
                hikes: action.payload
            }
        };
        case TOGGLE_USER: {
            
            // const { name } = action.payload;
            return {
                ...state,
                user: action.payload
            }
        }; 
        default:
            return state;
    }
}