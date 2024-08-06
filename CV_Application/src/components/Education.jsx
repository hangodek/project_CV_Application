import { useState } from 'react'
import expandMore from './assets/arrow-down.svg'
import expandLess from './assets/arrow-up.svg'

function Education({
    universityName, setUniversity,
    degree, setDegree,
    startYear, setStartYear,
    endYear, setEndYear,
}) {

    const [isShown, setShown] = useState(false)

    function handleShown() {
        setShown((prevState) => !prevState)
    }

    function handleUniversity(e) {
        setUniversity(e.target.value)
    }

    function handleDegree(e) {
        setDegree(e.target.value)
    }

    function handleStartYear(e) {
        setStartYear(e.target.value)
    }

    function handleEndYear(e) {
        setEndYear(e.target.value)
    }

    return (
        <>
            <div className="drowdown-container">
                <div className="dropdown-button">
                    <h2>Education</h2>
                    <img
                    onClick={handleShown}
                    src={isShown ? expandLess : expandMore}
                    className='expand-icon'>
                    </img>
                </div>
                {isShown ? <div className="dropdown-content">
                    <div className="inputcontainer">
                        <label htmlFor="universityname">University / School Name :</label>
                        <input
                        onChange={handleUniversity}
                        value={universityName}
                        type='text'
                        name='universityname'
                        id='universityname'
                        ></input>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="degree">Degree :</label>
                        <input
                        onChange={handleDegree}
                        value={degree}
                        type='text'
                        name='degree'
                        id='degree'
                        ></input>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="startYear">Start Year :</label>
                        <input
                        onChange={handleStartYear}
                        value={startYear}
                        type='date'
                        name='startYear'
                        id='startYear'
                        ></input>
                    </div>
                    <div className="inputcontainer">
                        <label htmlFor="endYear">End Year :</label>
                        <input
                        onChange={handleEndYear}
                        value={endYear}
                        type='date'
                        name='endYear'
                        id='endYear'
                        ></input>
                    </div>
                    <hr></hr>
                </div> : null}
            </div>
        </>
    )
}

export default Education