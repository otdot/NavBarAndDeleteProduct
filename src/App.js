import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Home from './components/Home';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { useState } from 'react'

// import { useState } from 'react'

const searchInput = document.getElementById("searchInput");

function App() {
  // const [showHome, setShowHome] = useState(true)
  // const [showProduct, setShowProduct] = useState(false)
  //Search products
  const [searchTerm, setSearchTerm] = useState('')
  const [showLinks, setShowLinks] = useState(false)
  const [allProducts, setDeleteProduct] = useState([
    {
      title: "Kevyt Maito",
      price: 1.7,
      id: 1,
      BB: "7.10.21",
    },
    {
      title: "Naudan Jauheliha",
      price: 1.7,
      id: 2,
      BB: "7.10.21",
    },
    {
      title: "Voi",
      price: 1.7,
      id: 3,
      BB: "7.10.21",
    },
    {
      title: "Emmental",
      price: 1.7,
      id: 4,
      BB: "7.10.21",
    },
    {
      title: "Karjalanpiirakka",
      price: 1.7,
      id: 5,
      BB: "7.10.21",
    },
    {
      title: "Reissumies",
      price: 1.7,
      id: 6,
      BB: "7.10.21",
    },
  ]);

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

  

  const onDelete = (id) => {
    setDeleteProduct(allProducts.filter((product) => product.id !== id))
  }

  return (
    <Router>
      <div className="App">
        <div className="Navbar">
          <div className="leftSide">
            <Navbar items={NavItems} showLinks={showLinks} />
            <Button text={showLinks ? 'Close' : 'Open'}
                color={showLinks ? 'tomato' : '#0d90d6'} 
                openLinks={() => setShowLinks(!showLinks)}/>
          </div>
          <div className="rightSide">
            <input placeholder='Search' onChange={(e) => (setSearchTerm(e.target.value))} id="searchInput" className='searchStyle' style={{backgroundColor: "snow"}}></input>
            <Button text='search'/>
          </div>
        </div>
        <div className='Container'>
          <Route path='/Home' component={Home}></Route>
          <Route path='/Products' component={() => <Products onDelete={onDelete} searchTerm={searchTerm} allProducts={allProducts}/>}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
