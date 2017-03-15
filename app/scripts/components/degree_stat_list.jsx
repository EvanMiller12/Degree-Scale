var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class DegreeStatListContainer extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <h1>Degree Statistics List Container</h1>
        </div>
      </div>
    )
  }
}

module.exports = {
  DegreeStatListContainer
}
