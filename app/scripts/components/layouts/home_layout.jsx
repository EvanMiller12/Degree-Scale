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
          <div className="mission-statement">
            <img src="images/degree-scale-logo.png" />
            <h1>Discover The Value of an Education</h1>
          </div>
          <div className="col-md-6 col-md-offset-1"></div>
            <p>From government statistics to real peoples opinions</p>
        </div>
      </div>

    )
  }
}

module.exports = {
  HomeLayout
}
