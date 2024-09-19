import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='flex justify-center w-100'>
      <Homepage/>
      <EmployeePage/>
    </div>
     
    </>
  )
}
export default App


