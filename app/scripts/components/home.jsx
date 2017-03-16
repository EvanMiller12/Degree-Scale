var React = require('react');

var User = require('../models/user.js').User;

var HomeLayout = require('./layouts/home_layout.jsx').HomeLayout;

class HomeContainer extends React.Component {
  render(){
    var writeReviewNav = User.current() ? "#review/create/" : "#auth/";
    var degreeSelectNav = User.current() ? "#degree/" : "#auth/";
    var howItWorksNav = User.current() ? "#howitworks/" : "#auth/";

    return(
      <HomeLayout handleMenuToggle={ this.handleMenuToggle }>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="https://unsplash.it/400/?random" alt="..." />
                <div className="caption">
                  <h3>Write Review</h3>
                  <p>Write a review to help potential students or current students better understand the value of the degree they are or will be earning.</p>
                  <p><a href={writeReviewNav} className="btn btn-primary" role="button">Write Review</a></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="https://unsplash.it/400/?random" alt="..." />
                <div className="caption">
                  <h3>View Degrees</h3>
                  <p>Review the average salary information by degree for the top 20 schools with the highest salaries.</p>
                  <p><a href={degreeSelectNav} className="btn btn-primary" role="button">View Degree</a></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="https://unsplash.it/400/?random" alt="..." />
                <div className="caption">
                  <h3>How It Works</h3>
                  <p>Some catchy intro here</p>
                  <p><a href={howItWorksNav} className="btn btn-primary" role="button">View Statistics</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>

    );
  }
}

module.exports = {
  HomeContainer
}
