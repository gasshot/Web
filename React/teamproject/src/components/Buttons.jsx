import React from 'react'

const Buttons = ({name, func,auth = false}) => {
    return (
        <div >
            <button class={auth == true ? 'funcButton_auth':'funcButton'} onClick={func}>{name}</button>
        </div>
    )
}

export default Buttons