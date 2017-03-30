var React = require('react');

var User = require('../models/user').User;
var Profile = require('../models/Profile').Profile;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileDetailContainer extends React.Component{
  constructor(props){
    super(props);

    var profile = new Profile();

    if(this.props.id){
      profile.set('objectId', this.props.id);
      profile.fetch().then(() => {
        this.setState({ profile: profile });
      });
    }

    this.state = {
      profile
    };
  }
  render(){
    var profile = this.state.profile;

    var user = User.current();
    return(
      <BaseLayout>
        <div className=" row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="user-profile-contain">
              <h2>Hello {profile.get('first_name')}!</h2>
              <div className="user-avatar">
                <a name="file" type="file" className="avatar">
                  <img src={profile.get('avatar_url')} alt="" />
                </a>
              </div>
              <div className="row">
                <div className="user-profile-details">
                  <div className="user-name">
                    {profile.get('first_name') + ' ' }
                    {profile.get('last_name')}
                  </div>
                  <div className="location">
                    <label>Location: </label>
                    <span>{profile.get('location')}</span>
                  </div>
                  <div className="email">
                    <label>Email: </label>
                    <span>{user.get('username')}</span>
                  </div>
                  <label>Degrees:</label>
                  <DegreeList profile={this.state.profile}/>
                </div>
              </div>
              <div className="edit-profile-btn">
               <a href={'#profile/edit/' + profile.get('objectId') + '/'} className="btn btn-primary">
                 Edit Profile
               </a>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

class DegreeList extends React.Component{
  render() {
    var degrees = this.props.profile.get('degrees').length != 0 ? this.props.profile.get('degrees') : null
    if (degrees) {
      degrees = degrees.map(function(degree, index) {
            return (
              <li key={index}>
                {degree.school + ' '}
                {degree.degree + ' '}
                {degree.major}
              </li>
            )
      })
    }
    return (
      <ul className="user-degrees">
        { degrees }
      </ul>
    )
  }
}

module.exports = {
  ProfileDetailContainer
}
