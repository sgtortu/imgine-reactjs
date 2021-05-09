import React, {useEffect} from "react"
import { connect } from "react-redux";

const Index = ({photos, sendPhotosToState, sendUrlHistoryToState}) => {
    
    useEffect(()=>{
        fetch('https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json')
        .then(response => response.json())
        .then(data => sendPhotosToState(data));
    },[])
 
    return (<aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
                <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                    <div className="bg-gray-900">
                        <div className="bg-gray-600  text-white p-5 rounded cursor-pointer">Select a photo</div>
                         {photos.map( photo => (
                            <button onClick={() => sendUrlHistoryToState(photo)} className="w-full text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                {photo.name}
                            </button>
                         ))}
                    </div> 
                </div>
            </aside>
    )
}
 
const mapStateToProps = state => ({
    photos: state.photos
  })
  
const mapDispatchToProps = dispatch => ({
    sendPhotosToState(data) {
        dispatch({
            type: "LOAD_PHOTOS",
            payload: data
        })
    },
    sendUrlHistoryToState(data) {
        dispatch({
            type: "URL_HISTORY",
            payload: data
        })
    } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
