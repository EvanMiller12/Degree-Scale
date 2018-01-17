var React = require('react');
var _ = require('underscore');

var User = require('../models/user').User;
var Review = require('../models/review').Review;
var ReviewCollection = require('../models/review').ReviewCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var UserReviewContainer = require('./user_review.jsx').UserReviewContainer;


class ReviewResultsContainer extends React.Component {
  constructor(props){
    super(props);

    var reviewCollection = new ReviewCollection();

    this.state = {
      results: [],
      reviewCollection,
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e){
    this.setState({ searchTerm: e.target.value })

  }
  handleSearch(e){
    e.preventDefault();
    var reviewCollection = this.state.reviewCollection;
    var searchTerm = this.state.searchTerm;
    reviewCollection.whereClause = {};
    reviewCollection.fetch().then(()=>{
      var results = [];
      var results = reviewCollection.where({ major: searchTerm });
      this.setState({ reviewCollection: results })
    });
}

  render(){

    return(
      <BaseLayout>
        <div className="row results-contain">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="col-sm-5 search-title">
              <h2>Search for A Major To See Reviews</h2>
              <div className="review-search">
                <form onSubmit={ this.handleSearch }>
                  <div className="input-group">
                    <input onChange={ this.updateSearch } type="text" className="form-control" placeholder="Search" />
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-default">
                        <span className="glyphicon glyphicon-search" aria-hidden="true">
                        </span>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              <ResultsList reviewCollection={ this.state.reviewCollection }/>
            </div>
            { this.props.userReviews ? <UserReviewContainer /> : null}
          </div>
        </div>
      </BaseLayout>
    )
  }
}

class ResultsList extends React.Component {
  constructor(props){
    super(props);

  }
  render(){

    var reviews = this.props.reviewCollection.map((review) => {

      return(
        <div key={ review.cid } className="review-contain">
          <div className="review-owner">
            <span>Example</span>
            <p>{ review.get('timestamp') }</p>
          </div>
          <div className="review-major">
            <label>Field of Study:</label>
            <span>{ review.get('major') }</span>
            <div className="review-degree">
              <label>Degree level:</label>
              <span>{ review.get('degree') }</span>
            </div>
          </div>
          <div className="review-employ">
            <label>Got a job as a/an:</label>
            <span>{ review.get('employment') }</span>
          </div>
          <div className="review-rating">
            <label>Recomended:</label>
            <span>{ review.get('recommend') }</span>
          </div>
          <div className="review-experience">
            <label>Years in the field:</label>
            <span>{ review.get('experience') }</span>
          </div>
          <div className="review-salary">
            <label>Salary:</label>
            <span>${ review.get('salary') }</span>
          </div>
        </div>
      )
    })
    return (
      <div className="results">
        {reviews}
      </div>
    );
  }
}


module.exports = {
  ReviewResultsContainer
}
