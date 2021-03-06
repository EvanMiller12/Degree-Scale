var React = require('react');

var User = require('../models/user').User;
var ReviewCollection = require('../models/review').ReviewCollection;


class UserReviewContainer extends React.Component {
  constructor(props){
    super(props);

    var userId = User.current().get('objectId');
    var userReviews = new ReviewCollection();

    userReviews.parseWhere('owner', '_User', userId).fetch().then(() => {
      this.setState({ userReviews })
    })

    this.state = {
      userReviews
    }
  }
  render(){
    return(
      <div className="col-sm-4 col-sm-offset-1">
        <div className="my-reviews-title">
          <h2>My Reviews</h2>
        </div>
        <div className="user-rev-list">
          <UserReviewList userReviews={this.state.userReviews}/>
        </div>
      </div>
    )
  }
}

class UserReviewList extends React.Component {

  render(){

    var userReviews = this.props.userReviews.map((review, index) => {

      return(
        <div key={review.cid} className="review-contain">
          <div className="review-owner">
            <span>Your Review</span>
            <p>{review.get('timestamp')}</p>
          </div>
          <div className="review-major">
            <label>Field of Study:</label>
            <span>{review.get('major')}</span>
            <div className="review-degree">
              <label>Degree level:</label>
              <span>{review.get('degree')}</span>
            </div>
          </div>
          <div className="review-employ">
            <label>Got a job as a/an:</label>
            <span>{review.get('employment')}</span>
          </div>
          <div className="review-rating">
            <label>Recomended:</label>
            <span>{review.get('recommend')}</span>
          </div>
          <div className="review-experience">
            <label>Years in the field:</label>
            <span>{review.get('experience')}</span>
          </div>
          <div className="review-salary">
            <label>Salary:</label>
            <span>${review.get('salary')}</span>
          </div>
          <a href={ '#review/edit/' + review.get('objectId') + '/'} className="btn btn-primary pull-right">
            Edit
          </a>
        </div>
      )
    })

    return (
      <div className="results">
        {userReviews}
      </div>
    );
  }
}

module.exports = {
  UserReviewContainer
}
