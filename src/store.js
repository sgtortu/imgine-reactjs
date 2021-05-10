import { createStore } from "redux"

const initialState = { 
    photos: [],
    urlHistory: [], 
    actualImage:""
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
        console.log(action.payload[action.payload.length - 1])    
        return {
                ...state,
                urlHistory: action.payload,
                actualImage: action.payload[action.payload.length - 1]
            }
        default:
            return state
      
    
    return state
}}

export default createStore(reducer)
