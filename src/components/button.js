import React from 'react'

const Button = (props) => (
    
    <div className="ButtonContainer">
        <button className="button" onClick={props.openModal}>Ubicación</button>
    </div>
)

export default Button;