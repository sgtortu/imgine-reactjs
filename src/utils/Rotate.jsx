import React, {useState} from "react"
import { connect } from "react-redux";

const Index = ({urlHistory, sendUrlHistoryToState}) => {

    const [value, setValue] = useState(0)

    let lastPhoto = {}
    if (urlHistory.length > 0) {
        lastPhoto = urlHistory[urlHistory.length - 1]
    }   

    const handleInput = event => {
        setValue(event.target.value);  
    };
     
    const url = lastPhoto.url
    let parts = []
    if (url) {
        parts = url.split("?")
    }

    return(<div className="bg-gray-600 mt-4">
                <div class="relative pl-2 pr-2 pt-2">
                    <input onChange={handleInput}  type="number" className="w-full pl-3 pr-10 py-2 border-1 border-gray-200 rounded-sm  hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Degrees..." />
                </div>
                <div class="relative pl-2 pr-2 pt-2">
                    <button className="bg-gray-900 w-full text-white p-2 rounded mb-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"
                        onClick={() => sendUrlHistoryToState({
                            name: lastPhoto.name,
                            url: `${parts[0]}?rot=${value}` 
                        } )} >
                        Rotate
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

