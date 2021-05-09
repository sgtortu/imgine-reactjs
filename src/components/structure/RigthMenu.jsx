import React, {useEffect, useState} from "react"
import Rotate from "../Rotate"
import Highlight from "../Highlight"
import { connect } from "react-redux";

const Index = ({ urlHistory, changeOrderHistory }) => {
     
    let changeOrder = (list) => {
        console.log(list)
        let last = list.pop() 
        list.unshift(last) 
        changeOrderHistory(list)
    }; 
    const to = () => {
        let list = urlHistory.reverse() 
        let last = list.pop() 
        list = list.reverse()
        list.push(last)   
        changeOrderHistory(list)
    };

    return (<aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
                <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                    <div className="text-sm "> 
                   

        <button onClick={() => changeOrder(urlHistory)} className=" text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
        </button>
        <button onClick={to} className=" text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
   
                        <div className="bg-gray-600 text-white p-5 rounded cursor-pointer">Edit your photo</div> 
                        <Rotate />
                        <Highlight />
                    </div>
                </div>
            </aside> 
    )
}

const mapStateToProps = state => ({
    urlHistory: state.urlHistory 
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
