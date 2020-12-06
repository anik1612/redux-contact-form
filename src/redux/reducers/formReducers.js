const { POST_FORM_DATA } = require("../actions/formAction")

const initialState = {
    data: {}
}

const formReducers = (state = initialState, action) => {
    switch (action.type) {
        case POST_FORM_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default formReducers;