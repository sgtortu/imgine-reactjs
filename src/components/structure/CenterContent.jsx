import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import Imgix from "react-imgix";

const Index = ({ urlHistory, changeOrderHistory }) => {

    let defaultOb = {
        name: "Select a picture",
        url: "https://assets.imgix.net/examples/pione.jpg"
    }
    const [lastPhoto, setLastPhoto] = useState(
        urlHistory.length > 0 ? urlHistory[urlHistory.length - 1] 
        :defaultOb) 
 
    useEffect(()=>{
        setLastPhoto(urlHistory[urlHistory.length - 1] )
    },[])    
    // const back = (e) => {
    //     e.preventDefault()
    //     if (actualPhoto <= -1 && actualPhoto > (-urlHistory.length)) {
    //         changePhoto(actualPhoto - 1)
    //     }
    // };
    // const to = (e) => {
    //     e.preventDefault()
    //     if (actualPhoto < -1 && actualPhoto >= (-urlHistory.length)) {
    //         changePhoto(actualPhoto + 1)
    //     }
    //     console.log(actualPhoto)
    // };

    return (<section className="w-full p-4 bg-gradient-to-r from-gray-800 to-green-900">
        <div className="text-white text-lg">{lastPhoto.name}</div>

        <div className="w-full h-full p-4 text-md">
            <Imgix
                src={lastPhoto.url}
            />
        </div>
    </section>
    )
}

const mapStateToProps = (state) => ({
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
