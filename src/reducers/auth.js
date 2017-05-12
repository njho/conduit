export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            console.log('from inside the auth.js');
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload.errors : null
            }
        case 'UPDATE_FIELD_AUTH':
            return {
                ...state,
                [action.key]: action.value
            }
        case 'ASYNC_START':
            if (action.subtype === 'LOGIN') {
                return {...state, inProgress: true}
            }
        case 'LOGIN_PAGE_UNLOADED':
        case 'REGISTER_PAGE_UNLOADED':
            return {};
            break;
    }
    return state;
};