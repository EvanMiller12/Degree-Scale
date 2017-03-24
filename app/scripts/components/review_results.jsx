var React = require('react');

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
