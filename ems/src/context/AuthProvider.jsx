import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider


// import React, { createContext, useEffect, useState } from 'react';
// import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const { employees } = getLocalStorage();
//         setUserData(employees);
//     }, []);

//     // Function to assign a new task to a specific employee
//     const assignTask = (employeeId, newTask) => {
//         const updatedEmployees = userData.map(employee => {
//             if (employee.id === employeeId) {
//                 return {
//                     ...employee,
//                     tasks: [...employee.tasks, newTask],
//                     taskCounts: {
//                         ...employee.taskCounts,
//                         active: employee.taskCounts.active + 1,
//                     }
//                 };
//             }
//             return employee;
//         });

//         setUserData(updatedEmployees);
//         localStorage.setItem('employees', JSON.stringify(updatedEmployees));
//     };

//     return (
//         <AuthContext.Provider value={{ userData, setUserData, assignTask }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
