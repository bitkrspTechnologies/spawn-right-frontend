import React from 'react'

const SuspenseLoader = () => {
    return (
        <div className="loader">
            <div data-glitch="Loading..." className="glitch">Loading...</div>
        </div>
    )
}

export default SuspenseLoader;