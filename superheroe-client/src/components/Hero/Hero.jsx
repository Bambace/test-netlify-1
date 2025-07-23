import { useContext } from 'react';
import './Hero.css';
import { FaStar,FaRegStar } from "react-icons/fa";
import { ThemeContex } from '../../context/ThemeContext';
import { Link } from 'react-router';
export default function Hero({hero,toggleFavorite}) {

    const {isDarkMode}= useContext(ThemeContex)
    return(
        <>
        <div className={isDarkMode ? 'card-heroe dark ': 'card-heroe light'}>
            <h3>
            
                <Link to={`/detail/${hero.id}`}>
                    {hero.name}
                </Link>
            </h3> 

        <span onClick={toggleFavorite}>
            {hero.isFavorite?(
                <FaStar/>

            ):(
                <FaRegStar />

            )}
            </span>
            
        </div>
        </>
    );
} 