import React from 'react';
import { Provider } from "react-redux";
import store from './redux/store';
import Players from './components/Players';
import TeemSelected from './components/TeemSelected';
import "./styles/style.css"
import Search from './components/Search';

const App = () => (
  <Provider store={store} >
    <main>
      <Search />
      <Players />
      <TeemSelected />
    </main>
  </Provider>
)

export default App;
