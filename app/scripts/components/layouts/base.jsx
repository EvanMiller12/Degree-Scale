var React = require('react');

var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var User = require('../../models/user.js').User;

class BaseLayout extends React.Component {
  render(){
    return(
      <div>
        <HeaderNav />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

class HeaderNav extends React.Component{
  render(){
    console.log(User.current('user'));
    return(
      <div className="container">
        <div className="row">
          <nav className="navbar">
            <ul className="home-nav">
              <li>
                <a className="navbar-brand" href="#">Navbar</a>
              </li>
              <li>
                <span className="proj-info-nav">
                  <a href="#">How it Works</a>
                </span>
              </li>
                 {User.current() ? <LoggedInNavItem /> : <SignupNavItem />}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

class SignupNavItem extends React.Component{
  render(){
    return(
      <a href="#auth/" className="btn btn-primary" role="button">
        Signup
      </a>
    )
  }
}

class LoggedInNavItem extends React.Component{
  render(title){
    var user = User.current()

    return(
      <NavDropdown title={user.get('username')} id="nav-dropdown">
        <MenuItem className="dropdown-item" href="#profile/">View Profile</MenuItem>
        <MenuItem className="dropdown-item" href="#profile/create/">Edit Profile</MenuItem>
        <MenuItem className="dropdown-item" href="#">Logout</MenuItem>
      </NavDropdown>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div clasName="container">
        <div className="row">
          <div className="footer">
            <ul className="footer-nav">
              <li>
                <span>App Name,</span>
                <span>an app built by <a href="#">Evan Miller</a></span>
              </li>
              <li>
                <a href="#">Home</a>
                <a href="#auth/">Signup</a>
                <a href="#">Write Review</a>
              </li>
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
