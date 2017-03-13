var React = require('react');

class BaseLayout extends React.Component {
  render(){
    return(
      <div>
        <Banner />
        <HeaderNav />
          <div className="container">
            {this.props.children}
          </div>
        <Footer />
      </div>
    )
  }
}

class HeaderNav extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <nav className="navbar">
            <ul className="home-nav">
              <li>
                <a className="navbar-brand" href="#">Navbar</a>
              </li>
              <li>
                <a href="#">How it Works</a>
              </li>
              <li>
                <a href="#" className="btn btn-primary" role="button">Signup</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

class Banner extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron">
            <div className="mission-statement">
              <h1>Mission Statement</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div clasName="container">
        <div className="row footer">
          <div className="footer-copyright">
            <span>App Name,</span>
            <span>an app built by <a href="#">Evan Miller</a></span>
          </div>
          <div className="footer-nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Signup</a></li>
              <li><a href="#">Write Review</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  BaseLayout
}
