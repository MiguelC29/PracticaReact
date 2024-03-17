import React from 'react'

export default function MyButton() {
    function handleClick() {
        alert('Me hiciste click');
    }

  return (
    <>
    <button onClick={handleClick}>Hazme click</button><br/>
    </>
  )
}