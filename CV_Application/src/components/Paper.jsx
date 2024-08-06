import './styles/Paper.css'

function Paper({name}) {

    return (
        <>
            <div className="paper-container">
                <div className="cvHeader">
                    <h1>{name}</h1>
                </div>
            </div>
        </>
    )
}

export default Paper