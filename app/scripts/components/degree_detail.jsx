var React = require('react');

var User = ('../../models/user').User;
var DegreeCollection = require('../models/degree.js').DegreeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;


class DegreeDetailContainer extends React.Component{
  constructor(props){
    super(props);

    var degree = new DegreeCollection()

    this.state = {
      degree
    }
  }
  render(){
    var degree = this.state.degree;
    console.log(degree)
    return(
      <BaseLayout>
        <div className="row">
          <div className="col-sm-12 degree-detail-contain">
            <div className="degree-detail-title">
              <h1>Average Salary</h1>
              <p>of top 20 schools</p>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="program-level certificate-level">
                  <h4>Certificate</h4>
                </div>
                <div className="avg-salary certificate-salary">
                  <h5>Avg Salary</h5>
                </div>
              </div>
              <div className="col-sm-4">
              <div className="program-level associate-level">
                <h4>Associate's</h4>
              </div>
              <div className="avg-salary associate-salary">
                <h5>Avg Salary</h5>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="program-level bachelor-level">
                <h4>Bachelor's</h4>
              </div>
              <div className="avg-salary bachelor-salary">
                <h5>Avg Salary</h5>
              </div>
            </div>
            </div>
            <div className="job-satisfaction-contain">
              <div className="job-satisfaction">
                <label>Job Satisfaction: </label>
                <span>rating</span>
              </div>
              <div className="rate">
                <label>Rate: </label>
                <span>Clickable star rating system</span>
              </div>
              <div className="degree-select-nav">
                <a href="#degree/">Select a different Degree</a>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

module.exports = {
  DegreeDetailContainer
}
