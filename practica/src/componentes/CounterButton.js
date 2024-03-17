import React from 'react'
import { useState } from 'react';

export default function CounterButton() {

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

  return (
    <>
        <span>Hazme click {'->'}</span>
        <button onClick={incrementCount}>{count === 0 ? 'Dale click' : 'Hiciste click '+count+' veces'}</button>
    </>
  )
}