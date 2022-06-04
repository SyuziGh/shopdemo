import React from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import WomanPage from './pages/WomanPage.js'
import HomePage from "./pages/HomePage.js";
import ManPage from "./pages/ManPage";
import WomanDresses from "./components/Woman/WomanDresses";
import WomanBags from "./components/Woman/WomanBags";
import ManShirts from './components/Man/ManShirts'
import ManShoes from './components/Man/ManShoes'

class App extends React.Component{
  render(){
    return(
      <>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <div className='header nav'>
            <ul>
              <li><Link to='/man'>Man</Link></li>
              <li><Link to='/woman'>Woman</Link></li>
            </ul>
          </div>
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route  exact path="man" element={<ManPage/>}>
              <Route path="shirts" element={<ManShirts/>}/>
              <Route path="shoes" element={<ManShoes/>}/>
            </Route>
            <Route exact path="woman" element={<WomanPage/>}>
              <Route path="dresses" element={<WomanDresses/>}/>
              <Route path="bags" element={<WomanBags/>}/>
            </Route>
          </Routes>
        </Router>
      </>
    )
  }
}
export default App

