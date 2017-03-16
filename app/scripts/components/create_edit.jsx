var React = require('react');

var User = require('../models/user.js').User;
var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ProfileCreateEditContainer extends React.Component {
  constructor(props){
    super(props);

    var user = User.current()

    this.state = {
      user
    }
  }
  render() {
    return (
      <BaseLayout>
        <div className="container">
          <div className="row">
            <ProfileCreateEditForm user={this.state.user}/>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

class ProfileCreateEditForm extends React.Component {
    render() {
        return (
            <form action="/file-upload" className="dropzone">
                <div className="row">
                  <h1>Create Profile</h1>
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
                        <input className="form-control" type="text" placeholder="Your Name"/>
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Location (state)"/>
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
                  <input className="btn btn-success" type="submit" value="Create Profile"/>
            </form>
        )
    }
}

module.exports = {
    ProfileCreateEditContainer
}
