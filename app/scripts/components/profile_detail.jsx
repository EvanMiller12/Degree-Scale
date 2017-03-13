var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileDetailContainer extends React.Component{
  render(){
    return(
      <div class="user-profile col-sm-6 col-sm-offset-3">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <div class="user-avatar">
              <a name="file" type="file" class="avatar">
                <img src="http://placehold.it/250x250" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <div class="user-profile-details">
              <div class="users-name">
                <span>Users Name</span>
              </div>
              <div class="location">
                <span>user location</span>
              </div>
              <div class="email">
                <span>user email</span>
              </div>
              <div class="education">
                <span>users degrees</span>
              </div>
            </div>
          </div>
        </div>
        <div class="edit-profile-btn col-sm-6 col-sm-offset-3">
         <a href='#' class="btn btn-primary">
           Edit Profile
         </a>
        </div>
      </div>
    )
  }
}

module.exports = {
  ProfileDetailContainer
}
