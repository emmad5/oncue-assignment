import React from 'react';
import TruckList from './truck_index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Oncue Assignment</h1>
        <TruckList />
      </div>
    )
  }
}
export default App