import React from 'react'

export default function SimultaneousCounterButton({ count, onClick }) {
  return (
    <>
    <span>Hazme click {'->'}</span>
    <button onClick={onClick}>{count === 0 ? 'Dale click' : 'Hiciste click '+count+' veces'}</button>
    </>
  )
}
