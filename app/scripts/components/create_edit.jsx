var React = require('react');
var Backbone = require('backbone');
var Dropzone = require('react-dropzone');

var User = require('../models/user.js').User;
var UserDegree = require('../models/user_degree').UserDegree;
var UserDegreeCollection = require('../models/user_degree').UserDegreeCollection;
var Profile = require('../models/profile').Profile;
var ProfileCollection = require('../models/profile').ProfileCollection;
var ParseFile = require('../models/parse').ParseFile;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileCreateEditContainer extends React.Component {
  constructor(props){
    super(props);

    var profile = new Profile();
    var degrees = new UserDegreeCollection();

    if(this.props.id){
      profile.set('objectId', this.props.id);
      profile.fetch().then(() => {
        var degrees = new UserDegreeCollection(profile.get('degrees'));

        this.setState({ profile: profile, first_name: profile.get('first_name'), last_name: profile.get('last_name'), location: profile.get('location') });
        this.setState({ preview: profile.get('avatar_url')});
        this.setState({ degrees: degrees });
      });
    }

    this.state = {
      degrees,
      profile,
      school: null,
      degree: null,
      major: null,
      preview: null,
      pic: null,
      first_name: null,
      last_name: null,
      location: null
    }

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateSchool = this.updateSchool.bind(this);
    this.updateDegree = this.updateDegree.bind(this);
    this.updateMajor = this.updateMajor.bind(this);
    this.addDegree = this.addDegree.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  updateFirstName(e) {
    this.setState({ first_name: e.target.value })
    this.state.profile.set({first_name: e.target.value});
  }
  updateLastName(e) {
    this.setState({ last_name: e.target.value })
    this.state.profile.set({ last_name: e.target.value });
  }
  updateLocation(e) {
    this.setState({ location: e.target.value })
    this.state.profile.set({ location: e.target.value });
  }
  updateSchool(e) {
   this.setState({ school: e.target.value })
  }
  updateDegree(e) {
   this.setState({ degree: e.target.value })
  }
  updateMajor(e) {
   this.setState({ major: e.target.value })
  }

  addDegree(e) {
   e.preventDefault();
   this.state.degrees.add({
     school: this.state.school,
     degree: this.state.degree,
     major: this.state.major
   });
   this.setState({ degrees: this.state.degrees, school: null, degree: null, major: null })
 }

 updateProfile(e) {
   e.preventDefault();

   var profile = this.state.profile;

   var image = new ParseFile(this.state.pic);

   profile.set({ degrees: this.state.degrees })
   profile.setPointer('owner', '_User', User.current().get('objectId'));

   if(!profile.get('avatar_url')){
     image.save({}, {
       data: this.state.pic
     }).then((response)=>{
       profile.set({ 'avatar_url': response.url });
     profile.save();
     Backbone.history.navigate('#profile/' + profile.get('objectId') + '/', {trigger: true})
     });
   } else {
     profile.save();
     Backbone.history.navigate('#profile/' + profile.get('objectId') + '/', {trigger: true})
   }
 }

updateImage(e) {
  e.preventDefault();
  var file = e.target.files[0];
  this.setState({ pic: file });
  var reader = new FileReader();
  reader.onloadend = ()=>{
    this.setState({ preview: reader.result });
  }
  reader.readAsDataURL(file);
}

render() {
  var user = User.current();
  var degrees = this.state.degrees.map(function(degree){
    return (
      <li key={degree.cid}>
        { degree.get('school') + '' }
        { degree.get('degree') + '' }
        { degree.get('major') }
      </li>
    )
  })
  return (
    <BaseLayout>
        <form onSubmit={ this.updateProfile } className="profile-form">
          <div className="row">
            <h1>{ user.isNew() ? 'Create' : 'Edit' } Profile</h1>
            <div className="col-xs-4 col-md-3">
                <p>click below to add image</p>
                  <Dropzone
                    onChange={ this.updateImage }
                    onDrop={ this.onDrop }
                  >
                    <img src={ this.state.preview } />
                  </Dropzone>
              </div>
            <div className="col-md-6">
              <div className="form-group">
                <input onChange={ this.updateFirstName } value={ this.state.first_name } className="form-control" type="text" placeholder="First Name"/>
                <input onChange={ this.updateLastName } value={ this.state.last_name } className="form-control" type="text" placeholder="Last Name"/>
              </div>
              <div className="form-group">
                <input onChange={ this.updateLocation } value={ this.state.location } className="form-control" type="text" placeholder="Location (state)"/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className="col-xs-10 col-md-8">
              <input onChange={ this.updateSchool } value={ this.state.school } type="text" placeholder="School"/>
              <input onChange={ this.updateDegree } value={ this.state.degree } type="text" placeholder="Associate or Bachelor"/>
              <input onChange={ this.updateMajor } value={ this.state.major } type="text" placeholder="Major"/>
              <span>
                <button onClick={ this.addDegree } type="button" name="button">
                  <span className="glyphicon glyphicon-plus"></span>
                </button>
              </span>
              <ul>
                { degrees }
              </ul>
            </div>
          </div>
          <input className="btn btn-success" type="submit" value='Save' />
        </form>
    </BaseLayout>
    )
  }
}


module.exports = {
  ProfileCreateEditContainer
}
