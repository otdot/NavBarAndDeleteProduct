import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// import { useState } from 'react'


function App() {
  // const [showHome, setShowHome] = useState(true)
  // const [showProduct, setShowProduct] = useState(false)

  const NavItems = [
    {
        id: 1, 
        title: 'Todella',
        url: '/Home',
        cName: 'items'
    },
    {
        id: 2,
        title: 'Products',
        url: '/Products',
        cName: 'items'
    }
  ]

  // const clickItem= (id) => {
  //   {id === 1 && setShowHome(!showHome)}
  //   {id === 2 && setShowProduct(!showProduct)}
  //   console.log('clicked', id)
  // }
  return (
    <Router>
      <div className="App">
        <Navbar items={NavItems} />
        <div className='Container'>
          <Route path='/Home' component={Home}></Route>
          <Route path='/Products' component={Products}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
