import { INIT_HIKES, UPDATE_USER} from "./action-types";

export const initHikes = (payload)  => ({ 
    type: INIT_HIKES, 
    payload,
});
  

export const updateUser = (payload) => ({
    type: UPDATE_USER,
    payload,
  });

