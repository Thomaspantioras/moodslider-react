import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { BrowserRouter } from 'react-router-dom';
import MoodsliderApp from './components/MoodsliderApp';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import UploadPage from './components/UploadPage';


ReactDOM.render((
  //<BrowserRouter>
    <MoodsliderApp />
  //</BrowserRouter>
), document.getElementById('root'));
// ReactDOM.render(<MoodsliderApp />, document.getElementById('root'));
// ReactDOM.render(<UploadPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
