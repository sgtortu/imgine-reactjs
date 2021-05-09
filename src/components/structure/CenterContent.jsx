import React, {useState} from "react"
import { connect } from "react-redux";
import Imgix from "react-imgix";

const Index = ({urlHistory, changeOrderHistory}) => {
     
    let lastPhoto = {}
    if (urlHistory.length > 0) {
        lastPhoto = urlHistory[urlHistory.length -1]
    } else {
        lastPhoto = {
            name: "Select a picture",
            url: "https://assets.imgix.net/examples/pione.jpg"
        }
    }
  
    const back = () => {
        let last = urlHistory.pop() 
        urlHistory.unshift(last) 
        changeOrderHistory(urlHistory)
    }; 
    const to = () => {
        let list = urlHistory.reverse() 
        let last = list.pop() 
        list = list.reverse()
        list.push(last)   
        changeOrderHistory(list)
    }; 
      
    return (<section className="w-full p-4 bg-gradient-to-r from-gray-800 to-green-900">
                <div className="text-white text-lg">{lastPhoto.name}</div> 


                <button onClick={back} className="w-full text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                    Back
                </button>
                <button onClick={to} className="w-full text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                    To
                </button>

                <div className="w-full h-full p-4 text-md">
                    <Imgix
                        src={lastPhoto.url} 
                        //src="https://assets.imgix.net/unsplash/pineneedles.jpg?…0?rot=100?rot=100?rot=100?rot=100?rot=100?rot=100"
                    />
                </div>
            </section> 
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
