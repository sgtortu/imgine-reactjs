import React from "react"

import { Provider } from "react-redux"
import store from "./store"

import Header from "./components/structure/Header"
import LeftMenu from "./components/structure/LeftMenu"
import CenterContent from "./components/structure/CenterContent"
import RigthMenu from "./components/structure/RigthMenu"
import Footer from "./components/structure/Footer"

function App() {
  return (
    <Provider store={store}>
        <Header /> 
        <main className="flex w-full h-screen bg-gray-900">
          <LeftMenu /> 
          <CenterContent /> 
          <RigthMenu /> 
        </main> 
        <Footer /> 
    </Provider>
  );
}

export default App;
