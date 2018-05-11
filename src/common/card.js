import React from 'react'

const Card = props => {
  let title = props.title
  let children = props.children
  return (
    <div style={{borderBottom: '1px solid #000'}}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Card
