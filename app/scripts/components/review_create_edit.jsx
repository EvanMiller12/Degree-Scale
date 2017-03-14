var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ReviewCreateEditContainer extends React.Component {
  render() {
    return (
      <BaseLayout>
        <div className="container">
          <ReviewDirections />
          <ReviewCreateEditForm/>
        </div>
      </BaseLayout>
    )
  }
}

class ReviewCreateEditForm extends React.Component {
    render() {
        return (
            <form>
                <div class="row">
                  <h1>Leave A Review of Your Degree Below</h1>
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

class ReviewDirections extends React.Component{
  render(){
    return(
      <ul>
        <p>
          In the comments below Please give helpful information about your degree including, but not limited to:
        </p>
        <li>
          How hard was it to get a job in the field of your major?
        </li>
        <li>
          Were the jobs you got with your degree what you thought they would be?
        </li>
        <li>
          Was the initial/overall pay what you thought it would be?
        </li>
        <li>
          Any helpful information for people thinking about persuing your degree.
        </li>
      </ul>
    )
  }
}

module.exports = {
    ReviewCreateEditContainer
}
