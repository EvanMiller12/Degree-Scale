var React = require('react');
var _ = require('underscore');

var Review = require('../models/review').Review;
var ReviewCollection = require('../models/review').ReviewCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var UserReviewContainer = require('./user_review.jsx').UserReviewContainer;


class ReviewResultsContainer extends React.Component {
  constructor(props){
    super(props);

    var reviewCollection = new ReviewCollection();
    var search = '';

    this.state = {
      search: '',
      results: [],
      reviewCollection
    }

    this.updateSearch = this.updateSearch.bind(this);
    this.handleSearch = _.debounce(this.handleSearch, 300).bind(this);;
  }
  handleSearch(data) {
    var collection = this.state.reviewCollection;
   collection.searchTerm = data;

     collection.fetch().done((response) => {
     this.setState({reviewCollection: collection});
   });
  }
  updateSearch(e){
    this.handleSearch(e.target.value);;
  }
  render(){
    return(
      <BaseLayout>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="col-sm-6">
              <h1>Search for A Major To See Reviews</h1>
              <div className="review-search">
                 <input onChange={this.updateSearch} type="text" className="form-control" placeholder="Search" />
              </div>
              <ResultsList reviewCollection={this.state.reviewCollection}/>
            </div>
            <UserReviewContainer />
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
        <div key={review.cid} className="review-contain">
          <div classsName="review-owner">
            <span>Review owner</span>
          </div>
          <div className="review-major">
            <label>Field of Study:</label>
            <span>{review.get('major')}</span>
            <div className="review-major">
              <label>Degree level:</label>
              <span>{review.get('degree')}</span>
            </div>
          </div>
          <div className="review-rating">
            <label>Recomended:</label>
            <span>{review.get('recommend')}</span>
          </div>
          <div className="review-employ">
            <label>Got a job in the field of study:</label>
            <span>{review.get('employment')}</span>
          </div>
          <div className="review-experience">
            <label>Years in the field:</label>
            <span>{review.get('experience')}</span>
          </div>
          <div className="review-salary">
            <label>Salary:</label>
            <span>${review.get('salary')}</span>
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
