import { useState } from 'react'
import BasicInfo from './components/BasicInfo'
import Education from './components/Education'
import Paper from './components/Paper'

function App() {

  const [name, setName] = useState('Muhammad Farhan Pulungan')
  const [email, setEmail] = useState('farhan@gmail.com')
  const [phone, setPhone] = useState('+6281375258000')
  const [country, setCountry] = useState('Indonesia')
  
  const [universityName, setUniversity] = useState('University of Al-Wasliyah Sumatera Utara')
  const [degree, setDegree] = useState('Bachelor in Management of Islamic Education')
  const [startYear, setStartYear] = useState('2022')
  const [endYear, setEndYear] = useState('2024')

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
          <Paper
            name={name} email={email}
            phone={phone} country={country}
            universityName={universityName} degree={degree}
            startYear={startYear} endYear={endYear}
          />
        </div>
      </div>
    </>
  )
}

export default App