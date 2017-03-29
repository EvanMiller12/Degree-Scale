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
      ascData: null,
      ascAverage: null,
      bacData: null,
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

    this.setState({ selectedMajor: selectedMajor, showResults: true });

    this.updateResults(selectedMajor)
  }

  updateResults(selectedMajor) {
    this.state.degreeCollection.urlSetter('assoc', selectedMajor);
    this.state.degreeCollection.fetch().done((data) => {
      console.log('asc school array', data.results);
      this.setState({ascAverage: this.state.degreeCollection.average(data), ascData: data.results});
      this.state.degreeCollection.urlSetter('bachelors', selectedMajor);
      this.state.degreeCollection.fetch().done((data) => {
        console.log('bac school array', data);
        this.setState({bacAverage: this.state.degreeCollection.average(data), bacData: data.results});
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
          ascAverage={ this.state.ascAverage }
          ascData={ this.state.ascData }
          bacData={ this.state.bacData }
          bacAverage={ this.state.bacAverage }
        /> : null }
      </BaseLayout>
    )
  }
}

module.exports = {
  DegreeResultsContainer
};
