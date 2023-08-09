import React from 'react'

const index = ({color,children}) => {
  return (
    <div className={`notification ${color}`}>
        {
            children
        }
        <button className="delete" style={{backgroundImage:"/close.png"}}></button>
    </div>
  )
}

export default index