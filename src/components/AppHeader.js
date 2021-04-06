import React from 'react';
import NavBar from './NavBar';

class AppHeader extends React.Component {

  render() {
    const navBarData = this.props.navBarData;
    const divStyle = { width: 135 };
    return (
    
      <div className="container mt-4" fragment="menu">
                <div className="row">

                    <div className="col-2 m-auto">
                        <img className="mx-auto" 
                            id="sky-logo" 
                            src={window.location.origin + '/images/sky_logo_transparent.png'} 
                            alt="sky logo" 
                            style={divStyle} />
                    </div>

                    <div className="col-10">
                        <div className="m-auto display">
                            <h1 className="text-center display-4" id="pageTitle" text="">Moodslider Page</h1>
                        </div>

                        <NavBar navBarData = {navBarData}/>

                    </div>
                </div>
            </div>
    );
  }
}

export default AppHeader;