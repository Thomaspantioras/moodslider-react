import React, { Component } from 'react';
import '../MoodsliderApp.css';
import AppHeader from './AppHeader';
import MainPage from './MainPage';
import UploadFile from './UploadFile';
import xml2js from 'xml2js';
import {data} from '../data'

import {
  BrowserRouter as Router,
  Route,
  // Link,
  // Switch,
  // Redirect
} from 'react-router-dom'


class MoodsliderApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      file: data
      // file: `<programmeData>
      //      <title>Programme Data</title> 
      //      <programme id="1">
      //        <name></name>
      //        <imagePath></imagePath>
      //        <mood></mood>
      //        <mood></mood>
      //      </programme>
      //    </programmeData>`
    };
    this.handleFileContent = this.handleFileContent.bind(this);
  }

  handleFileContent(e) {
    let files = e.target.files; // FileList object

    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = (e) => {
      this.setState({
        file: e.target.result
      })
    //  console.log(this.state.file);
    //  console.log(e.target.result);
    }
  }


    getMovieContentAsObject() {
       
        var parser = new xml2js.Parser();
        // parser.parseString(this.xml)
        //     .then(res => res);

        let res;
        // parser.parseString(this.xml, function (err, result) {
        parser.parseString(this.state.file, function (err, result) {
            res = result;
        });
        console.log(res);
        return res;
    }

    render() {

      const navBarElementData = [
        { id: "moodsliderMenu", link: "/moodslider", name: "Moodslider" },
        { id: "uploadContentMenu", link: "/upload", name: "Upload Content" }
      ];

      return (
        <Router>
          <div>
              <AppHeader navBarData = {navBarElementData}/>
              <Route path="/moodslider" render={(props) => <MainPage moviesContent={this.getMovieContentAsObject()} />} />
              {/* <Route path="/upload" component={UploadFile} /> */}
              <Route path="/upload" render={(props) => <UploadFile onFileChange={this.handleFileContent} />} />
          </div>
        </Router> 
        
      );
    }
}

export default MoodsliderApp;