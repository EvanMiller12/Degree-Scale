var React = require('react');

var programNames = require('./../program_data');

var DegreeCollection = require('../models/degree.js').DegreeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var DegreeDetail = require('./degree_detail.jsx').DegreeDetail;
var DegreeSelect = require('./degree_select.jsx').DegreeSelect;

class DegreeResultsContainer extends React.Component {
  constructor(props){
    super(props);

    var degreeCollection = new DegreeCollection();

    this.updateSelection = this.updateSelection.bind(this);
    this.updateResults = this.updateResults.bind(this);


    this.state = {
      degreeCollection,
      selectedMajor: null,
      cerAverage: null,
      ascAverage: null,
      bacAverage: null
    }
  }

  updateSelection(e){
    e.preventDefault();
    var selectedMajor = e.target.value;

    this.setState({ selectedMajor: selectedMajor });

    this.updateResults(selectedMajor)
  }

  updateResults(selectedMajor) {
    this.state.degreeCollection.urlSetter(1, selectedMajor);
    this.state.degreeCollection.fetch().done((response) => {
      console.log('cert school array', response);
      this.setState({cerAverage: this.state.degreeCollection.average(response)});
      this.state.degreeCollection.urlSetter(2, selectedMajor);
      this.state.degreeCollection.fetch().done((response) => {
        console.log('asc school array', response);
        this.setState({ascAverage: this.state.degreeCollection.average(response)});
        this.state.degreeCollection.urlSetter(3, selectedMajor);
        this.state.degreeCollection.fetch().done((response) => {
          console.log('bac school array', response);
          this.setState({bacAverage: this.state.degreeCollection.average(response)});
          console.log('cert average', this.state.cerAverage);
          console.log('asco average', this.state.ascAverage);
          console.log('bach average', this.state.bacAverage);
        })
      })
    })
  }
  render(){
    return(
      <BaseLayout>
        <DegreeSelect
          selectedMajor={this.state.selectedMajor}
          updateSelection={this.updateSelection}
          />
        <DegreeDetail
          selectedMajor={this.state.selectedMajor}
          cerAverage={this.state.cerAverage}
          ascAverage={this.state.ascAverage}
          bacAverage={this.state.bacAverage}
        />
      </BaseLayout>
    )
  }
}

module.exports = {
  DegreeResultsContainer
}
