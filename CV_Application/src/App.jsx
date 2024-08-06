import { useState } from 'react'
import BasicInfo from './components/BasicInfo'
import Education from './components/Education'
import Paper from './components/Paper'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  
  const [universityName, setUniversity] = useState('')
  const [degree, setDegree] = useState('')
  const [startYear, setStartYear] = useState('')
  const [endYear, setEndYear] = useState('')

  return (
    <>
      <div className='main-container'>
        <div className='left-container'>
          <BasicInfo
            name={name} setName={setName}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            country={country} setCountry={setCountry}
          />
          <Education
            universityName={universityName} setUniversity={setUniversity}
            degree={degree} setDegree={setDegree}
            startYear={startYear} setStartYear={setStartYear}
            endYear={endYear} setEndYear={setEndYear}
          />
        </div>
        <div className='right-container'>
          <Paper name={name} />
        </div>
      </div>
    </>
  )
}

export default App