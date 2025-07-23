import { useContext } from 'react';
import './DarkLight.css';
import { ThemeContex } from '../../context/ThemeContext';

export default function DarkLight() {
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContex);

    return(
        <>
        
           <button onClick={()=>{setIsDarkMode(!isDarkMode)}}>
              {isDarkMode ? '☀️':'🌑'}
            </button>
        </>
    );
}