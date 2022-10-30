import React from 'react'

function SessionBox({title, description}) {
  return (
    <div className="border-2">
        <h3>{title}</h3>
        <p>image here</p>
        <p>{description}</p>
    </div>
  )
}

export default SessionBox