import React from 'react';
import { fetchTrucks } from '../util/truck_api_util';

class TruckList extends React.Component {
  constructor(props) {
    super(props);
    this.parseTime = this.parseTime.bind(this)
  }

  componentDidMount() {
    fetchTrucks().then(trucks => {
      this.setState({ trucks });
    });
  }

  parseTime(time) {
    return time.split('T')[1].split('.')[0];
  }

  renderTrucks() {
    if (!this.state) return '';
  
    return Object.values(this.state.trucks).map(truck => (
    <li key={truck.id}>
      {truck.name}
        <br />
        start time: {this.parseTime(truck.start_time)}
        <br/>
        end time: {this.parseTime(truck.end_time)}
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