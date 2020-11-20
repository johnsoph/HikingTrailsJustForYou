import { INIT_HIKES, INIT_COORDS, UPDATE_USER } from "./action-types";


export const initHikes = (payload)  => ({ 
    type: INIT_HIKES, 
    payload,
});
  
export const initCoords = (payload)  => ({ 
    type: INIT_COORDS, 
    payload,
});

export const updateUser = (payload) => ({
    type: UPDATE_USER,
    payload,
  });

