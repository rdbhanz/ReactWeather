//jsx code- javascript xml
var React = require('react'); //since we removed the scripts tags,
var ReactDOM = require('react-dom'); //global variable no-longer exists and need to include them via webpack
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //new es6 destructing syntax S5 E27
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>             // means when the path is "/"  we have to show main component
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>             //this should be displayed when "/" is followed by "Weather"(aka index page)
      </Route>
    </Router>,
    document.getElementById('app')
  );
