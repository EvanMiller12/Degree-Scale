var Backbone = require('backbone');
var React = require('react');

var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var ProfileCollection = require('../../models/profile').ProfileCollection;

var User = require('../../models/user.js').User;

class BaseLayout extends React.Component {
  render(){
    return(
      <div className="container-fluid light-gray-bkgrnd">
        <HeaderNav />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

class HeaderNav extends React.Component{
  render(){
    // console.log(User.current('user'));
    return(
      <div className="row dark-teal-bkgrnd">
        <nav className="navbar-fixed-top row dark-teal-bkgrnd">
          <ul className="home-nav nav col-sm-10 col-sm-offset-1">
            <li>
              <a className="navbar-brand" href="#">DegreeScale</a>
            </li>
            <li role="presentation" className="active"><a href="#">Home</a></li>
            <li role="presentation" ><a href="#review/create/">Leave Review</a></li>
            <li role="presentation" ><a href="#review/">Find Review</a></li>
            {User.current() ? <LoggedInNavItem /> : <SignupNavItem />}
          </ul>
        </nav>
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
  constructor(props){
    super(props);

    var userId = User.current().get('objectId');
    var profileCollection = new ProfileCollection();

    profileCollection.parseWhere('owner', '_User', userId).fetch().then((response)=>{
      if(response.results.length != 0) {
          var profileId = profileCollection.models[0].get('objectId');
          this.setState({ profileId: profileId });
      }
    })

    this.state = {
      profileId: null,
    }
  }

  handleLogout(){
    User.logout();
    localStorage.clear();
    Backbone.history.navigate('auth/', {trigger: true});
  }

  render(title){
    var user = User.current()

    return(
      <NavDropdown className="dropdown" title={user.get('username')} id="nav-dropdown">
        <MenuItem className="dropdown-item" href={'#profile/' + this.state.profileId + '/'}>View Profile</MenuItem>
        <MenuItem className="dropdown-item" href={ '#profile/' + (this.state.profileId ? 'edit/' + this.state.profileId : 'create') + '/'}>{ this.state.profileId ? 'Edit Profile' : 'Create Profile' }</MenuItem>
        <MenuItem className="dropdown-item" onClick={this.handleLogout}>Logout</MenuItem>
      </NavDropdown>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div className="row light-gray-bkgrnd">
        <footer className="footer dark-teal-bkgrnd">
          <ul className="footer-nav">
            <li>
              <img src="images/degree-scale-logo.png" className="navbar-brand" />
              <span>an app built by <a href="#">Evan Miller</a></span>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}

module.exports = {
  BaseLayout
}
