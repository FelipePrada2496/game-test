import { useState } from "react"
import './button.css'
import Emoji from "../emojis/emoji";
import { firstMovieName } from '../emojis/emojis.jsx'
import { random } from "../emojis/emojis.jsx";

function App() {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const Validation = (event) => {
        event.preventDefault();
        if(firstMovieName.name.toUpperCase() === inputValue.toUpperCase()) {
            console.log('verificado')

        }
        else {
            console.warn('Error')
        }
    
    }

    return(
        <div className="position">
            <form action="">
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
            />
            </form>
            <button className="button" onClick={Validation}>Send</button>

            <p>input {inputValue}</p>

            
        </div>
    )
    
}
export default App