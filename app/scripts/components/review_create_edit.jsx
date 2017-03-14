var React = require('react');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ReviewCreateEditContainer extends React.Component {
  render() {
    return (
      <BaseLayout>
        <div className="container">
          <ReviewCreateEditForm/>
        </div>
      </BaseLayout>
    )
  }
}

class ReviewCreateEditForm extends React.Component {
  render() {
    return (
      <div class="review-form-contain">
        <div class="review-form-title">
          <h1>Leave A Review of Your Degree Below</h1>
        </div>
        <form>
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h4>Select Degree</h4>
              <select class="degree-select option1" name="degree-select">
                <option id="degree" value="degree">College, A.S. or B.S, Major</option>
              </select>
              <div className="checkbox">
                <h4>Were you able to get a job with this degree?</h4>
                <label>
                  <input type="checkbox"/>
                  Yes
                </label>
                <label>
                  <input type="checkbox"/>
                  No
                </label>
              </div>
              <div class="form-group">
                <label for="salary">
                  Salary
                  <input class="form-control" type="text" placeholder="$0.00"/>
                </label>
              </div>
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
              <div class="form-group">
                <textarea name="name" rows="8" cols="80" placeholder="Comments"></textarea>
              </div>
                <input class="btn btn-success" type="submit" value="Submit Review"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


module.exports = {
    ReviewCreateEditContainer
}
