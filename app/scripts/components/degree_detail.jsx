var React = require('react');

var User = ('../../models/user').User;
var DegreeCollection = require('../models/degree.js').DegreeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;


class DegreeDetail extends React.Component{
  
  render() {

    console.log('detail cer average', this.props.cerAverage);
    console.log('detail asc average', this.props.ascAverage);
    console.log('detail bac average', this.props.bacAverage);

    return(
      <div className="row">
        <div className="col-sm-12 degree-detail-contain">
          <div className="degree-detail-title">
            <h1>Average Salary</h1>
            <p>of top 20 schools for major</p>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="program-level certificate-level">
                <h4>Certificate</h4>
              </div>
              <div className="avg-salary certificate-salary">
                <h5>{this.props.cerAverage}</h5>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="program-level associate-level">
              <h4>Associate's</h4>
            </div>
            <div className="avg-salary associate-salary">
              <h5>{this.props.ascAverage}</h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="program-level bachelor-level">
              <h4>Bachelor's</h4>
            </div>
            <div className="avg-salary bachelor-salary">
              <h5>{this.props.bacAverage}</h5>
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
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  DegreeDetail
}
