import React from 'react';
import AppHeader from './AppHeader';
import UploadFile from './UploadFile';

class UploadPage extends React.Component {

  render() {
    return (
      <div>
        <AppHeader />
        <UploadFile />
      </div>
    )
  }
}

export default UploadPage;