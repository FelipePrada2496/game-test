import React from 'react';
import movies from './emojis.jsx';
import { firstMovieName } from './emojis.jsx'

function Emoji() {

    return (
        <div>
            <p>nombre: {firstMovieName.name}</p>
            <p>Emoji: {firstMovieName.emoji}</p>

        </div>
    );

}

export default Emoji;
