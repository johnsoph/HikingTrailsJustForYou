import { INIT_HIKES, INIT_COORDS, UPDATE_USER, UPDATE_FILTER, UPDATE_HIKING_LEVEL } from "../redux/action-types";
import { User, Hikes, Filter } from '../common/model';

interface State {
    hikes: Hikes[];
    user: User;
    gear: any;

    // the array of hikes filtered down based on the string value 
    // example: easy_and_chill, challenge_me ...
    filteredHikes: Filter;
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

    filteredHikes: {
        desiredHikes: [],
    },
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

        case UPDATE_FILTER: {
            // const result = {
            //     desiredHikes: [],
            //     filterType: action.payload,
            // }
            
            return {
                ...state,
                // filteredHikes: result
                desiredHikes: action.payload
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