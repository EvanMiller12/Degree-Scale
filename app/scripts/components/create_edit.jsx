var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class CreateEditContainer extends React.Component {
  render() {
    return (
      <BaseLayout>
        <div className="container">
          <div class="row">
            <CreateEditForm/>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

class CreateEditForm extends React.Component {
    render() {
        return (
            <form action="/file-upload" class="dropzone">
                <div class="row">
                  <h1>Create Profile</h1>
                    <div class="col-xs-4 col-md-2">
                      <div class="thumbnail">
                        <a name="file" type="file" class="add-image-thumbnail">
                          <span class="glyphicon glyphicon-plus"></span>
                          <h5>Add Image</h5>
                        </a>
                      </div>
                    </div>
                    <div class="col-xs-4 col-md-6">
                      <div class="form-group">
                        <input class="form-control" type="text" placeholder="Your Name"/>
                      </div>
                      <div class="form-group">
                        <input class="form-control" type="text" placeholder="Location (state)"/>
                      </div>
                    </div>
                </div>
                <div class='row'>
                  <div class="col-md-8">
                    <input type="text" placeholder="College"/>
                    <input type="text" placeholder="Associate or Bachelor"/>
                    <input type="text" placeholder="Major"/>
                    <span>
                        <button type="button" name="button">
                          <span class="glyphicon glyphicon-plus"></span>
                        </button>
                    </span>
                  </div>
                </div>
                  <input class="btn btn-success" type="submit" value="Create Profile"/>
            </form>
        )
    }
}

module.exports = {
    CreateEditContainer
}
