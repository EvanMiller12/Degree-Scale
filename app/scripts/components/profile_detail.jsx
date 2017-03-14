var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileDetailContainer extends React.Component{
  render(){
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
                    <span>Users Name</span>
                  </div>
                  <div className="location">
                    <span>user location</span>
                  </div>
                  <div className="email">
                    <span>user email</span>
                  </div>
                  <div className="education">
                    <span>users degrees</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-profile-btn col-sm-6 col-sm-offset-3">
             <a href='#' className="btn btn-primary">
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
