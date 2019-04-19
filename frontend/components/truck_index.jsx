import React from 'react';
import { fetchTrucks } from '../util/truck_api_util';

class TruckList extends React.Component {
  constructor(props) {
    super(props);
    this.parseTime = this.parseTime.bind(this)
    this.parseJobs = this.parseJobs.bind(this)
  }

  componentDidMount() {
    fetchTrucks().then(trucks => {
      this.setState({ trucks });
    });
  }

  parseTime(time) {
    return time.split('T')[1].split('.')[0];
  }

  parseJobs(jobs){
    return jobs.map(job => {
      return (
        <div key={job.id}>
          customer: {job.customer}
          <br/>
          date: {job.date}
        </div>
      );
    });

  }

  renderTrucks() {
    if (!this.state) return '';
  
    return Object.values(this.state.trucks).map(truck => (
    <li key={truck.id}>
        <h2>{truck.name}</h2>
        <br />
        <h3>Start Time:</h3> {this.parseTime(truck.start_time)}
        <br/>
        <h3>End Time:</h3> {this.parseTime(truck.end_time)}
        <br/>
        <h3>Jobs:</h3> {this.parseJobs(truck.jobs)}
    </li>
    ));
  }

  render() {
    return (
      <div>
      <h2>All trucks</h2>
      <ul>
        {this.renderTrucks()}
      </ul>
      </div>
    )
  }
}
export default TruckList