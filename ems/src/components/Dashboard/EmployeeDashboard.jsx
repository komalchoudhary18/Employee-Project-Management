// import React from 'react'
// import Header from '../other/Header'
// import TaskListNumbers from '../other/TaskListNumbers'
// import TaskList from '../TaskList/TaskList'

// const EmployeeDashboard = (props) => {

//   return (
//     <div className='p-10 bg-[#1C1C1C] h-screen'>
        
//         <Header changeUser={props.changeUser} data={props.data}/>
//         <TaskListNumbers data={props.data} />
//         <TaskList data={props.data} />
//     </div>
//   )
// }

// export default EmployeeDashboard

import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  const { data } = props; // Extract data from props

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header 
        changeUser={props.changeUser} 
        firstName={data.firstName} // Pass the employee's first name
      />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
