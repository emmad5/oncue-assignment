import React from 'react';
import {createTruck} from '../util/truck_api_util';

class TruckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start_time: '',
      end_time: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }
  handleSubmit(e) {
    e.preventDefault();
    const truckparams = Object.assign({}, this.state);
    createTruck(truckparams);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });

  }

  render() {
    const { name, start_time, end_time } = this.state;
    return (
      <div>
        <h2>Truck Form</h2>
        <form onSubmit={this.handleSubmit}>
        Name:
          <input
            type="text"
            value={name}
            onChange={this.update('name')}
          />
          <br/>
          Start Time:
          <input
            type="time"
            value={start_time}
            onChange={this.update('start_time')}
          />
          <br />
          End Time:
          <input
            type="time"
            value={end_time}
            onChange={this.update('end_time')}
          />
          <br />
          <input type="submit" value="Submit"/>
        </form>

      </div>
    )
  }
}
export default TruckForm