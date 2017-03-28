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

    var difference = parseInt(this.props.bacAverage) - parseInt(this.props.ascAverage);
    var difAfterTen = difference * 10;
    var associateAvg = parseInt(this.props.ascAverage).toFixed(2);
    var bachelorsAvg = parseInt(this.props.bacAverage).toFixed(2);

    return(
      <div className="row">
        <div className="col-sm-12 degree-detail-contain">
          <div className="degree-detail-title">
            <h1>Average Salary</h1>
            <p>of 20 schools for the selected major 10 years after entry</p>
          </div>
          <div className="row">
            <div className="col-sm-3 col-sm-offset-1">
              <div className="program-level associate-level">
                <h4>Associate's Salary</h4>
              </div>
              <div className="avg-salary associate-salary">
                <h5>${ associateAvg }</h5>
              </div>
            </div>
            <div className="col-sm-3 col-sm-offset-1">
              <div className="dif-in-salaries">
                <label>Difference in Salaries = </label>
                <span>{ '-' + '$' + difference }</span>
                <label>Difference after 10 years = </label>
                <span>{ '-' + '$' + difAfterTen }</span>
              </div>
            </div>
            <div className="col-sm-3 col-sm-offset-1">
              <div className="program-level bachelor-level">
                <h4>Bachelor's Salary</h4>
              </div>
              <div className="avg-salary bachelor-salary">
                <h5>${ bachelorsAvg }</h5>
              </div>
            </div>
          </div>

          <BarChart
            ascAverage={ this.props.ascAverage }
            bacAverage={ this.props.bacAverage }
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
        labels: ["Associate Salary", "Bachelors Salary"],
        datasets: [{
            label: "salary in U.S dollars",
            data: [this.props.ascAverage, this.props.bacAverage],
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
