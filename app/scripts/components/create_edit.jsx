var React = require('react');
var Backbone = require('backbone');
var Dropzone = require('react-dropzone');

var User = require('../models/user.js').User;
var UserDegree = require('../models/user_degree').UserDegree;
var UserDegreeCollection = require('../models/user_degree').UserDegreeCollection;
var Profile = require('../models/profile').Profile;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileCreateEditContainer extends React.Component {
  constructor(props){
    super(props);

    var profile = new Profile();

    if(this.props.id){
      profile.set('objectId', this.props.id);
      profile.fetch().then(() => {
        this.setState({proflile});
      });
    }

    this.saveProfile = this.saveProfile.bind(this);

    this.state = {
      profile,
    }
  }

  saveProfile(formData){
    var profile = this.state.profile;
    var user = User.current();

    profile.set({
     'first_name': formData.first_name,
     'last_name': formData.last_name,
     'location': formData.location,
     'avatar_url': formData.avatar_url,

    });
    profile.setPointer('owner', '_User', profile.get('objectId'));

    profile.save().then(function(){
      Backbone.history.navigate('#profile/' + profile.get('objectId') + '/', {trigger: true});
    });
  }
  render() {
    return (
      <BaseLayout>
        <div className="container">
          <div className="row">
            <ProfileCreateEditForm
              saveProfile={this.saveProfile}
              profile={this.state.profile}
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
    var user = User.current();

    this.updateImage = this.updateImage.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateLocation = this.updateLocation.bind(this);

    this.updateSchool = this.updateSchool.bind(this);
    this.updateDegreeType = this.updateDegreeType.bind(this);
    this.updateMajor = this.updateMajor.bind(this);

    this.handleCreateDegree = this.handleCreateDegree.bind(this);
    this.deleteDegree = this.deleteDegree.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = this.props.profile.toJSON();

  }
  componentWillReceiveProps(newProps){
   this.setState(newProps.profile.toJSON());
 }
 updateImage(e){
    // step 1: get the file object from the form
    var imageData = e.target.files[0];

    // step 2: new parse model with the name set
    var image = new ParseFile();
    image.set({name: imageData.name});

    // step 3: ajax request to save image to the server
    image.save({}, {
      data: imageData,
      contentType: imageData.type
    }).then(() => {
      // step 4: save the image url to the recipe state
      this.setState({avatar_url: image});
    });
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
  updateSchool(e){
   this.state.tempDegree.set('school', e.target.value);
 }
 updateDegreeType(e){
   this.state.tempDegree.set('degree_type', e.target.value);
 }
 updateMajor(e){
   this.state.tempDegree.set('major', e.target.value);
 }
 handleCreateDegree(e){
   e.preventDefault();

   var degrees = this.state.degrees;
   degrees.add(this.state.tempDegree.clone());
   this.setState({degrees: degrees});
 }
 deleteDegree(degree){
   var updateDegreeList = this.state.degrees;
   updateDegreeList.remove(degree);
   this.setState({degrees: updateDegreeList});
 }
  handleSubmit(e){
    e.preventDefault();
    this.props.saveProfile(this.state);
  }
  render() {
    var user = User.current()
    return (
      <form onSubmit={this.handleSubmit} className="profile-form">
          <div className="row">
            <h1>{user.isNew() ? 'Create' : 'Edit'} Profile</h1>
              <div className="col-xs-4 col-md-2">
                <label htmlFor="image">Amazing Food Photography</label>
                <input onChange={this.handleImageChange} filename={this.state.image} className="form-control" name="image" type="file" placeholder="Nice photo" />
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
              <input onChange={this.updateSchool} type="text" placeholder="School"/>
              <input onChange={this.updateDegreeType} type="text" placeholder="Associate or Bachelor"/>
              <input onChange={this.updateMajor} type="text" placeholder="Major"/>
              <span>
                  <button onClick={this.handleCreateDegree} type="button" name="button">
                    <span className="glyphicon glyphicon-plus"></span>
                  </button>
              </span>
            </div>
          </div>
          <DegreeList degrees={this.state.degrees}
                      deleteDegree={this.deleteDegree}
                      />
            <input className="btn btn-success" type="submit" value='Save' />
      </form>
    )
  }
}

class DegreeList extends React.Component{
  constructor(props){
    super(props);
    var degrees = new UserDegreeCollection();
    this.state = {
      degrees
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({degrees: this.props.degrees});
  }
  render(){
    var self = this;
    var newDegree = this.state.degrees.map(degree =>{
      return (
        <li key={degree.cid} className="list-group-item"> {degree.get('school')} {degree.get('degree_type')} {degree.get('major')}
          <button onClick={function(e){
            e.preventDefault();
            self.props.deleteDegree(degree);}}
            type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span>
          </button>
        </li>
      )
    });

    return (
      <div className="row">
        <ul className="list-group">

          {newDegree}

        </ul>
      </div>

    )
  }
}


class PicDropzone extends React.Component{
  constructor(props){
   super(props);

   this.state = {
     preview: null,
   };

   this.handleImage = this.handleImage.bind(this);
 }
 onDrop(files){
   console.log('file', files)
   this.setState({files});
 }

  handleImage(e){
   var file = e.target.files[0];
   this.setState({pic: file});
   var reader = new FileReader();
   reader.onloadend = ()=>{
    this.setState({preview: reader.result});
    this.props.updateImage(this.state.pic);
  };

  reader.readAsDataURL(file);

 }

  render() {
    return (
      <div>
        <p>click below to add image</p>
        <Dropzone onChange={this.handleImage} onDrop={this.onDrop}>
          <img src={this.state.preview} />
        </Dropzone>
      </div>
    );
  }
};

module.exports = {
    ProfileCreateEditContainer
}
