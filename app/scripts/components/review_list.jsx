var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ReviewListContainer extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <h1>Review List Container</h1>
        </div>
      </div>
    )
  }
}

module.exports = {
  ReviewListContainer
}
