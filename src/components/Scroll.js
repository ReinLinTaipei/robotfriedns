import React from 'react'

export const Scroll = (props) => {
  return (
    // <div style={{ overflow: 'scroll', border: '5px solid yellow', height: '200px' }}>
    <div>
      {props.children}
    </div>
  )
}