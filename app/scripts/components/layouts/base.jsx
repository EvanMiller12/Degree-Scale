var React = require('react');

class BaseLayout extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        <HeaderNav />
        <Banner />

        {this.props.children}
        
        <Footer />
      </div>
    )
  }
}

class HeaderNav extends React.Component{
  render(){
    return(
      <div className="row">
        <nav className="home-nav-contain navbar">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="home-nav-contain">
            <ul className="home-nav navbar-nav">
              <li>
                <a href="#">How it Works</a>
              </li>
              <li>
                <a href="#" className="btn btn-primary" role="button">Signup</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

class Banner extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="jumbotron">
          <div className="mission-statement">
            <h1>Mission Statement</h1>
          </div>
        </div>
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <footer>
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
      </footer>
    )
  }
}

module.exports = {
  BaseLayout
}
