import { useState } from 'react'

export default function Left() {

    const [isActive, setActive] = useState({
        personalInfo: true,
        education: true,
    })

    const toggleVisibility = (value) => {
        setActive((prevState) => ({
            ...prevState, [value]: !prevState[value]
        }))
    }

    const [educationColumn, setEducationColumn] = useState(0);

    function handleColumnIncrement() {
        setEducationColumn(educationColumn + 1)
    }

    function handleColumnDecrement() {
        setEducationColumn(educationColumn - 1)
    }
    
    return (
        <>
            <div className='leftBottomSection'>
                <button className={'dropdownBtn'} onClick={() => toggleVisibility('personalInfo')}>Personal Information</button>
                {isActive.personalInfo && 
                    <div className="inputStyle"> 
                        <Inputter name={'Name'} type={'text'} />
                        <Inputter name={'Phone'} type={'tel'} />
                        <Inputter name={'Phone'} type={'tel'} />
                        <Inputter name={'Phone'} type={'tel'} />
                    </div>
                }

                <button className={'dropdownBtn'} onClick={() => toggleVisibility('education')}>Education</button>
                {isActive.education &&
                    <div className="inputStyle">
                        <Inputter name={'Education'} type={'text'} />
                        {Array.from({length: educationColumn}).map(() => {
                            return <Inputter name={'Education'} type={'text'} />
                        })}
                        <AddAnother onClick={handleColumnIncrement} type={'+'} />
                        {educationColumn > 0 &&
                            <AddAnother onClick={handleColumnDecrement} type={'-'} />
                        }
                    </div>
                }
            </div> 
        </>
    )
}

function Inputter({name, type}) {

    return (
        <>
            <label>
                <h2>{name}</h2>
                <input type={type} id={name}></input>
            </label>
        </>    
    )
}

function Button({name, onClick}) {
    return (
        <>
        <button onClick={onClick} className='dropdownBtn'>{name}</button>
        </>
    )
}

function AddAnother({onClick, type}) {
    return (
        <>
            <button style={{width: '1.2rem', height: '1.2rem', alignSelf: 'center', marginTop: '1rem'}} onClick={onClick}>{type}</button>
        </>
    )
}