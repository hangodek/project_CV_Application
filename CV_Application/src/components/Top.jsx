import { useState } from 'react'
// import './App.css'

export default function Top() {

  return (
    <>
      <Button value={'Dark Mode'} classtype={'blackBtn'} changeColor={'black'} />
      <Button value={'Light Mode'} classtype={'whiteBtn'} changeColor={'white'} />
    </>
  )
}

function Button({value, classtype, changeColor}) {
    let temp = document.body;

    return (
        <button onClick={() => temp.style.backgroundColor = changeColor} className={classtype}>{value}</button>
    )
}


