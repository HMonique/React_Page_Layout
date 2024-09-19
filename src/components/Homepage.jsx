import React from 'react'
import EmployeeList from './EmployeeList'
import SearchBar from './SearchBar'
import Header from "./Header"
const Homepage = () => {
  return (
    <>
   <div className=' border border-gray-600 p-3 w-1/2'>
    <Header/>
    <SearchBar/>
    <EmployeeList/>
   </div>
    </>
  )
}
export default Homepage