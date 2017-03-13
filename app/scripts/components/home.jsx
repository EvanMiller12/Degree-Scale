var React = require('react');

class HomeContainer extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <nav className="home-nav-contain navbar">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="home-nav-contain">
              <ul className="home-nav navbar-nav">
                <li>
                  <a href="#">How it Works</a>
                </li>
                <li>
                  <a href="#" className="btn btn-primary" role="button">Signup</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="jumbotron">
            <div className="mission-statement">
              <h1>Mission Statement</h1>
            </div>
          </div>
        </div>
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
        <footer>
          <div className="footer-copyright">
            <span>App Name,</span>
            <span>an app built by <a href="#">Evan Miller</a></span>
          </div>
          <div className="footer-nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Signup</a></li>
              <li><a href="#">Write Review</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

module.exports = {
  HomeContainer
}
