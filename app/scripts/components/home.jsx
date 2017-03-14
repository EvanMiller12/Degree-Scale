var React = require('react');

var HomeLayout = require('./layouts/home_layout.jsx').HomeLayout;

class HomeContainer extends React.Component {
  render(){
    return(
      <HomeLayout>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="https://unsplash.it/400/?random" alt="..." />
                <div className="caption">
                  <h3>Write Review</h3>
                  <p>Write a review to help potential students or current students better understand the value of the degree they are or will be earning.</p>
                  <p><a href="#" className="btn btn-primary" role="button">Write Review</a></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="https://unsplash.it/400/?random" alt="..." />
                <div className="caption">
                  <h3>Read Reviews</h3>
                  <p>Discover the value of different degrees from real people who have earned earned the degree.</p>
                  <p><a href="#" className="btn btn-primary" role="button">Read Reviews</a></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="https://unsplash.it/400/?random" alt="..." />
                <div className="caption">
                  <h3>View Degree Information</h3>
                  <p>View the statistics for different college degrees including salary by major.</p>
                  <p><a href="#" className="btn btn-primary" role="button">View Statistics</a></p>
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
