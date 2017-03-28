var React = require('react');

var programNames = require('./../program_data');

var DegreeCollection = require('../models/degree.js').DegreeCollection;

class DegreeSelect extends React.Component {
  render() {
    var programs = Object.keys(programNames).map(function(key, index){
      return <option key={programNames[key]} value={key}>{programNames[key]}</option>
    });
    return(
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="degree-select-contain">
            <div className="degree-select-title">
            <h1>Find Degree</h1>
            </div>
            <div className="degree-select-form">
              <div className="degree-select">
              <span className="degree-select-label">
                Select degree to view Salary:
              </span>
              <select
                onClick={ this.props.handleShowResults }
                onChange={ this.props.updateSelection }
                value={ this.props.selectedMajor }
                className="degree-select form-control" name="degree-select">
                <option value="Degree">Select Degree Program</option>
                  { programs }
              </select>
              </div>
                <a className="btn btn-danger" href="#">Maybe Later</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



module.exports = {
  DegreeSelect
}
