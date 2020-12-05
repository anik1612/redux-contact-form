const { POST_FORM_DATA, GET_FORM_DATA } = require("../actions/formAction")

const initialState = {
    data: {}
}

const formReducers = (state = initialState, action) => {
    switch (action.type) {
        case POST_FORM_DATA:
            return {
                data: action.payload.data
            }

        case GET_FORM_DATA:
            return {
                
            }

        default:
            return state;
    }
}

export default formReducers;