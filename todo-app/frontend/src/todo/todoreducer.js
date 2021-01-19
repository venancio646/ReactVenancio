const INITIAAL_STATE = {description: '', list: []}

export default (state = INITIAAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SERCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return {...state, description: ''}
        default:
            return state
    }
}