var React = require('react');

var programData = require('./../program_data');
var BaseLayout = require('./layouts/base.jsx').BaseLayout;

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
                  <form>
                    <div className="degree-select">
                    <span className="degree-select-label">
                      Select Your Degree:
                    </span>
                    <select className="degree-select option1" name="degree-select">
                      <option value="Degree">Degree Name</option>
                    </select>
                    </div>
                    <div className="view-salary-btn">
                      <a className="btn btn-success" href="#" role="button">
                        View Salary
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

module.exports = {
  DegreeSelectContainer
}
