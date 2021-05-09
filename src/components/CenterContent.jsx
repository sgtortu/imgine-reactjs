import React, {useState} from "react"
import { connect } from "react-redux";
import Imgix from "react-imgix";

const Index = ({urlHistory}) => {
    let lastPhoto = {}
    if (urlHistory.length > 0) {
        lastPhoto = urlHistory[urlHistory.length - 1]
    } else {
        lastPhoto = {
            name: "Select a picture",
            url: "https://assets.imgix.net/examples/pione.jpg"
        }
    }

    console.log(lastPhoto)
    return (<section className="w-full p-4">
            
                <div className="w-full h-full p-4 text-md">
                    {lastPhoto.name}
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
    // sendPhotosToState(data) {
    //     dispatch({
    //         type: "LOAD_PHOTOS",
    //         payload: data
    //     })
    // },
    // sendUrlHistoryToState(data) {
    //     dispatch({
    //         type: "URL_HISTORY",
    //         payload: data
    //     })
    // } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
