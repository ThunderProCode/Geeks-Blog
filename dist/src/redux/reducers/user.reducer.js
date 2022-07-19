const initialState = {
    user: null
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_EMAILANDPASSWORD": {
            return Object.assign(Object.assign({}, state), { user: action.payload });
        }
    }
    return state;
};
export default userReducer;
