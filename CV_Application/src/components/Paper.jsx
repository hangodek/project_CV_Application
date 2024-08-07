import './styles/Paper.css';
import countryImg from './assets/earth.svg';
import emailImg from './assets/email.svg';
import phoneImg from './assets/phone.svg';

function Paper({
    name, email,
    phone, country,
    education,
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
                <div className="cvBody">
                    {education.map((education, index) => (
                    <div key={index} className={`education-${index}`}>
                        <h2>{education.universityName} : {education.startYear} - {education.endYear}</h2>
                        <h3>{education.degree}</h3>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Paper