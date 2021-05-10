import React, { useState } from "react"
import { connect } from "react-redux";
import modifyUrl from "../utils/modifyUrl"


const Index = ({ urlHistory, sendUrlHistoryToState, type, min, max, defaultValue }) => {
    const [value, setValue] = useState(0)

    let typeInUrl = ""
    switch (type) {
        case "Brightness":
            typeInUrl = "bri"
            break;
        case "Shadow":
            typeInUrl = "shad"
            break;
        case "Contrast":
            typeInUrl = "con"
            break;
        case "Unsharp Mask":
            typeInUrl = "usm"
            break;
        case "Saturation":
            typeInUrl = "sat"
            break;
        default:
            break;
    } 
    
    let lastPhoto = {}
    if (urlHistory.length > 0) {
        lastPhoto = urlHistory[urlHistory.length - 1]
    }

    const handleInput = event => {
        setValue(event.target.value);

    };

    let valuesUrl = modifyUrl(lastPhoto.url, typeInUrl)

return (<div className="bg-gray-600 mt-4">
        <div className="relative pl-2 pt-2">
            <input
                onChange={handleInput}
                type="range"
                min={min}
                max={max} 
                value={defaultValue} 
                className="bg-gray-900 "
            />
            <label className="ml-2 text-white font-bold italic">{value}</label>
        </div>
        <div className="relative pl-2 pr-2 pt-2">
            {urlHistory.length > 0 ? 
            <button className="bg-gray-900 w-full text-white p-2 rounded mb-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
                onClick={() => sendUrlHistoryToState({
                    name: lastPhoto.name,
                    url: `${valuesUrl.url}?${typeInUrl}=${value}${valuesUrl.photo_props.map(i => "&" + i)}`
                })} >
                {type}
            </button>
            :
            <button className="disabled bg-gray-900 w-full text-white p-2 rounded mb-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                {type}
            </button>
            }
        </div>
    </div>)
}


const mapStateToProps = state => ({
    urlHistory: state.urlHistory
})

const mapDispatchToProps = dispatch => ({
    sendUrlHistoryToState(data) {
        dispatch({
            type: "URL_HISTORY",
            payload: data
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
