import React from "react"

import { Provider } from "react-redux"
import store from "./store"

import Header from "./components/Header"
import LeftMenu from "./components/LeftMenu"
import CenterContent from "./components/CenterContent"
import RigthMenu from "./components/RigthMenu"

function App() {
  return (
    <Provider store={store}>
      <Header /> 
      <main className="flex w-full h-screen">
        <LeftMenu /> 
        <CenterContent /> 
        <RigthMenu /> 
      </main>
    </Provider>
  );
}

export default App;
