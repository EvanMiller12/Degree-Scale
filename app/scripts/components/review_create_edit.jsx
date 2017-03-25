var React = require('react');

var programNames = require('./../program_data');

var Review = require('../models/review').Review;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ReviewCreateEditContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      degree: null,
      major: null,
      employment: null,
      experience: null,
      salary: null,
      recommend: null
    }

    this.updateDegree = this.updateDegree.bind(this);
    this.updateMajor = this.updateMajor.bind(this);
    this.updateEmployment = this.updateEmployment.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.updateSalary = this.updateSalary.bind(this);
    this.updateRecommend = this.updateRecommend.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateDegree(e){
    this.setState({ degree: e.target.value })
  }
  updateMajor(e){
    this.setState({ major: e.target.value })
  }
  updateEmployment(e){
    if(e.target.value == 'on') {
      this.setState({ employment: 'Yes' })
    } else {
      this.setState({ employment: 'No' })
    }
  }
  updateExperience(e){
    this.setState({ experience: e.target.value })
  }
  updateSalary(e){
    this.setState({ salary: e.target.value })
  }
  updateRecommend(e){
    e.preventDefault();
    if(e.target.value == 'Recommend') {
      this.setState({ recommend: 'recommended' })
    } else {
      this.setState({ recommend: 'not recommended' })
    }
  }
  handleSubmit(e){
    e.preventDefault();
    var review = new Review(this.state);
    console.log('review', review)
    review.save()
  }
  render() {
    var programs = Object.keys(programNames).map(function(key, index){
      return <option key={programNames[key]} value={key}>{programNames[key]}</option>
    });
    return (
      <BaseLayout>
        <div className="review-form-contain">
          <div className="review-form-title">
            <h1>Leave A Review of Your Degree Below</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <div className="select-degree-contain">
                  <div>
                  <label className="degree-select-label">
                    Select Your Degree:
                  </label>
                  </div>
                  <select onChange={this.updateDegree} className="select-degree option1" name="select-degree">
                    <option id="degree" value="certificate">Certificate</option>
                    <option id="degree" value="associates">Associates</option>
                    <option id="degree" value="bachelors">Bachelors</option>
                  </select>
                  <select onChange={this.updateMajor} className="select-major option1" name="select-major">
                    {programs}
                  </select>
                </div>
                <div className="checkbox">
                  <h5>Were you able to get a job with this degree?</h5>
                  <label>
                    <input onChange={this.updateEmployment} type="checkbox"/>
                    Yes
                  </label>
                  <label>
                    <input onChange={this.updateEmployment} type="checkbox"/>
                    No
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="experience">
                    Number of years working in this field:
                    <input onChange={this.updateExperience} value={this.state.experience} className="form-control" type="text" placeholder="years"/>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="salary">
                    Salary:
                    <input onChange={this.updateSalary} value={this.state.salary} className="form-control" type="text" placeholder="$0.00"/>
                  </label>
                </div>
                <div className="input-group">
                  <input onClick={this.updateRecommend} value='Recommend' className="btn btn-success" type="button" />
                  <input onClick={this.updateRecommend} value='Not Recommendded' className="btn btn-success" type="button" />
                </div>
                <div className="review-submit pull-right">
                  <input className="btn btn-primary" type="submit" value="Submit Review"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </BaseLayout>
    )
  }
}

// class ReviewCreateEditForm extends React.Component {
//   render() {
//     var programs = Object.keys(programNames).map(function(key, index){
//       return <option key={programNames[key]} value={key}>{programNames[key]}</option>
//     });
//   return (
//       <div className="review-form-contain">
//         <div className="review-form-title">
//           <h1>Leave A Review of Your Degree Below</h1>
//         </div>
//         <form>
//           <div className="row">
//             <div className="col-sm-8 col-sm-offset-2">
//               <div className="select-degree-contain">
//                 <div>
//                 <label className="degree-select-label">
//                   Select Your Degree:
//                 </label>
//                 </div>
//                 <select className="select-degree option1" name="select-degree">
//                   <option id="degree" value="degree">Certificate</option>
//                   <option id="degree" value="degree">Associates</option>
//                   <option id="degree" value="degree">Bachelors</option>
//                 </select>
//                 <select className="select-major option1" name="select-major">
//                   {programs}
//                 </select>
//               </div>
//               <div className="checkbox">
//                 <h5>Were you able to get a job with this degree?</h5>
//                 <label>
//                   <input type="checkbox"/>
//                   Yes
//                 </label>
//                 <label>
//                   <input type="checkbox"/>
//                   No
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="experience">
//                   Number of years working in this field:
//                   <input className="form-control" type="text" placeholder="years"/>
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="salary">
//                   Salary:
//                   <input className="form-control" type="text" placeholder="$0.00"/>
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="job-satisfaction">
//                   Job satisfaction in the field of your degree:
//                 </label>
//                 <h6>stars</h6>
//               </div>
//                 <input className="btn btn-success" type="submit" value="Submit Review"/>
//             </div>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }


module.exports = {
    ReviewCreateEditContainer
}
