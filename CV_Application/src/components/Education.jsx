import { useState } from 'react';
import expandMore from './assets/arrow-down.svg';
import expandLess from './assets/arrow-up.svg';

function Education({ education, setEducation }) {

    const [isShown, setShown] = useState(false)

    function handleShown() {
        setShown((prevState) => !prevState);
    }

    const addEducation = () => {
        setEducation([...education, {universityName: '', degree: '', startYear: '', endYear: ''}]);
    }

    const removeEducation = (index) => {
        const newEducation = education.filter((_, i) => i !== index);
        setEducation(newEducation);
    }

    const handleInputChange = (index, field, value) => {
        const newEducation = education.map((education, i) => (
            i === index ? { ...education, [field]: value } : education
        ));
        setEducation(newEducation);
    }

    return (
        <>
            <div className='drowdown-container'>
                <div className='dropdown-button'>
                    <h2>Education</h2>
                    <img
                    onClick={handleShown}
                    src={isShown ? expandLess : expandMore}
                    className='expand-icon'>
                    </img>
                </div>
                {isShown ? <div className="dropdown-content">
                    {education.map((education, index) => (
                        <div key={index} className="education-form">
                            <div className="inputcontainer">
                                <label htmlFor={`universityname-${index}`}>University / School Name :</label>
                                <input
                                    onChange={(e) => handleInputChange(index, 'universityName', e.target.value)}
                                    value={education.universityName}
                                    type='text'
                                    name={`universityname-${index}`}
                                    id={`universityname-${index}`}
                                />
                            </div>
                            <div className='inputcontainer'>
                                <label htmlFor={`degree-${index}`}>Degree :</label>
                                <input
                                    onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                                    value={education.degree}
                                    type='text'
                                    name={`degree-${index}`}
                                    id={`degree-${index}`}
                                />
                            </div>
                            <div className='inputcontainer'>
                                <label htmlFor={`startYear-${index}`}>Start Year :</label>
                                <input
                                    onChange={(e) => handleInputChange(index, 'startYear', e.target.value)}
                                    value={education.startYear}
                                    type='text'
                                    name={`startYear-${index}`}
                                    id={`startYear-${index}`}
                                />
                            </div>
                            <div className='inputcontainer'>
                                <label htmlFor={`endYear-${index}`}>End Year :</label>
                                <input
                                    onChange={(e) => handleInputChange(index, 'endYear', e.target.value)}
                                    value={education.endYear}
                                    type='text'
                                    name={`endYear-${index}`}
                                    id={`endYear-${index}`}
                                />
                            </div>
                            <button onClick={() => removeEducation(index)}>Remove</button>
                            {index < education.length - 1 && <hr />}
                        </div>
                    ))}
                    <button onClick={addEducation}>Add Education</button>
                </div> : null}
            </div>
        </>
    )
}

export default Education