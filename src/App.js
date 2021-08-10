import React from 'react';
import { Provider } from "react-redux";
import store from './redux/store';
import Players from './components/Players';
import TeemSelected from './components/TeemSelected';
import "./styles/style.css"

const App = () => (
  <Provider store={store} >
    <main>
      <h1> EDmanager</h1>
      <Players />
      <TeemSelected />
    </main>
  </Provider>
)

export default App;
