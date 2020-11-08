import { INIT_HIKES, TOGGLE_USER } from "./action-types";

export function initHikes(payload) {
    return { type: INIT_HIKES, payload }
};
  

export const toggleUser = (payload) => ({
    type: TOGGLE_USER,
    payload,
  });