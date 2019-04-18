import React from 'react';
import TruckList from './truck_index';
import TruckForm from './truck_form';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Oncue Assignment</h1>
        <TruckForm />
        <TruckList />
      </div>
    )
  }
}
export default App