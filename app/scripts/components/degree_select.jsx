var React = require('react');

var programNames = require('./../program_data');
var BaseLayout = require('./layouts/base.jsx').BaseLayout;

var DegreeCollection = require('../models/degree.js').DegreeCollection;

class DegreeSelectContainer extends React.Component{
  constructor(props){
    super(props);

    var degreeCollection = new DegreeCollection;

    this.state = {
      degreeCollection,
      selectedMajor: null
    }
  }
  updateDegreeDetail() {
    var degreeCollection = this.state.degreeCollection;
    var selectedMajor = this.state.selectedMajor;

    degreeCollection.urlSetter(2, {selectedMajor});
    degreeCollection.fetch().then(() =>
    Backbone.history.navigate('#degree/detail/', {trigger: true})
    )
  }
  render(){

    return(
      <BaseLayout>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="degree-select-contain">
              <div className="degree-select-title">
              <h1>Find Degree</h1>
              </div>
              <div className="degree-select-form">
                <DegreeSelect
                  updateDegreeDetail={this.updateDegreeDetail}
                />
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

class DegreeSelect extends React.Component{
  constructor(props){
    super(props);

    this.updateSelection = this.updateSelection.bind(this);

    this.state = {
      selectedMajor: ''
    }
  }
  updateSelection(e){
      this.setState({selectedMajor: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    var selectedMajor = this.state.selectedMajor;

    this.props.updateDegreeDetail(this.state)
  }
  render(){
    var programs = Object.keys(programNames).map(function(key, index){
      return <option key={programNames[key]} value={key}>{programNames[key]}</option>
    });

    return(
      <form onSubmit={this.handleSubmit}>
        <div className="degree-select">
        <span className="degree-select-label">
          Select Your Degree:
        </span>
        <select
          onChange={this.updateSelection}
          className="degree-select option1" name="degree-select">
          <option value="Degree">Select Degree Program</option>
          {programs}
        </select>
        </div>
        <div className="view-salary-btn">
          <a className="btn btn-success" href="#degree/detail/" role="button">
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
