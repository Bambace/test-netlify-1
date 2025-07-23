import { useNavigate, useParams } from 'react-router';
import './Detail.css';
import { useContext } from 'react';
import { ThemeContex } from '../../context/ThemeContext';

export default function Detail({children, heroes}) {

    //recuperare l'id dell'eroe dalla url
    const {id} = useParams();  //useParams per leggere l'id dalla url, questo e una stringa
  console.log(heroes)
    //trovare gli atri dati dell'eroe (heroes,id), questo e un number

  //  const hero = heroes.find(h=>h.id.toString()===id.toString());
    const hero = heroes? heroes.find(h => h.id.toString() === id.toString()):{};
  console.log(hero)

    //const per navigare tra pagine di react-router
    const navigate = useNavigate()

    const {isDarkMode}= useContext(ThemeContex)
    

    return(
        <>
        {children}
  
      <>
        <div className={isDarkMode ? 'detail-card dark' : 'detail-card light'}>
          <h2>{hero.name}</h2>
          <p><b>Età:</b> {hero.age}</p>
          <p><b>Genere:</b> {hero.genre}</p>
          <img src={hero.img_url} alt={hero.name} />
          <p><b>Poteri:</b> {hero.powers}</p>
          <p><b>Stato:</b> {hero.is_alive ? 'vivo' : 'morto'}</p>
        </div>

        <button className='btn' onClick={() => navigate('/')}>Indietro</button>
      </>
  
  </>
);
}