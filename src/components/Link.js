import React from 'react';
import PropTypes from 'prop-types';

const Link= ({active, children, onClick}) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{marginLeft: '4px'}}>
            {children}
    </button>
)
    /*
    if(active)
    {
        return <span>{children}</span>
    }

    return (
        <a href="#" onClick={e=> {
            e.preventDefault()
            onClick()
        }}>
            {children}
        </a>
    )
}*/

// creating a new filter object
Link.propTypes={
    active: PropTypes.bool.isRequired, 
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link

