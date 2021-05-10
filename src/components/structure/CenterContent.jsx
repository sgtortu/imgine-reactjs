import React from "react"
import { connect } from "react-redux";
import Imgix from "react-imgix";
import store from "../../store"

const Index = ({actualImage, urlHistory, changeOrderHistory }) => {

    let saved = store.getState().urlHistory
    let lastPhoto = saved[saved.length - 1]
 
    let changeOrderBack = (list) => {
    console.log(list)
    let last = list.pop()
        list.unshift(last)
        changeOrderHistory(list)
        lastPhoto = list[list.length - 1]
    };
    let changeOrderTo = () => {
        let list = urlHistory.reverse()
        let last = list.pop()
        list = list.reverse()
        list.push(last)
        changeOrderHistory(list)
        lastPhoto = list[list.length - 1]
    };

    return (<section className="w-full p-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="grid justify-items-center">
            <div>
                <div className="text-white ml-3 ">History</div>
                <button onClick={() => changeOrderBack(urlHistory)} className=" text-white p-2 rounded cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </button>
                <button onClick={() => changeOrderTo(urlHistory)} className=" text-white p-2 rounded cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
        {lastPhoto ?
            <>
                <div className="text-white text-lg">{lastPhoto.name}</div>
                <div className="w-full h-full p-4 text-md overflow-y-scroll">
                    <Imgix
                        src={lastPhoto.url}
                    />
                </div>
            </>
            :
            <div className="text-lg text-center mt-12 text-white ml-3 ">Select an image...</div>
        }
    </section>
    )
}

const mapStateToProps = (state) => ({
    urlHistory: state.urlHistory, 
    actualImage: state.actualImage 
})

const mapDispatchToProps = dispatch => ({
    changeOrderHistory(data) {
        dispatch({
            type: "CHANGE_ORDER_HISTORY",
            payload: data
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
