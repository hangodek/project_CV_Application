import './styles/Paper.css'
import countryImg from './assets/earth.svg'
import emailImg from './assets/email.svg'
import phoneImg from './assets/phone.svg'

function Paper({
    name, email,
    phone, country,
    universityName, degree,
    startYear, endYear,
}) {

    return (
        <>
            <div className='paper-container'>
                <h1>{name}</h1>
                <div className='cvHeader'> 
                    <div className='cvHeaderChildren'>
                        <img src={emailImg}></img>
                        <h3>{email}</h3>
                    </div>
                    <div className='cvHeaderChildren'>
                        <img src={phoneImg}></img>
                        <h3>{phone}</h3>
                    </div>
                    <div className='cvHeaderChildren'>
                        <img src={countryImg}></img>
                        <h3>{country}</h3>
                    </div>
                </div>
                <h1>Education</h1>
                <hr />
                <div className='cvBody'>
                    <div className='cvBodyChildren'>
                        <h2>{universityName} : {startYear} - {endYear}</h2>
                        <p>{degree}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paper