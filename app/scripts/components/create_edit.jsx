var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user.js').User;
var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileCreateEditContainer extends React.Component {
  constructor(props){
    super(props);
    var userProfile = User.current();

    this.saveProfile = this.saveProfile.bind(this);

    if(this.props.id){
      userProfile.set('objectId', this.props.id);
      userProfile.fetch().then(() => {
        this.setState({userProfile});
      });
    }

    this.state = {
      userProfile
    }

  }

  saveProfile(formData){
    var user = User.current();

    user.set({
      'first_name': formData.first_name,
      'last_name': formData.last_name,
      'location': formData.location
    });

    user.save().then(() => {
      Backbone.history.navigate('#profile/' + user.get('objectId') + '/', {trigger: true});
    });
  }
  render() {
    return (
      <BaseLayout>
        <div className="container">
          <div className="row">
            <ProfileCreateEditForm
              userProfile={this.state.userProfile}
              saveProfile={this.saveProfile}
              />
          </div>
        </div>
      </BaseLayout>
    )
  }
}

class ProfileCreateEditForm extends React.Component {
  constructor(props){
    super(props);

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.state = this.props.user.toJSON();
    this.state = {
      first_name: this.props.userProfile.get('first_name'),
      last_name: this.props.userProfile.get('last_name'),
      location: this.props.userProfile.get('location')
    }
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.user.toJSON());
  }
  updateFirstName(e){
    this.setState({first_name: e.target.value});
  }
  updateLastName(e){
    this.setState({last_name: e.target.value});
  }
  updateLocation(e){
    this.setState({location: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.saveProfile(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="profile-form">
          <div className="row">
            <h1>{this.props.userProfile.isNew() ? 'Create' : 'Edit'} Profile</h1>
              <div className="col-xs-4 col-md-2">
                <div className="thumbnail">
                  <a name="file" type="file" className="add-image-thumbnail">
                    <span className="glyphicon glyphicon-plus"></span>
                    <h5>Add Image</h5>
                  </a>
                </div>
              </div>
              <div className="col-xs-4 col-md-6">
                <div className="form-group">
                  <input onChange={this.updateFirstName} value={this.state.first_name} className="form-control" type="text" placeholder="First Name"/>
                  <input onChange={this.updateLastName} value={this.state.last_name} className="form-control" type="text" placeholder="Last Name"/>
                </div>
                <div className="form-group">
                  <input onChange={this.updateLocation} value={this.state.location} className="form-control" type="text" placeholder="Location (state)"/>
                </div>
              </div>
          </div>
          <div className='row'>
            <div className="col-md-8">
              <input type="text" placeholder="College"/>
              <input type="text" placeholder="Associate or Bachelor"/>
              <input type="text" placeholder="Major"/>
              <span>
                  <button type="button" name="button">
                    <span className="glyphicon glyphicon-plus"></span>
                  </button>
              </span>
            </div>
          </div>
            <input className="btn btn-success" type="submit" value='Save' />
      </form>
    )
  }
}

module.exports = {
    ProfileCreateEditContainer
}
