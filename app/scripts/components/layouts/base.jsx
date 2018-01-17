var Backbone = require('backbone');
var React = require('react');

var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var ProfileCollection = require('../../models/profile').ProfileCollection;

var User = require('../../models/user.js').User;

class BaseLayout extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
      loading: true
    }
  }

  componentDidMount(){
    setTimeout(() => this.setState({ loading: false }), 500);
  }
  render(){
    const { loading } = this.state;

    if(loading) {
      return <div className="load"></div>;
    }
    return(
      <div className="container-fluid app-wrapper">
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
      <nav className="header-nav navbar-fixed-top">
        <a className="navbar-brand navbar-logo" href="#">
          <img src="images/degree-scale.png" className="logo" />
        </a>
        <ul className="nav nav-pills pull-right">
          <li role="presentation" >
            <a href="#">Home</a>
          </li>
          <li role="presentation" className="nav-desktop">
            <a href="#review/create/">Leave Review</a>
          </li>
          <li role="presentation" className="nav-desktop" >
            <a href="#review/">Find Review</a>
          </li>
          {User.current() ? <LoggedInNavItem /> : <SignupNavItem />}
        </ul>
      </nav>
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
      <NavDropdown title={user.get('username')} id="nav-dropdown">
        <MenuItem href={'#profile/' + this.state.profileId + '/'}>View Profile</MenuItem>
        <MenuItem href={ '#profile/' + (this.state.profileId ? 'edit/' + this.state.profileId : 'create') + '/'}>{ this.state.profileId ? 'Edit Profile' : 'Create Profile' }</MenuItem>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </NavDropdown>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div className="row footer-contain">
        <footer className="footer">
          <img src="images/degree-scale.png" className="logo navbar-logo" />
          <ul className="footer-nav">
            <li>
              <span>an app built by <a href="#">Evan Miller</a></span>
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
