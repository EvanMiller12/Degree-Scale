var React = require('react');
var Chart = require('chart.js');
var Bar = require('react-chartjs-2').Bar;

var User = ('../../models/user').User;
var DegreeCollection = require('../models/degree.js').DegreeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class DegreeDetail extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
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
                <h5>{ this.props.cerAverage }</h5>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="program-level associate-level">
              <h4>Associate's</h4>
            </div>
            <div className="avg-salary associate-salary">
              <h5>{ this.props.ascAverage }</h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="program-level bachelor-level">
              <h4>Bachelor's</h4>
            </div>
            <div className="avg-salary bachelor-salary">
              <h5>{ this.props.bacAverage }</h5>
            </div>
          </div>
          </div>
          <BarChart
            cerAverage={this.props.cerAverage}
            ascAverage={this.props.ascAverage}
            bacAverage={this.props.bacAverage}
          />
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

class BarChart extends React.Component {
  render() {
    var salaryData = {
        labels: ["Certificate Salary", "Associate Salary", "Bachelors Salary"],
        datasets: [{
            label: "salary in U.S dollars",
            data: [this.props.cerAverage, this.props.ascAverage, this.props.bacAverage],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    return(
      <Bar data={salaryData} />
    )
  }
}

module.exports = {
  DegreeDetail
}
