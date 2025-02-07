import React from 'react'

const Buttons = ({name, func}) => {
    return (
        <div >
            <button class='funcButton' onClick={func}>{name}</button>
        </div>
    )
}

export default Buttons