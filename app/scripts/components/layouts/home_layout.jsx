var React = require('react');

var BaseLayout = require('./base.jsx').BaseLayout;

class HomeLayout extends React.Component {
  render(){
    return(
      <BaseLayout {...this.props}>
        <Banner />
        {this.props.children}
      </BaseLayout>
    )
  }
}

class Banner extends React.Component{
  render(){
    return(
      <div className="row banner-contain">
        <div className="jumbotron home-banner">
          <img src="images/degree-scale.png" />
          <div className="mission-statement col-md-offset-4">
            <h1>Discover The Value of an Education</h1>
          </div>
        </div>
      </div>

    )
  }
}

module.exports = {
  HomeLayout
}
