import React from 'react';
import NavBar from './NavBar';

class AppHeader extends React.Component {

  render() {
    const navBarData = this.props.navBarData;
    const divStyle = { width: 135 };
    return (
      <div className="container mt-4" fragment="menu">
        <div className="row">
          <div className="col-sm-12 col-md-2 m-auto">
            <img 
              className="mx-auto justify-content-center d-flex" 
              id="logo" 
              src={window.location.origin + '/images/literature-mood.png'} 
              alt="logo" 
              style={divStyle} 
            />
          </div>
          <div className="col-sm-12 col-md-10">
            <div className="m-auto display">
              <h1 className="text-center display-4" id="pageTitle" text="">Moodslider</h1>
            </div>
            <NavBar navBarData = {navBarData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHeader;