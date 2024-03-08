import React from 'react';


function Emoji({ symbol }) {
    return (
        <span role="img" aria-label="emoji">{symbol}</span>
    );
}

export default Emoji;


