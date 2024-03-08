import React, { useState, useRef } from 'react';
import './button.css';
import Emoji from '../emojis/emoji';
import movies, { random } from '../emojis/emojis';
import PointsCounter from '../points/pointsCount';
import LivesCounter from '../lives/livesCount';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [moviesList, setMoviesList] = useState(movies);
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);
  const movieIndexRef = useRef(random());
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const Validation = (event) => {
    event.preventDefault();
    const guessedMovie = inputValue.trim();
    if (movies[movieIndexRef.current].name.toUpperCase() === guessedMovie.toUpperCase()) {
      console.log('Verificado');
      const newMoviesList = moviesList.filter((movie) => movie.name !== movies[movieIndexRef.current].name);
      setMoviesList(newMoviesList);
      setInputValue('');
      setPoints(points + 1);
      movieIndexRef.current = random();
    } else {
      console.warn('Error');
      loseLife(); 
    }
  };

  const loseLife = () => {
    if (lives > 0) {
      setLives(lives - 1);
    }
  };

  return (
    <div className="">
      <header>
      <PointsCounter points={points} />
      <LivesCounter lives={lives} loseLife={loseLife} /> {}
      </header>
      <p>{inputValue}</p>
      <p className="emoji">
        <Emoji symbol={movies[movieIndexRef.current].emoji} />
      </p>

      <form action="">
        <input type="text" value={inputValue} onChange={handleInputChange} className="input" />
        <button className="button" onClick={Validation}>
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
