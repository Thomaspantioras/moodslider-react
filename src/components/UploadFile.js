import React, { Component } from 'react';

class UploadFile extends Component {

  constructor(props){
    super(props);
    // this.state = {
    //   file: ''
    // };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFileChange(e);
  }

  render() {
    return (
        <div className="container mt-3">
            <label htmlFor="exampleFormControlFile1">File to upload:</label>
            <input type="file" name="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.handleChange}/>
        </div>
    )
  }
}

export default UploadFile;