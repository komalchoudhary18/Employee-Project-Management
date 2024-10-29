// import React from 'react';

// const Header = (props) => {

//   const logOutUser = () => {
//     localStorage.removeItem('loggedInUser'); // Clear the logged in user
//     props.changeUser(''); // Change user state to log out
//     // window.location.reload(); // Reloading the page (optional)
//   }

//   return (
//     <div className='flex items-end justify-between'>
//         <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.firstName} 👋</span></h1> {/* Display employee's first name */}
//         <button onClick={logOutUser} className='px-5 py-2 text-base font-medium text-white bg-red-600 rounded-sm'>Log Out</button>
//     </div>
//   );
// }


import React from 'react';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser'); // Clear the logged-in user
    props.changeUser(''); // Change user state to log out
    // window.location.reload(); // Reloading the page (optional)
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{props.firstName || 'Admin'} 👋</span> {/* Display employee's first name */}
      </h1>
      <button onClick={logOutUser} className='px-5 py-2 text-base font-medium text-white bg-red-600 rounded-sm'>
        Log Out
      </button>
    </div>
  );
}

export default Header;
