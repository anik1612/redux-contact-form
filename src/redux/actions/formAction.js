export const POST_FORM_DATA = 'POST_FORM_DATA';
export const GET_FORM_DATA = 'GET_FORM_DATA';

// export const getFormData = (data) => {
//     return {
//         type: GET_FORM_DATA,
//         payload: data
//     }
// }

export const postFormData = (data) => {
    return {
        type: POST_FORM_DATA, 
        payload: data
    }
}