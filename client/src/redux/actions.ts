import { INIT_HIKES, INIT_COORDS, TOGGLE_USER } from "./action-types";

export const initHikes = (payload)  => ({ 
    type: INIT_HIKES, 
    payload,
});
  
export const initCoords = (payload)  => ({ 
    type: INIT_COORDS, 
    payload,
});

export const toggleUser = (payload) => ({
    type: TOGGLE_USER,
    payload,
  });