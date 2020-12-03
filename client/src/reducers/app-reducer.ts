import { INIT_HIKES, INIT_COORDS, UPDATE_USER, UPDATE_FILTER, UPDATE_HIKING_LEVEL } from "../redux/action-types";
import { User, Hikes, Filter,ZipCoords } from '../common/model';
import GetCoords from "../Location";

interface State {
    hikes: Hikes[];
    user: User;
    gear: any;
    coords:  ZipCoords;

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
    coords:{
        locations: {
            latLng: {
                lat: '',
                lng: ''
            }
        }
    },
    // coords: [],

    filteredHikes: {
        desiredHikes: [],
        filterType: 0,
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
            return {
                ...state,
                filteredHikes: action.payload
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