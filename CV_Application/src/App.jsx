import { useState } from 'react';
import BasicInfo from './components/BasicInfo';
import Education from './components/Education';
import Paper from './components/Paper';

function App() {

  const [name, setName] = useState('Muhammad Farhan Pulungan')
  const [email, setEmail] = useState('farhan@gmail.com')
  const [phone, setPhone] = useState('+6281375258000')
  const [country, setCountry] = useState('Indonesia')

  const [education, setEducation] = useState([
        {
            universityName: 'University of Al-Wasliyah Sumatera Utara',
            degree: 'Bachelor in Management of Islamic Education',
            startYear: '2022',
            endYear: '2025',
        },
    ])

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
            education={education} setEducation={setEducation}
          />
        </div>
        <div className='right-container'>
          <Paper
            name={name} email={email}
            phone={phone} country={country}
            education={education}
          />
        </div>
      </div>
    </>
  )
}

export default App