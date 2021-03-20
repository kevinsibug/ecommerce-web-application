import React from 'react'



const SimpleModal = ({image}) => {
  return (
    <div style = {{position: 'absolute', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%)'}}>
      <img style = {{maxWidth: '350px'}} src = {image}></img>
    </div>
  )
}

export default SimpleModal
