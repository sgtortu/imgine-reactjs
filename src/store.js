import { createStore } from "redux"

const initialState = { 
    photos: [],
    urlHistory: []
}

const reducer = (state = initialState, action) => {

    if (action.type === "LOAD_PHOTOS") {
        return {
            ...state,
            photos: action.payload
        }
    }
    if (action.type === "URL_HISTORY") {  
        return {
            ...state,
            urlHistory: state.urlHistory.concat(action.payload)
        }
    }
    
    return state
}

export default createStore(reducer)
