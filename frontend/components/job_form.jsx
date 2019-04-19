import React from 'react';
import {createJob} from '../util/job_api_util';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: '',
      start_time: '',
      estimated_end_time: '',
      date: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }
  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault();
    const jobparams = Object.assign({}, this.state);
    createJob(jobparams);
  }

  update(property) {
    console.log(this.state)
    return e => this.setState({
      [property]: e.target.value
    });

  }

  render() {
    const { customer, start_time, estimated_end_time, date } = this.state;
    return (
      <div>
        <h2>Job Form</h2>
        <form onSubmit={this.handleSubmit}>
          Customer Name:
          <input
            type="text"
            value={customer}
            onChange={this.update('customer')}
          />
          <br />
          Date:
          <input
            type="date"
            value={date}
            onChange={this.update('date')}
          />
          <br />
          Start Time:
          <input
            type="time"
            value={start_time}
            onChange={this.update('start_time')}
          />
          <br />
          Estimated End Time:
          <input
            type="time"
            value={estimated_end_time}
            onChange={this.update('estimated_end_time')}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
export default JobForm