const initialState = {
    user: null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_EMAILANDPASSWORD": {
            return Object.assign(Object.assign({}, state), { user: action.payload });
        }
    }
    return state;
};
export default authReducerl;
