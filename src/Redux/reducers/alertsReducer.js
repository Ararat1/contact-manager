import { SET_ALERTS } from "../types";

const defaultState = {
    alerts: []
}

const alertsReducer = (state = defaultState, { type, payload }) => {
    let updatedState = JSON.parse(JSON.stringify(state))

    switch (type) {
        case SET_ALERTS:
            updatedState.alerts = payload;
            return updatedState;

        default:
            return state;
    }
};

export { alertsReducer }