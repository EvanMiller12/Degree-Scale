var React = require('react');

var programNames = require('./../program_data');
var BaseLayout = require('./layouts/base.jsx').BaseLayout;

var DegreeCollection = require('../models/degree.js').DegreeCollection;

class DegreeSelectContainer extends React.Component{

  render(){

    return(
      <BaseLayout>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="degree-select-contain">
                <div className="degree-select-title">
                <h1>Find Degree</h1>
                </div>
                <div className="degree-select-form">
                  <DegreeSelectForm programs={this.programs}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

class DegreeSelectForm extends React.Component{
  render(){
    var programs = Object.keys(programNames).map(function(key, index){
      return <option key={programNames[key]} value={programNames[key]}>{key}</option>
    });

    return(
      <form onSubmit={this.handleSubmit}>
        <div className="degree-select">
        <span className="degree-select-label">
          Select Your Degree:
        </span>
        <select className="degree-select option1" name="degree-select">
          <option value="Degree">Select Degree Program</option>
          {programs}
        </select>
        </div>
        <div className="view-salary-btn">
          <a className="btn btn-success" href="#" role="button">
            View Salary
          </a>
        </div>
      </form>
    )
  }
}

module.exports = {
  DegreeSelectContainer
}
