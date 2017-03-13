var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user.js').User;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class LoginContainer extends React.Component {
  constructor(props){
    super(props);

    this.login = this.login.bind(this);
  }
  login(creds){
    User.login(creds,  function(user){
      Backbone.history.navigate('', {trigger: true});
    });
  }
  createAccount(creds){
    var user = new User(creds);
    user.save().then(function(data){
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
  render() {
    return (
      <BaseLayout>
        <div className="col-md-4">
          <h1>Login</h1>
          <LoginForm
            action={this.login}
            submitBtn='Login'
            />
        </div>
        <div className="col-md-4">
          <h1>No Account? Sign Up!</h1>
          <SignupForm
            action={this.createAccount}
            submitBtn='Signup'
            />
        </div>
      </BaseLayout>
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
      <form onSubmit={this.handleSubmit} id="login">
         <div className="form-group">
           <input onChange={this.updateEmail} value={this.state.username} className="form-control" name="email" id="user-login" type="email" placeholder="email" />
         </div>

        <div className="form-group">
           <input onChange={this.updatePassword} value={this.state.password} className="form-control" name="password" id="user-password" type="password" placeholder="Password Please" />
         </div>

        <input value={this.props.submitBtn} className="btn btn-primary" type="submit" />
       </form>
    )
  }
}

class SignupForm extends LoginForm {

}



module.exports = {
  LoginContainer
}
