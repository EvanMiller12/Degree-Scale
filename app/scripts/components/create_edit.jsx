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

    // var userId = User.current().get('objectId');
    var profile = new Profile();
    // var profileCollection = new ProfileCollection();


    // profileCollection.parseWhere(
    //   'owner', '_User', userId
    // ).fetch().then(() => {
    //   this.setState({ profile: profileCollection.models[0] });
    // });

    // if(this.props.id){
    //   profile.set('objectId', 'gB7TTZrWBd');
    //   profile.fetch().then(() => {
    //   this.setState({profile});
    //   });
    // }

    this.state = {
      degrees: new UserDegreeCollection(),
      avatar_url: null,
      profile: null
    }

    this.updateProfile = this.updateProfile.bind(this);
    this.addDegree = this.addDegree.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  updateProfile(config) {
    var profile = new Profile(config);

    profile.set({'avatar_url': this.state.avatar_url});
    profile.get('degrees').add(this.state.degrees.models);
    profile.setPointer('owner', '_User', User.current().get('objectId'));
    profile.save();
  }

  addDegree(degree) {
    this.state.degrees.add(degree);
  }

  updateImage(pic) {
    var image = new ParseFile(pic);
    image.save({}, {
      data: pic
    }).then((response)=>{
      this.setState({ avatar_url: response.url });
    });

  }

  render() {
    return (
      <BaseLayout>
        <div className="row">
          <Form profile={ this.state.profile } addDegree={ this.addDegree } updateProfile={ this.updateProfile } updateImage={ this.updateImage } />

        </div>
      </BaseLayout>
    )
  }
}

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      first_name: null,
      last_name: null,
      location: null,
      school: null,
      degree: null,
      major: null,
      preview: null,
      pic: null
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
    this.setState({first_name: e.target.value});
  }
  updateLastName(e) {
    this.setState({last_name: e.target.value});
  }
  updateLocation(e) {
    this.setState({location: e.target.value});
  }
  updateSchool(e) {
   this.setState({school: e.target.value});
 }
  updateDegree(e) {
   this.setState({degree: e.target.value});;
 }
  updateMajor(e) {
   this.setState({major: e.target.value});
 }

  addDegree(e) {
   e.preventDefault();
   this.props.addDegree({
     school: this.state.school,
     degree: this.state.degree,
     major: this.state.major
   });
 }

 updateProfile(e) {
   e.preventDefault();
   this.props.updateProfile({
     first_name: this.state.first_name,
     last_name: this.state.last_name,
     location: this.state.location,
   });
 }

 updateImage(e) {
   e.preventDefault();
   var file = e.target.files[0];
   this.setState({ pic: file });
   var reader = new FileReader();
   reader.onloadend = ()=>{
   this.setState({ preview: reader.result });
   this.props.updateImage(this.state.pic)
  }
  reader.readAsDataURL(file);
}


  render() {
    var user = User.current();
    return (
      <form onSubmit={this.updateProfile} className="profile-form">
        <div className="row">
          <h1>{ user.isNew() ? 'Create' : 'Edit'} Profile</h1>
            <div className="col-xs-4 col-md-2">

              <div>
                <p>click below to add image</p>
                  <Dropzone onChange={ this.updateImage } onDrop={this.onDrop}>
                    <img src={ this.state.preview } />
                  </Dropzone>
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
            <input onChange={this.updateSchool} value={this.state.school} type="text" placeholder="School"/>
            <input onChange={this.updateDegree} value={this.state.degree} type="text" placeholder="Associate or Bachelor"/>
            <input onChange={this.updateMajor} value={this.state.major} type="text" placeholder="Major"/>
            <span>
              <button onClick={this.addDegree} type="button" name="button">
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
