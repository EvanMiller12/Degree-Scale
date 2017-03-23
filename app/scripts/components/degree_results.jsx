var React = require('react');

var programNames = require('./../program_data');

var DegreeCollection = require('../models/degree.js').DegreeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var DegreeDetail = require('./degree_detail.jsx').DegreeDetail;
var DegreeSelect = require('./degree_select.jsx').DegreeSelect;

class DegreeResultsContainer extends React.Component {
  constructor(props){
    super(props);

    var certificateCollection = new DegreeCollection;
    var associateCollection = new DegreeCollection;
    var bachelorCollection = new DegreeCollection;

    this.updateSelection = this.updateSelection.bind(this);
    this.updateCertResults = this.updateCertResults.bind(this);
    this.updateAscResults = this.updateAscResults.bind(this);
    this.updateBachResults = this.updateBachResults.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      certificateCollection,
      associateCollection,
      bachelorCollection,
      selectedMajor: null
    }
  }

  updateSelection(e){
    e.preventDefault();
    var selectedMajor = e.target.value;

    this.setState({selectedMajor: selectedMajor});

    this.updateCertResults(selectedMajor);
    this.updateAscResults(selectedMajor);
    this.updateBachResults(selectedMajor);
  }


  updateCertResults(selected) {
    var selectedMajor = selected;
    var certificateCollection = this.state.certificateCollection;
    var certificateData = certificateCollection.urlSetter(1, selectedMajor)

    certificateData.fetch().done((response) => {
      // this.setState({certificateCollection});
      // console.log('cert', certificateCollection);
      });
  }

  updateAscResults(selected) {
    var selectedMajor = selected;
    var associateCollection = this.state.associateCollection;
    var associateData = associateCollection.urlSetter(2, selectedMajor);

    associateData.fetch().done((response) => {
      // this.setState({associateCollection});
      // console.log('A.S', associateCollection)
    });
  }

  updateBachResults(selected) {
    var selectedMajor = selected;
    var bachelorCollection = this.state.bachelorCollection;
    var bachelorData = bachelorCollection.urlSetter(3, selectedMajor);

    bachelorData.fetch().done((response) => {
      // this.setState({bachelorCollection});
      // console.log('B.S', bachelorCollection)
    });
  }
  render(){
    return(
      <BaseLayout>
        <DegreeSelect
          selectedMajor={this.state.selectedMajor}
          updateSelection={this.updateSelection}
          />
        <DegreeDetail
          certificateCollection={this.state.certificateCollection}
          associateCollection={this.state.associateCollection}
          bachelorCollection={this.state.bachelorCollection}
        />
      </BaseLayout>
    )
  }
}

module.exports = {
  DegreeResultsContainer
}
