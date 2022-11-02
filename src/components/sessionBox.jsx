import React from 'react'

function SessionBox({title, image, description}) {
  return (
    <div className={image}>
        <h3 className="text-3xl">{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default SessionBox