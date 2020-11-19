import { INIT_HIKES, INIT_COORDS, TOGGLE_USER } from "../redux/action-types";

const initialState = {
    results: [],
    user: '',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case INIT_HIKES: {
            // desrtucture the hikes
            // const {  } = action.payload;
            return {
                ...state,
                hikes: action.payload
            }
        };
        case INIT_COORDS: {
            return {
                ...state,
                coords: action.payload
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