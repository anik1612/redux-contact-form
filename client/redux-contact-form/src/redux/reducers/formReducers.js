const { POST_FORM_DATA } = require("../actions/formAction")

const formReducers = (state = {}, action) => {
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