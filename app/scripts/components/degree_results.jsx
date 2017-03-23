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

    this.handleShowResults = this.handleShowResults.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
    this.updateResults = this.updateResults.bind(this);


    this.state = {
      showResults: false,
      degreeCollection,
      selectedMajor: null,
      cerAverage: null,
      ascAverage: null,
      bacAverage: null
    }
  }
  handleShowResults(e){
    e.preventDefault();
    this.setState({ showResults: !this.state.showResults})
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
        })
      })
    })
  }
  render(){
    return(
      <BaseLayout>
        <DegreeSelect
          handleShowResults={ this.handleShowResults }
          selectedMajor={ this.state.selectedMajor }
          updateSelection={ this.updateSelection }
          />
        { this.state.showResults ? <DegreeDetail
          selectedMajor={ this.state.selectedMajor }
          cerAverage={ this.state.cerAverage }
          ascAverage={ this.state.ascAverage }
          bacAverage={ this.state.bacAverage }
        /> : null }
      </BaseLayout>
    )
  }
}

module.exports = {
  DegreeResultsContainer
}
