var React = require('react');
var Chart = require('chart.js');
var Bar = require('react-chartjs-2').Bar;

var User = ('../../models/user').User;
var DegreeCollection = require('../models/degree.js').DegreeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class DegreeDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showResults: true
    }
  }

    componentDidMount() {
      setTimeout(() => this.setState({ showResults: false }), 1000);
    }
   
  render(){
    const { showResults } = this.state;

    if( showResults ) {
      return null;
    }

    var difference = parseInt(this.props.bacAverage) - parseInt(this.props.ascAverage);
    var difAfterTen = difference * 10;
    var associateAvg = parseInt(this.props.ascAverage).toFixed(0);
    var bachelorsAvg = parseInt(this.props.bacAverage).toFixed(0);

    return(
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 degree-detail-contain">
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
                <span>{ '$' + difference }</span>
                <label>Difference after 10 years = </label>
                <span>{ '$' + difAfterTen }</span>
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

        </div>
        <div className="col-sm-5 col-sm-offset-1">
          <div className="school-contain">
            <div className="list-title">
              <h1>Associate School Data</h1>
              <p>These are schools that the salary data is coming from</p>
            </div>
            <AscSchoolList 
              ascData={ this.props.ascData } 
              />
          </div>
        </div>
        <div className="col-sm-5 col-sm-offset-1">
          <div className="school-contain">
            <div className="list-title">
              <h1>Bachelor School Data</h1>
              <p>These are schools that the salary data is coming from</p>
            </div>
            <BacSchoolList bacData={ this.props.bacData } />
          </div>
        </div>
      </div>
    )
  }
}

class AscSchoolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: true
    }
  }

    componentDidMount() {
      setTimeout(() => this.setState({ showResults: false }), 1500);
    }
   
  render(){
    const { showResults } = this.state;

    if( showResults ) {
      return null;
    }

    var schoolList;

    if(this.props.ascData) {
      schoolList = this.props.ascData.map((data, index) => {
      
      var gradRate = (data['2014.completion.rate_suppressed.overall'] * 100).toFixed(0) == 0 ?
                            "No data recorded" :
                            (data['2014.completion.rate_suppressed.overall'] * 100).toFixed(0) + "%";
      var averageSalary = data['2012.earnings.10_yrs_after_entry.median'] == null ?
                            "No data recorded" :
                            "$" + data['2012.earnings.10_yrs_after_entry.median'];  

        return(
          <li key={index} className="list-item">
            <div className="school">
              <h5>{data['school.name']}</h5>
            </div>
            <div className="school-data">
              <div className="school-salary">
                <label>Average Salary:</label>
                <span>{averageSalary}</span>
              </div>
              <div className="school-cost">
                <label>Average Cost:</label>
                <span>{'$' + data['2014.cost.avg_net_price.overall']}</span>
              </div>
              <div className="grad-rate">
                <label>Graduation Rate:</label>
                <span>{gradRate}</span>
              </div>
              <div className="school-size">
                <label>School Size:</label>
                <span>{data['2014.student.size']}</span>
              </div>
            </div>
          </li>
        )
      })
    }


    return(
      <div className="school-list-contain">
        <ul className="school-list">
          {schoolList}
        </ul>
      </div>
    )
  }
}

class BacSchoolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: true
    }
  }

    componentDidMount() {
      setTimeout(() => this.setState({ showResults: false }), 1000);
    }
   
  render(){
    const { showResults } = this.state;

    if( showResults ) {
      return null;
    }

    var bacSchoolList;

    if(this.props.bacData) {
      bacSchoolList = this.props.bacData.map((data, index) => {

      var gradRate = (data['2014.completion.rate_suppressed.overall'] * 100).toFixed(0) == 0 ?
                      "No data recorded" :
                      (data['2014.completion.rate_suppressed.overall'] * 100).toFixed(0) + "%";
      var averageSalary = data['2012.earnings.10_yrs_after_entry.median'] == null ?
                            "No data recorded" :
                            "$" + data['2012.earnings.10_yrs_after_entry.median'];  

        return(
          <li key={index} className="list-item">
            <div className="school">
              <h5>{ data['school.name'] }</h5>
            </div>
            <div className="school-data">
              <div className="school-salary">
                <label>Average Salary:</label>
                <span>{ averageSalary }</span>
              </div>
              <div className="school-cost">
                <label>Average Cost:</label>
                <span>{ '$' + data['2014.cost.avg_net_price.overall'] }</span>
              </div>
              <div className="grad-rate">
                <label>Graduation Rate:</label>
                <span>{ gradRate }</span>
              </div>
              <div className="school-size">
                <label>School Size:</label>
                <span>{ data['2014.student.size'] }</span>
              </div>
            </div>
          </li>
        )
      })
    }


    return(
      <div className="school-list-contain">
        <ul className="school-list">
          {bacSchoolList}
        </ul>
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
