var React = require('react');

var User = require('../models/user').User;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileDetailContainer extends React.Component{
  constructor(props){
    super(props);

    var user = new User();
    user.set('objectId', props.id);
    user.fetch().then(() => {
      this.setState({user});
    });

    this.state = {
      user
    };
  }
  render(){
    var user = this.state.user;
    var currentUser = User.current();
    return(
      <BaseLayout>
        <div className="container">
          <div className="user-profile col-sm-6 col-sm-offset-3">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2>Your Profile</h2>
                <div className="user-avatar">
                  <a name="file" type="file" className="avatar">
                    <img src="http://placehold.it/250x250" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="user-profile-details">
                  <div className="users-name">
                    <span>{user.get('first_name')}</span>
                    <span>{user.get('last_name')}</span>
                  </div>
                  <div className="location">
                    <span>{user.get('location')}</span>
                  </div>
                  <div className="email">
                    <span>{currentUser.get('username')}</span>
                  </div>
                  <div className="education">
                    <span>users degrees</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-profile-btn col-sm-6 col-sm-offset-3">
             <a href={'#profile/' + user.get('objectId') + '/edit/'} className="btn btn-primary">
               Edit Profile
             </a>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

module.exports = {
  ProfileDetailContainer
}
