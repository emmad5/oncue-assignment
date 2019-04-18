import React from 'react';

class TruckForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  handleSubmit(e) {
    e.preventDefault();
  }


  render() {
    return (
      <div>
        Truck Form
        <form onSubmit={this.handleSubmit}>
          <input type="string" placeholder='Name' />
          <input type="time" name="Start" id=""/>
          <input type="time" name="End" id=""/>
          <input type="submit" value="Submit"/>
        </form>

      </div>
    )
  }
}
export default TruckForm