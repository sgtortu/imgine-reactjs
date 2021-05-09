import React from "react"
import Rotate from "../utils/Rotate"

const Index = () => {
     
    return (<aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
                <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                    <div className="text-sm">
                        <div className="bg-gray-600 text-white p-5 rounded cursor-pointer">Edit your photo</div> 
                        <Rotate />
                    </div>
                </div>
            </aside> 
    )
}

export default Index
