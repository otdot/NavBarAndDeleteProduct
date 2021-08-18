import "../App.css"
import NavItem from "./NavItem"
import Button from "./Button"
import Products from "./Products"
import Home from "./Home"
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'


const Navbar = ({items }) => {
    const [showLinks, setShowLinks] = useState(true)


    return (
        <div className='Navbar'>
            <div className='leftSide'>
                <div className="links" id={showLinks ? 'hidden' : ''}>
                        {items.map((item) => (
                            <NavItem 
                            key={item.id}
                            item={item}
                            />
                            ))}
                </div>
                <Button text={showLinks ? 'Close' : 'Open'}
                color={showLinks ? 'tomato' : '#0d90d6'} 
                openLinks={() => setShowLinks(!showLinks)}/>
            </div>
            <div className="rightSide">
                <input placeholder='Search' className='searchStyle' style={{backgroundColor: "snow"}}></input>
                <Button text='search'/>
            </div>
        </div>
    )
}

export default Navbar
