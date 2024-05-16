'use client'
import React from 'react'

interface ErrorProps {
  error: Error;
  reset: () => void
}

const error = ({ reset }: ErrorProps) => {
  return (
    <div className='Error'>
      <h2>Opss! something went wrong...</h2>
      <button
        className='Error_btn'
        onClick={reset}
      >Retry</button>
    </div>
  )
}

export default error