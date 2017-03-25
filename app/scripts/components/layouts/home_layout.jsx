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
      <div className="row light-gray-bkgrnd">
        <div className="jumbotron home-banner dark-teal-bkgrnd">
          <div className="mission-statement">
            <h1>Mission Statement</h1>
          </div>
        </div>
      </div>

    )
  }
}

module.exports = {
  HomeLayout
}
