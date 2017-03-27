var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user.js').User;

var HomeLayout = require('./layouts/home_layout.jsx').HomeLayout;

class LoginContainer extends React.Component {
  constructor(props){
    super(props);

    this.login = this.login.bind(this);
  }
  login(creds){
    User.login(creds,  function(user){
      Backbone.history.navigate('profile/create/', {trigger: true});
    });
  }
  createAccount(creds){
    var user = new User(creds);
    user.save().then(function(data){
      localStorage.setItem('user', JSON.stringify(data));
      Backbone.history.navigate('profile/create/', {trigger: true});
    });
  }
  render() {
    return (
      <HomeLayout>
          <LoginForm
            action={this.login}
            submitBtn='Login'
            title = 'Login'
            />
          <SignupForm
            action={this.createAccount}
            submitBtn='Signup'
            title = 'Signup for Free'
            />
      </HomeLayout>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }
  updateEmail(e){
    this.setState({username: e.target.value});
  }
  updatePassword(e){
    this.setState({password: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h3>{this.props.title}</h3>
          <form onSubmit={this.handleSubmit} id="login">
             <div className="form-group">
               <input onChange={this.updateEmail} value={this.state.username} className="form-control" name="email" id="user-login" type="email" placeholder="email" />
             </div>

            <div className="form-group">
               <input onChange={this.updatePassword} value={this.state.password} className="form-control" name="password" id="user-password" type="password" placeholder="Password Please" />
             </div>

            <input value={this.props.submitBtn} className="btn btn-primary" type="submit" />
           </form>
        </div>
      </div>
    )
  }
}

class SignupForm extends LoginForm {

}



module.exports = {
  LoginContainer
}
