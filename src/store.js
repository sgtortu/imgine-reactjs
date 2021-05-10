import { createStore } from "redux"

const initialState = { 
    photos: [],
    urlHistory: [] 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PHOTOS':
            return {
                ...state,
                photos: action.payload
            }
        case 'URL_HISTORY':
            return {
                ...state,
                urlHistory: state.urlHistory.concat(action.payload)
            }
        case 'CHANGE_ORDER_HISTORY':
            return {
                ...state,
                urlHistory: action.payload 
            }
        default:
            return state
      
    
    return state
}}

export default createStore(reducer)
