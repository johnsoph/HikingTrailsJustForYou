import { INIT_HIKES, INIT_COORDS, UPDATE_USER, UPDATE_FILTER } from "../redux/action-types";
import { User, Hikes } from '../common/model'


interface State {
    hikes: Hikes[];
    user: User;
    gear: any;
}
const initialState = {
    hikes: [],
    user: {
        name: '',
        age: null,
        gender: '',
        zipCode: null,
        avgDailySteps: null,
        hikingExperience: null,
        activityLevel: null,
    },
    // TODO -- KALISE INSERT GEAR 
    gear: {},
};

export default function(state: State = initialState, action) {
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
        case UPDATE_USER: {
            
            return {
                ...state,
                user: action.payload
            }
        }; 
        case UPDATE_FILTER: {
            
            return {
                ...state,
                filter: action.payload
            }
        }; 
        
        default:
            return state;
    }
}