var React = require('react');

var User = require('../models/user').User;
var Profile = require('../models/Profile').Profile;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileDetailContainer extends React.Component{
  constructor(props){
    super(props);

    var profile = new Profile();
    profile.set('objectId', props.id);
    profile.fetch().then(() => {
      this.setState({profile});
    });

    this.state = {
      profile
    };
  }
  render(){
    var profile = this.state.profile;
    var user = User.current();
    return(
      <BaseLayout>
        <div className="container">
          <div className="user-profile col-sm-6 col-sm-offset-3">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2>Your Profile</h2>
                <div className="user-avatar">
                  <a name="file" type="file" className="avatar">
                    <img src={profile.get('avatar_url')} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <div className="user-profile-details">
                  <div className="users-name">
                    <span>{profile.get('first_name')}</span>
                    <span>{profile.get('last_name')}</span>
                  </div>
                  <div className="location">
                    <span>{profile.get('location')}</span>
                  </div>
                  <div className="email">
                    <span>{user.get('username')}</span>
                  </div>
                  <DegreeList profile={this.state.profile}/>
                </div>
              </div>
            </div>
            <div className="edit-profile-btn col-sm-6 col-sm-offset-3">
             <a href={'#profile/' + profile.get('objectId') + '/edit/'} className="btn btn-primary">
               Edit Profile
             </a>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

class DegreeList extends React.Component{
  render(){
    var degreeList = this.props.profile.get('degrees').map((degree) => {

      return (
        <li key={degree.cid}>
          {degree.get('school') + ' '}
          {degree.get('degree_type') + ' '}
          {degree.get('major')}
        </li>
      )
   });

    return (
      <ul>
       {degreeList}
      </ul>
    )
  }
}

module.exports = {
  ProfileDetailContainer
}
