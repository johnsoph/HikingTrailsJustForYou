import { INIT_HIKES, INIT_COORDS, UPDATE_USER, UPDATE_HIKING_LEVEL } from "../redux/action-types";
import { User, Hikes } from '../common/model'


interface State {
    hikes: Hikes[];
    user: User;
    gear: any;
    hikingLevel: number | null;
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
    hikingLevel: null,
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
        case UPDATE_HIKING_LEVEL: {
            
            return {
                ...state,
                hikingLevel: action.payload
            }
        }; 
        default:
            return state;
    }
}