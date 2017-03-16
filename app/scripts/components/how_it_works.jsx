var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class HowItWorksContainer extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <h1>How It Works Container</h1>
        </div>
      </div>
    )
  }
}

module.exports = {
  HowItWorksContainer
}
