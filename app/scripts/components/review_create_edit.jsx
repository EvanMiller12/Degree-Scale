var React = require('react');
var Backbone = require('backbone');

var programNames = require('./../program_data');

var User = require('../models/user').User;
var Review = require('../models/review').Review;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class ReviewCreateEditContainer extends React.Component {

  constructor(props){
    super(props);

    var review = new Review();

    if(this.props.id){
      review.set('objectId', this.props.id);
      review.fetch().then(() => {
        this.setState({
          review,
          degree: review.get('degree'),
          major: review.get('major'),
          employment: review.get('employment'),
          experience: review.get('experience'),
          salary: review.get('salary'),
          recommend: review.get('recommend')
        })
      })
    }

    this.state = {
      degree: null,
      major: null,
      employment: null,
      showOptions: false,
      experience: null,
      salary: null,
      recommend: null,
      review
    }

    this.updateDegree = this.updateDegree.bind(this);
    this.updateMajor = this.updateMajor.bind(this);
    this.updateEmployment = this.updateEmployment.bind(this);
    this.handleShowOptions = this.handleShowOptions.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.updateSalary = this.updateSalary.bind(this);
    this.updateRecommend = this.updateRecommend.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateDegree(e){
    // console.log('e', e.target.value);
    this.setState({ degree: e.target.value })
    // this.state.review.set({ degree: e.target.value });
  }
  updateMajor(e){
    this.setState({ major: e.target.value })
    // this.state.review.set({ major: e.target.value });
  }
  updateEmployment(e){
    this.setState({ employment: e.target.value })
    // this.state.review.set({ employment: e.target.value == 'on' });

  }
  updateExperience(e){
    this.setState({ experience: e.target.value })
    // this.state.review.set({ experience: e.target.value });
  }
  updateSalary(e){
    this.setState({ salary: e.target.value })
    // this.state.review.set({ salary: e.target.value });
  }
  updateRecommend(e){
    if(e.target.value == 'yes') {
      this.setState({ recommend: 'Yes' })
    } else {
      this.setState({ recommend: 'No' })
    }
    this.state.review.set({ recommend: e.target.value });
  }
  handleShowOptions(e){
    e.preventDefault();
      this.setState({showOptions: !this.state.showOptions});
  }
  handleSubmit(e){
    e.preventDefault();

    var review = this.state.review;

    review.isNew() ? review.setPointer('owner', '_User', User.current().get('objectId')) : null
    review.set({
      degree: this.state.degree,
      major: this.state.major,
      employment: this.state.employment,
      experience: this.state.experience,
      salary: this.state.salary,
      recommend: this.state.recommend
    });

    review.save().then((response) => {
      Backbone.history.navigate('#review/', { trigger: true })
    });
  }
  render() {

    var programs = Object.keys(programNames).map(function(key, index){
      return <option key={key} value={programNames[key]}>{programNames[key]}</option>
    });
    return (
      <BaseLayout>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="review-form-title">
              <h1>Leave A Review of Your Degree Below</h1>
            </div>
            <div className="review-form-contain col-sm-offset-1">
              <form onSubmit={ this.handleSubmit }>
                <div className="select-degree-contain">
                  <div className="select-degree-title">
                    <label className="degree-select-label">
                      Select Your Degree and Major:
                    </label>
                  </div>
                  <select onChange={ this.updateDegree } className="select-degree option1" name="select-degree" value={this.state.degree}>
                    <option id="select-deg" value="select-degree">Select Degree</option>
                    <option id="associates" value="associates">Associates</option>
                    <option id="bachelors" value="bachelors">Bachelors</option>
                  </select>
                  <select onChange={ this.updateMajor } className="select-major option1" name="select-major"  value={ this.state.major }>
                    <option id="select-maj" value="select-major">Select Major</option>
                    {programs}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="employment">
                    What type of job did you get with this degree?
                    <input onChange={ this.updateEmployment} value={ this.state.employment } className="form-control" type="text" placeholder="Quality Engineer, Manager, etc."/>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="experience">
                    Number of years working in this field:
                    <input onChange={ this.updateExperience } value={ this.state.experience } className="form-control" type="text" placeholder="years"/>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="salary">
                    Salary:
                    <input onChange={ this.updateSalary} value={ this.state.salary } className="form-control" type="text" placeholder="$0.00"/>
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input onChange={ this.updateRecommend } value="yes" type="checkbox" checked={ this.state.recommend === 'Yes' ? true : false } />
                    Recommend
                  </label>
                  <label>
                    <input onChange={ this.updateRecommend } value="no" type="checkbox" checked={ this.state.recommend === 'No' ? true : false } />
                    Don't Recommend
                  </label>
                </div>
                <div className="review-submit">
                  <input className="btn btn-primary" type="submit" value="Submit Review"/>
                  <a className="btn btn-danger" href="#">Maybe Later</a>
                </div>
              </form>

            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

// class GotAJobForm extends React.Component {
//   render(){
//     return(
//       <div className="got-job-form">
//         <div className="form-group">
//           <label htmlFor="experience">
//             Number of years working in this field:
//             <input onChange={ this.props.updateExperience } value={ this.props.experience } className="form-control" type="text" placeholder="years"/>
//           </label>
//         </div>
//         <div className="form-group">
//           <label htmlFor="salary">
//             Salary:
//             <input onChange={ this.props.updateSalary} value={ this.props.salary } className="form-control" type="text" placeholder="$0.00"/>
//           </label>
//         </div>
//         <div className="checkbox">
//           <label>
//
//             <input value="yes" onChange={ this.props.updateRecommend }  type="checkbox" checked={ this.props.recommend === 'Yes' ? true : false } />
//             Recommend
//           </label>
//           <label>
//             <input value="no" onChange={ this.props.updateEmployment }  type="checkbox" checked={ this.props.recommend === 'No' ? true : false } />
//             Don't Recommend
//           </label>
//         </div>
//       </div>
//     )
//   }
// }

module.exports = {
  ReviewCreateEditContainer
}
