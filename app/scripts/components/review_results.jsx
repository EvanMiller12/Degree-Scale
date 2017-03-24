var React = require('react');

var Review = require('../models/review').Review;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ReviewResultsContainer extends React.Component {
  render(){
    return(
      <BaseLayout>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1>Search for A Major To See Reviews</h1>
            <div className="review-search">
               <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="results">
              <div className="review-major">
                <span>Field of Study:</span>
                <span>Selected Major</span>
              </div>
              <div className="review-rating">
                <span>Recomended:</span>
                <span>Recomended Value</span>
              </div>
              <div className="review-employ">
                <span>The user was (not) able to get a job in this field</span>
              </div>
              <div className="review-experience">
                <span>Years in the field:</span>
                <span>years value</span>
              </div>
              <div className="review-salary">
                <span>Salary:</span>
                <span>$</span>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

module.exports = {
  ReviewResultsContainer
}
