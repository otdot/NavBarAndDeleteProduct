import {
    Link,
  } from 'react-router-dom'


const NavItem = ({item }) => {
    return (
        <div>
            <Link className={item.cName}
            to={item.url}>
            {item.title}
            </Link>
        </div>
    )
}

export default NavItem
