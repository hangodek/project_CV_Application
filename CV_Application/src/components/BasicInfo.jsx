import { useState } from 'react'
import expandMore from './assets/arrow-down.svg'
import expandLess from './assets/arrow-up.svg'
import './styles/BasicInfo.css'


function BasicInfo({
    name, setName,
    email, setEmail,
    phone, setPhone,
    country, setCountry,
}) {

    const [isShown, setShown] = useState(false)

    function handleShown() {
        setShown((prevState) => !prevState)
    }

    function handleName(e) {
        setName(e.target.value)
    }
    
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePhone(e) {
        setPhone(e.target.value)
    }

    function handleCountry(e) {
        setCountry(e.target.value)
    }
    

    return (
        <>
            <div className='dropdown-container'>
                <div className='dropdown-button'>
                    <h2>Personal Information</h2>
                    <img
                        onClick={handleShown}
                        src={isShown ? expandLess : expandMore}
                        className='expand-icon'
                    ></img>
                </div>
                {isShown ? <div className='dropdown-content'>
                    <div className="inputcontainer">
                        <label htmlFor="name">Name :</label>
                        <input
                        onChange={handleName}
                        value={name}
                        type='text'
                        name='name'
                        id='name'
                        ></input>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="email">Email :</label>
                        <input
                        onChange={handleEmail}
                        value={email}
                        type='email'
                        name='email'
                        id='email'
                        ></input>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="phone">Phone Number :</label>
                        <input
                        onChange={handlePhone}
                        value={phone}
                        type='tel'
                        name='phone'
                        id='phone'
                        ></input>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="country">Country :</label>
                        <input
                        onChange={handleCountry}
                        value={country}
                        type='text'
                        name='country'
                        id='country'
                        ></input>
                    </div>
                    <hr></hr>
                </div> : null }
                
            </div>
        </>
    )
}

export default BasicInfo