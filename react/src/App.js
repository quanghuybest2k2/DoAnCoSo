import React, { Component } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './Views/Home/index';
import Privacy from './Views/Home/Privacy';
import ThuatToan from './Views/Home/ThuatToan';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
            <Route path='/privacy' element={<Privacy />}></Route>
            <Route path='/thuattoan' element={<ThuatToan />}></Route >
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}


export default App;
