import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import InternalRoute from "./Route"
import { createBrowserHistory } from 'history';
import { useOnline } from "./hooks/"
import { notify } from "./utill/"
const App = () => {
  const [ isClientOnline, setClientOnline ] = useOnline();
  
  useEffect(() => {
   
    if(isClientOnline) {
      notify("enfo","Your are offline")
    }
  },[])
  return (
    <Provider store={store} history={createBrowserHistory()}>
      <InternalRoute />
    </Provider>
  );
};

export default App;