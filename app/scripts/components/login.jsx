var React = require('react');
var Backbone = require('backbone');


var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class LoginContainer extends React.Component {
  render() {
    return (
      <BaseLayout>
        <div className="col-md-4">
          <h1>Login</h1>
          <LoginForm />
        </div>
        <div className="col-md-4">
          <h1>No Account? Sign Up!</h1>
          <SignupForm />
        </div>
      </BaseLayout>
    );
  }
}

class LoginForm extends React.Component {
  render() {
    return (
      <form id="login">
         <div className="form-group">
           <input className="form-control" name="email" id="email-login" type="email" placeholder="email" />
         </div>

        <div className="form-group">
           <input className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
         </div>

        <input className="btn btn-primary" type="submit" value="Login" />
       </form>
    )
  }
}

class SignupForm extends LoginForm {

}



module.exports = {
  LoginContainer
}
