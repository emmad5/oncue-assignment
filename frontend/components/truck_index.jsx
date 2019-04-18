import React from 'react';
import { fetchTrucks } from '../util/truck_api_util';

class TruckList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchTrucks().then(trucks => {
      this.setState({ trucks });
    });
  }

  renderTrucks() {
    if (!this.state) return '';
    console.log(this.state.trucks);
    return Object.values(this.state.trucks).map(truck => truck.name);
  }

  render() {
    return (
      <div>
      <h2>All trucks</h2>
      {this.renderTrucks()}
      
      </div>
    )
  }
}
export default TruckList