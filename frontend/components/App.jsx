import React from 'react';
import TruckList from './truck_index';
import TruckForm from './truck_form';
import JobForm from './job_form'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Oncue Assignment</h1>
        <TruckForm />
        <JobForm />
        <TruckList />
      </div>
    )
  }
}
export default App