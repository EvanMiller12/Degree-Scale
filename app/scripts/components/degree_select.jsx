var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class DegreeSelectContainer extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <h1>Degree Select Container</h1>
        </div>
      </div>
    )
  }
}

module.exports = {
  DegreeSelectContainer
}
