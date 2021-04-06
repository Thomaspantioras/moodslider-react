import React from 'react';
import {Link} from 'react-router-dom';

// import {Route} from 'react-router-dom';

const NavBarElement = (props) => {
  return (
    <div>
      <li>
        <Link className="navbar-brand" id={props.id} to={props.link}>{props.name}</Link>
      </li>
    </div>    
  )
}

class NavBar extends React.Component {
  
  render() {
    
    const navBarData = this.props.navBarData;

    function createNavBarElements() {
      const elems = [];
      navBarData.forEach((element, index) => {
        elems.push(<NavBarElement key={index} id={element.id} link={element.link} name={element.name} />);
      })

      return elems;
    }

    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            {createNavBarElements()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;