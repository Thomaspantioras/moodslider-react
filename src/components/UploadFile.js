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

    // this.props.onFileChange(e.target.files);
    this.props.onFileChange(e);
    // console.log('handle child works!');
  
  }

  render() {
    return (
      // <form method="POST" enctype="multipart/form-data" action="/upload" >
      // <form onSubmit={this.props.handleClick}>
      // <form action="/moodslider">
        <div className="container mt-3">
          {/* <div className="form-group"> */}
            <label for="exampleFormControlFile1">File to upload:</label>
            <input type="file" name="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.handleChange}/>
          {/* </div> */}
          {/* <div className="mt-3">
            <button type="submit" className="btn btn-primary btn-sm">Upload</button>
          </div> */}
        </div>
      // </form>
    )
  }
}

export default UploadFile;