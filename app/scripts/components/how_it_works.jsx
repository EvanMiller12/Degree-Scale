var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class HowItWorksContainer extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>How It Works Container</h1>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  HowItWorksContainer
}
