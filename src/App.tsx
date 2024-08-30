import { Provider } from "react-redux";
import store from "./store"
import Form from "./container/Form/Form";
import Lista from "./container/Lista/Lista"
import { GlobalStyled } from "./GlobalStyled/GlobalStyled";
import React from "react";


function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Form />
      <Lista />
    </Provider>
  )
}

export default App;
