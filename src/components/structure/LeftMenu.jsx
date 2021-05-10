import React, { useEffect } from "react"
import { connect } from "react-redux";

const Index = ({ photos, sendPhotosToState, sendUrlHistoryToState }) => {

    useEffect(() => {
        fetch('https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json')
            .then(response => response.json())
            .then(data => sendPhotosToState(data));
    }, [])

    return (<div className="overflow-x-hidden overflow-y-scroll flex min-h-screen">
        <nav className="w-96 flex-shrink-0">
            <div className="flex-auto bg-gray-900 h-full">
                <div className="flex flex-col overflow-y-auto">
                    <ul className="relative m-0 p-0 list-none h-full">

                        <li className="relative p-4 w-full flex shadow-sm">
                            <div className="flex-auto my-1">
                                <span className="text-white font-medium">Select an image</span>
                            </div>
                        </li>

                        {photos.map(photo => (
                            <div className="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                                <div className="mr-4 my-auto">
                                    <svg className="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path></svg>            </div>
                                <div className="flex-auto my-1">
                                    <a onClick={() => sendUrlHistoryToState(photo)} classNameName="text-white rounded  cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                        {photo.name}
                                    </a>
                                </div>
                            </div>
                        ))}

                    </ul>
                </div>
            </div>
        </nav>

    </div>
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
