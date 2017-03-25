var React = require('react');

var User = require('../models/user.js').User;

var HomeLayout = require('./layouts/home_layout.jsx').HomeLayout;

class HomeContainer extends React.Component {
  render(){
    var writeReviewNav = User.current() ? "#review/create/" : "#auth/";
    var degreeSelectNav = User.current() ? "#degree/" : "#auth/";
    var reviewSearchNav = User.current() ? "#review/" : "#auth/";

    return(
      <HomeLayout>
        <div className="light-gray-bkgrnd row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="row leave-rev-contain">
              <div className="col-sm-6 col-md-6">
                <div className="home-img">
                  <img src="https://unsplash.it/400/?random" alt="..." />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="description">
                  <h3>Write Review</h3>
                  <p>Write a review to help potential students or current students better understand the value of the degree they are or will be earning.</p>
                  <div className="leave-rev-btn">
                    <a href={writeReviewNav} className="btn btn-primary" role="button">Write Review</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row find-deg-contain">
              <div className="col-sm-6 col-md-6">
                <div className="description">
                  <h3>View Degrees</h3>
                  <p>Review the average salary information by degree for the top 20 schools with the highest salaries.</p>
                  <div className="find-degree-btn">
                    <a href={degreeSelectNav} className="btn btn-primary" role="button">Find Degrees</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="home-img">
                  <img src="https://unsplash.it/400/?random" alt="..." />
                </div>
              </div>
            </div>
            <div className="row find-rev-contain">
              <div className="col-sm-6 col-md-6">
                <div className="home-img">
                  <img src="https://unsplash.it/400/?random" alt="..." />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="description">
                  <h3>Find Reviews</h3>
                  <p>
                    Find information includin salary, jobsatisfaction,
                    and much more from reviews written by people who have earned
                    a degree in the particular field of study.
                  </p>
                  <div className="find-rev-btn">
                    <a href={reviewSearchNav} className="btn btn-primary" role="button">Find Reviews</a>
                  </div>
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
