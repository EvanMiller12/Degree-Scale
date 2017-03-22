var React = require('react');

var programNames = require('./../program_data');

var DegreeCollection = require('../models/degree.js').DegreeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var DegreeDetail = require('./degree_detail.jsx').DegreeDetail;
var DegreeSelect = require('./degree_select.jsx').DegreeSelect;

class DegreeResultsContainer extends React.Component {
  constructor(props){
    super(props);

    var degreeCollection = new DegreeCollection;

    this.updateDegreeDetail = this.updateDegreeDetail.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      degreeCollection,
      selectedMajor: null
    }
  }

  updateSelection(e){
    e.preventDefault();
    var selectedMajor = e.target.value;

    this.setState({selectedMajor: selectedMajor});

    this.updateDegreeDetail(selectedMajor);
  }

  updateDegreeDetail(selected) {
    var selectedMajor = selected;
    var degreeCollection = this.state.degreeCollection;
    var url = degreeCollection.urlSetter(1, selectedMajor)

    url.fetch().done((response) => {
      this.setState({degreeCollection: degreeCollection});
      console.log('url', degreeCollection);
      url = degreeCollection.urlSetter(2, selectedMajor);
      url.fetch().done((response) => {
        this.setState({degreeCollection: degreeCollection});
        console.log('url', degreeCollection)
        url = degreeCollection.urlSetter(3, selectedMajor)
        url.fetch().done((response) => {
          this.setState({degreeCollection: degreeCollection});
          console.log('url', degreeCollection)
        });
      });
    });
  }
  render(){
    return(
      <BaseLayout>
        <DegreeSelect
          selectedMajor={this.state.selectedMajor}
          updateSelection={this.updateSelection}
          />
        <DegreeDetail />
      </BaseLayout>
    )
  }
}

module.exports = {
  DegreeResultsContainer
}
