var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class DegreeDetailContainer extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <h1>Degree Detail Container</h1>
        </div>
      </div>
    )
  }
}

module.exports = {
  DegreeDetailContainer
}
