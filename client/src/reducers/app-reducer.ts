import { INIT_HIKES, UPDATE_USER } from "../redux/action-types";
import { User } from '../common/model'

interface State {
    hikes: any;
    user: User;
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
        case UPDATE_USER: {
            
            return {
                ...state,
                user: action.payload
            }
        }; 
        default:
            return state;
    }
}