import React, {useState} from "react"
import { connect } from "react-redux";
import modifyUrl from "../utils/modifyUrl"


const Index = ({urlHistory, sendUrlHistoryToState}) => {
    const [value, setValue] = useState(0) 

    let lastPhoto = {}
    if (urlHistory.length > 0) {
        lastPhoto = urlHistory[urlHistory.length - 1]
    }   

    const handleInput = event => {
        setValue(event.target.value);  
        
    };

    let valuesUrl = modifyUrl(lastPhoto.url, "high")

    return(<div className="bg-gray-600 mt-4">
                <div class="relative pl-2 pt-2">
                    <input
                        onChange={handleInput}
                        type="range"
                        min="0"
                        max="100"
                        className="bg-gray-900 "
                    />  
                    <label className="ml-2 text-white font-bold italic">{value}</label>
                </div> 
                <div class="relative pl-2 pr-2 pt-2">
                <button className="bg-gray-900 w-full text-white p-2 rounded mb-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
                        onClick={() => sendUrlHistoryToState({
                            name: lastPhoto.name,
                            url: `${valuesUrl.url}?high=-${value}${valuesUrl.photo_props.map(i=>"&"+i)}` 
                        } )} >
                            Highlight
                    </button>
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
