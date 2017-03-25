var React = require('react');
var _ = require('underscore');

var Review = require('../models/review').Review;
var ReviewCollection = require('../models/review').ReviewCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

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
          <div className="col-sm-8 col-sm-offset-2">
            <h1>Search for A Major To See Reviews</h1>
            <div className="review-search">
               <input onChange={this.updateSearch} type="text" className="form-control" placeholder="Search" />
            </div>
            <ResultsList reviewCollection={this.state.reviewCollection}/>
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
        <li>
          <div className="review-major">
            <label>Field of Study:</label>
            <span>{review.get('major')}</span>
          </div>
          <div className="review-degree">
            <label>Degree level:</label>
            <span>{review.get('degree')}</span>
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
        </li>
      )
    })

    return (
      <ul className="results">
        {reviews}
      </ul>
    );
  }
}

module.exports = {
  ReviewResultsContainer
}
